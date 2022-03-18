import { actionTypes } from "./actionTypes";
import { addToCart, increment, decrement } from "../helpers/cart-functions";

const globalReducer = (state, action) => {
	const { ADD_TO_CART, SET_CART, INCREMENT, DECREMENT } = actionTypes;
	switch (action.type) {
		case SET_CART:
			return {
				...state,
				cart: action.payload,
			};
		case ADD_TO_CART:
			return {
				...state,
				cart: addToCart(state.cart, action.payload),
			};
		case INCREMENT:
			return {
				...state,
				cart: increment(state.cart, action.payload),
			};
		case DECREMENT:
			return {
				...state,
				cart: decrement(state.cart, action.payload),
			};
	}
};

export { globalReducer };
