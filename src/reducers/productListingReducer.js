import { actionTypes } from "./actionTypes";
const productListingReducer = (state, action) => {
	const { LOAD_DATA } = actionTypes;
	switch (action.type) {
		case LOAD_DATA:
			return {
				...state,
				data: [...action.payload],
			};
	}
};

export { productListingReducer };
