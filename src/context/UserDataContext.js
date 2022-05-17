/**
 * /**
 *
 * This is a Context Provider for the user date
 *
 * @type - context-provider
 * @return {react-component} - UserDataProvider component
 * @export {react-component} - UserDataProvider component
 * @export {custom-hook} - useUserData()
 */

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
import { getOrdersService } from "../services/order-services/getOrdersService";
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
			orderId: "",
		},
		orders: [],
	});

	const [loading, setLoading] = useState(false);

	const { SET_CART, SET_WISHLIST, SET_ADDRESSLIST, SET_ORDERS, RESET } =
		actionTypes;
	const { auth } = useAuth();

	useEffect(() => {
		if (auth.isAuth) {
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
					console.log(err);
				}
			})();

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
					console.log(err);
				}
			})();

			(async () => {
				setLoading(true);
				try {
					const res = await getAddressListService(auth.token);

					if (res.status === 200) {
						userDataDispatch({
							type: SET_ADDRESSLIST,
							payload: { addressList: res.data.addressList },
						});

						setLoading(false);
					}
				} catch (err) {
					console.log(err);
				}
			})();

			(async () => {
				setLoading(true);
				try {
					const res = await getOrdersService(auth.token);
					console.log("orders", res);
					if (res.status === 200) {
						userDataDispatch({
							type: SET_ORDERS,
							payload: { orders: res.data.orders },
						});

						setLoading(false);
					}
				} catch (err) {
					console.log(err);
				}
			})();
		}
	}, [auth.isAuth]);

	return (
		<userDataContext.Provider value={{ userData, userDataDispatch, loading }}>
			{children}
		</userDataContext.Provider>
	);
};

export { UserDataProvider, useUserData };
