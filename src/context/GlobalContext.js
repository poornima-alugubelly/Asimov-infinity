import { useReducer, createContext, useContext, useEffect } from "react";
import { globalReducer } from "../reducers/globalReducer";
import { getCartService } from "../services/getCartService";
import { useAuth } from "./AuthContext";
import { actionTypes } from "../reducers/actionTypes";
const globalContext = createContext();
const useGlobal = () => useContext(globalContext);
const GlobalProvider = ({ children }) => {
	const [globalState, globalDispatch] = useReducer(globalReducer, {
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
					if (cart) globalDispatch({ type: SET_CART, payload: { cart } });
				}
			})(),
		[auth.isAuth]
	);

	console.log("cart", ...globalState.cart);
	return (
		<globalContext.Provider value={{ globalState, globalDispatch }}>
			{children}
		</globalContext.Provider>
	);
};

export { GlobalProvider, useGlobal };
