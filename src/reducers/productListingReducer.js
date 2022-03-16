import { actionTypes } from "./actionTypes";
const productListingReducer = (state, action) => {
	const { LOAD_DATA, SORT_TYPE } = actionTypes;
	switch (action.type) {
		case LOAD_DATA:
			return {
				...state,
				data: [...action.payload],
			};
		case SORT_TYPE[0]:
			return {
				...state,
				sortBy: action.type,
			};
		case SORT_TYPE[1]:
			return {
				...state,
				sortBy: action.type,
			};
	}
};

export { productListingReducer };
