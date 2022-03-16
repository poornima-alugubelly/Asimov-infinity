import { actionTypes } from "./actionTypes";
const productListingReducer = (state, action) => {
	const {
		LOAD_DATA,
		LOW_TO_HIGH,
		HIGH_TO_LOW,
		PRICE,
		ACCESSORIES,
		BOOKS,
		CLOTHING,
		LIFESTYLE,
		RATING,
		STATIONERY,
		WALLART,
		DISCOUNT,
		CLEAR,
	} = actionTypes;
	switch (action.type) {
		case LOAD_DATA:
			return {
				...state,
				data: [...action.payload],
			};
		case LOW_TO_HIGH:
			return {
				...state,
				sortBy: action.type,
			};
		case HIGH_TO_LOW:
			return {
				...state,
				sortBy: action.type,
			};
		case PRICE:
			return {
				...state,
				price: action.price_value,
			};
		case ACCESSORIES:
			return {
				...state,
				categories: {
					...state["categories"],
					accessories: !state.categories.accessories,
				},
			};
		case BOOKS:
			return {
				...state,
				categories: {
					...state["categories"],
					books: !state.categories.books,
				},
			};
		case CLOTHING:
			return {
				...state,
				categories: {
					...state["categories"],
					clothing: !state.categories.clothing,
				},
			};
		case LIFESTYLE:
			return {
				...state,
				categories: {
					...state["categories"],
					lifestyle: !state.categories.lifestyle,
				},
			};
		case STATIONERY:
			return {
				...state,
				categories: {
					...state["categories"],
					stationery: !state.categories.stationery,
				},
			};
		case WALLART:
			return {
				...state,
				categories: {
					...state["categories"],
					wallart: !state.categories.wallart,
				},
			};
		case RATING:
			return {
				...state,
				rating: parseInt(action.value, 10),
			};

		case DISCOUNT:
			return {
				...state,
				discount: parseInt(action.value, 10),
			};
		case CLEAR:
			return {
				...state,
				sortBy: "",
				categories: {
					accessories: false,
					books: false,
					clothing: false,
					lifestyle: false,
					stationery: false,
					wallart: false,
				},
				price: 5000,
				discount: "",
				rating: 1,
			};

		default:
			return state;
	}
};

export { productListingReducer };
