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
import { getCategoryService } from "../services/getCategoryService";
const ProductListingContext = createContext();
const useProductListing = () => useContext(ProductListingContext);

const ProductListingProvider = ({ children }) => {
	const [productListingState, productListingDispatch] = useReducer(
		productListingReducer,
		{
			data: [],
			categoriesData: [],
			sortBy: "",
			categories: {},
			price: 5000,
			discount: "",
			rating: 1,
			productsLoading: false,
			searchText: "",
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
		(async () => {
			try {
				let res = await getCategoryService();
				productListingDispatch({
					type: actionTypes.LOADING_DATA,
					payload: { status: true },
				});

				if (res.status === 200) {
					let categoriesData = res.data.categories;
					let categories = categoriesData.reduce(
						(acc, curr) => ({ ...acc, [curr.categoryName]: false }),
						{}
					);

					productListingDispatch({
						type: actionTypes.LOAD_DATA,
						payload: { categories, status: false, categoriesData },
					});
				}
			} catch (err) {
				console.log("error", err);
			}
		})();
	}, []);
	console.log("data", productListingState);
	return (
		<ProductListingContext.Provider
			value={{ productListingState, productListingDispatch }}
		>
			{children}
		</ProductListingContext.Provider>
	);
};

export { useProductListing, ProductListingProvider };
