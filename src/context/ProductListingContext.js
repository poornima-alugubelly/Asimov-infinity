import { createContext, useContext, useReducer } from "react";
import { productListingReducer } from "../reducers/productListingReducer";
const ProductListingContext = createContext();
const useProductListing = () => useContext(ProductListingContext);

const ProductListingProvider = ({ children }) => {
	const [productListingState, productListingDispatch] = useReducer(
		productListingReducer,
		{
			data: [],
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
		}
	);
	return (
		<ProductListingContext.Provider
			value={{ productListingState, productListingDispatch }}
		>
			{children}
		</ProductListingContext.Provider>
	);
};

export { useProductListing, ProductListingProvider };
