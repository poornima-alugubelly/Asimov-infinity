import {
	createContext,
	useContext,
	useEffect,
	useState,
	useReducer,
} from "react";
import { getCartService } from "../services/cart-services";
import { getWishlistService } from "../services/wishlist-services";
import { userDataReducer } from "../reducers/userDataReducer";
import { useAuth } from "./AuthContext";
import { actionTypes } from "../reducers/actionTypes";
const userDataContext = createContext();
const useUserData = () => useContext(userDataContext);
const UserDataProvider = ({ children }) => {
	const [userData, userDataDispatch] = useReducer(userDataReducer, {
		cartProducts: [],
		wishlistProducts: [],
	});

	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	const { SET_CART, SET_WISHLIST } = actionTypes;
	const { auth } = useAuth();

	useEffect(() => {
		auth.isAuth &&
			(async () => {
				setLoading(true);
				try {
					const res = await getCartService(auth.token);

					if (res.status === 200) {
						userDataDispatch({
							type: SET_CART,
							payload: { cart: res.data.cart },
						});
						setLoading(false);
					}
				} catch (err) {
					console.log("error", err);
				}
			})();

		auth.isAuth &&
			(async () => {
				setLoading(true);
				try {
					const res = await getWishlistService(auth.token);
					if (res.status === 200) {
						userDataDispatch({
							type: SET_WISHLIST,
							payload: { wishlist: res.data.wishlist },
						});
						setLoading(false);
					}
				} catch (err) {
					console.log("error", err);
				}
			})();
	}, [auth.isAuth]);

	console.log("userData", userData);
	return (
		<userDataContext.Provider
			value={{ userData, userDataDispatch, error, loading }}
		>
			{children}
		</userDataContext.Provider>
	);
};

export { UserDataProvider, useUserData };
