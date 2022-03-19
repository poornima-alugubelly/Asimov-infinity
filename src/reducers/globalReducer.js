import { actionTypes } from "./actionTypes";
const globalReducer = (state, action) => {
	const { SET_CART } = actionTypes;
	switch (action.type) {
		case SET_CART:
			return {
				...state,
				cart: action.payload.cart,
			};
	}
};

export { globalReducer };
