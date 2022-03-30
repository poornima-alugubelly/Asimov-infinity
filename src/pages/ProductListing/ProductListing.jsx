import { ProductFilters } from "./components/ProductFilters/ProductFilters.jsx";
import "./ProductListing.css";
import { useProductListing } from "../../context/ProductListingContext.js";
import { ProductCard } from "./components/ProductCard/ProductCard.jsx";
import { Loader } from "../../components/Loader/Loader.jsx";
import {
	getSortedProducts,
	getPricedProducts,
	getDiscountedProducts,
	getFliteredProducts,
	getRatedProducts,
} from "../../helpers/filter-functions";
import { getSearchedProducts } from "../../helpers/getSearchedProducts.js";

export const ProductListing = () => {
	const { productListingState } = useProductListing();
	const {
		data,
		sortBy,
		price,
		categories,
		rating,
		discount,
		productsLoading,
		searchText,
	} = productListingState;
	let products = [...data];
	if (searchText) {
		products = getSearchedProducts(data, searchText);
		console.log(products);
	}

	const pricedProducts = getPricedProducts(products, price);
	const discountedProducts = getDiscountedProducts(pricedProducts, discount);
	const categoryProducts = getFliteredProducts(discountedProducts, categories);
	const ratedProducts = getRatedProducts(categoryProducts, rating);
	const finalFilteredProducts = getSortedProducts(ratedProducts, sortBy);

	return !productsLoading ? (
		<div class="grid-30-70 main-container-gutter">
			<ProductFilters />
			<div class="grid-product-layout">
				{finalFilteredProducts.map((product) => (
					<ProductCard key={product._id} product={product} />
				))}
			</div>
		</div>
	) : (
		<Loader />
	);
};
