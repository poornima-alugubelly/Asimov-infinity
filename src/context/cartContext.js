import { createContext, useContext, useEffect, useState } from "react";
import { getCartService } from "../services/cart-services/getCartService";
import { useAuth } from "./AuthContext";
const cartContext = createContext();
const useCart = () => useContext(cartContext);
const CartProvider = ({ children }) => {
	const [cart, setCart] = useState({
		cartProducts: [],
		cartError: false,
		cartLoading: false,
	});

	const { auth } = useAuth();
	useEffect(
		() =>
			(async () => {
				if (auth.isAuth) {
					setCart((prev) => ({ ...prev, cartLoading: true }));
					try {
						const res = await getCartService(auth.token);
						console.log(cart);
						if (res.status === 200)
							setCart((prev) => ({
								...prev,
								cartProducts: res.data.cart,
								cartLoading: false,
							}));
					} catch (err) {
						err && setCart((prev) => ({ ...prev, cartError: true }));
					}
				} else {
					setCart((prev) => ({
						...prev,
						cartProducts: [],
						cartLoading: false,
					}));
				}
			})(),
		[auth.isAuth]
	);

	// console.log("cart", ...cart.cartProducts);
	return (
		<cartContext.Provider value={{ cart, setCart }}>
			{children}
		</cartContext.Provider>
	);
};

export { CartProvider, useCart };
