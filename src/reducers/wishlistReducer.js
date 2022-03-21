import { actionTypes } from "./actionTypes";
export const wishlistReducer = (state, dispatch) => {
	const { SET_WISHLIST } = actionTypes;

	switch (actionTypes.type) {
		case SET_WISHLIST:
			return {
				...state,
				wishlist: actionTypes.payload.wishlist,
			};
	}
};
