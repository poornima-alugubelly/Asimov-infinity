import { actionTypes } from "./actionTypes";
export const userDataReducer = (state, action) => {
	const { SET_WISHLIST, SET_CART } = actionTypes;

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
	}
};
