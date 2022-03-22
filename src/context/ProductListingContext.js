import {
	createContext,
	useContext,
	useReducer,
	useEffect,
	useState,
} from "react";
import { productListingReducer } from "../reducers/productListingReducer";
import { getProductListService } from "../services/getProductListService";
import { actionTypes } from "../reducers/actionTypes";
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
			productsLoading: false,
		}
	);

	useEffect(() => {
		(async () => {
			let res = await getProductListService();
			productListingDispatch({
				type: actionTypes.LOADING_DATA,
				payload: { status: true },
			});
			if (res.status === 200) {
				let products = res.data.products;
				products = products.map((item) => ({
					...item,
					discountedPrice: item.price - item.price * (item.discount / 100),
				}));
				productListingDispatch({
					type: actionTypes.LOAD_DATA,
					payload: { products, status: false },
				});
			}
		})();
	}, []);
	console.log("products in context", productListingState.data);
	return (
		<ProductListingContext.Provider
			value={{ productListingState, productListingDispatch }}
		>
			{children}
		</ProductListingContext.Provider>
	);
};

export { useProductListing, ProductListingProvider };
