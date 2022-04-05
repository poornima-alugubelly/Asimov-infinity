import { actionTypes } from "./actionTypes";
export const userDataReducer = (state, action) => {
	const {
		SET_WISHLIST,
		SET_CART,
		SET_ADDRESSLIST,
		SET_ORDER,
		SET_ORDERS,
		RESET,
	} = actionTypes;

	switch (action.type) {
		case SET_CART:
			return {
				...state,
				cartProducts: [...action.payload.cart],
			};
		case SET_WISHLIST:
			return {
				...state,
				wishlistProducts: [...action.payload.wishlist],
			};
		case SET_ADDRESSLIST:
			return {
				...state,
				addressList: [...action.payload.addressList],
			};
		case SET_ORDER:
			return {
				...state,
				orderDetails: {
					...state.ordersDetails,
					...action.payload.orderDetails,
				},
			};
		case SET_ORDERS:
			return {
				...state,
				orders: [...action.payload.orders],
			};
		case RESET:
			return {
				state: {
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
				},
			};
	}
};
