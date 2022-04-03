import {
	createContext,
	useContext,
	useEffect,
	useState,
	useReducer,
} from "react";
import { getCartService } from "../services/cart-services";
import { getWishlistService } from "../services/wishlist-services";
import { getAddressListService } from "../services/address-services";
import { userDataReducer } from "../reducers/userDataReducer";
import { useAuth } from "./AuthContext";
import { actionTypes } from "../reducers/actionTypes";
const userDataContext = createContext();
const useUserData = () => useContext(userDataContext);
const UserDataProvider = ({ children }) => {
	const [userData, userDataDispatch] = useReducer(userDataReducer, {
		cartProducts: [],
		wishlistProducts: [],
		addressList: [],
		ordersDetails: {
			cartItemsTotal: "",
			cartItemsDiscountTotal: "",
			couponDiscountTotal: "",
			orderAddress: "",
		},
	});

	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	const { SET_CART, SET_WISHLIST, SET_ADDRESSLIST, SET_ORDER } = actionTypes;
	const { auth } = useAuth();

	useEffect(() => {
		auth.isAuth &&
			(async () => {
				setLoading(true);
				try {
					const res = await getCartService(auth.token);
					console.log(res.data.cart, "res");
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
		auth.isAuth &&
			(async () => {
				setLoading(true);
				try {
					const res = await getAddressListService(auth.token);
					console.log("addresses", res);
					if (res.status === 200) {
						userDataDispatch({
							type: SET_ADDRESSLIST,
							payload: { addressList: res.data.addressList },
						});

						setLoading(false);
					}
				} catch (err) {
					console.log("error", err);
				}
			})();
	}, [auth.isAuth]);

	// console.log("userData", userData.ordersDetails);
	return (
		<userDataContext.Provider
			value={{ userData, userDataDispatch, error, loading }}
		>
			{children}
		</userDataContext.Provider>
	);
};

export { UserDataProvider, useUserData };
