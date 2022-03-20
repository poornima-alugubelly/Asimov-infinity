import { useReducer, createContext, useContext, useEffect } from "react";
import { cartReducer } from "../reducers/cartReducer";
import { getCartService } from "../services/getCartService";
import { useAuth } from "./AuthContext";
import { actionTypes } from "../reducers/actionTypes";
const cartContext = createContext();
const useCart = () => useContext(cartContext);
const CartProvider = ({ children }) => {
	const [cartState, cartDispatch] = useReducer(cartReducer, {
		cart: [],
		cartError: false,
	});

	const { SET_CART } = actionTypes;
	const { auth } = useAuth();
	useEffect(
		() =>
			(async () => {
				console.log("in use effect");
				if (auth.isAuth) {
					console.log("calling");
					const cart = await getCartService(auth.token);
					console.log(cart);
					if (cart) cartDispatch({ type: SET_CART, payload: { cart } });
				}
			})(),
		[auth.isAuth]
	);

	console.log("cart", ...cartState.cart);
	return (
		<cartContext.Provider value={{ cartState, cartDispatch }}>
			{children}
		</cartContext.Provider>
	);
};

export { CartProvider, useCart };
