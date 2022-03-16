import { Filters } from "../../components/filters";
import "./product-listing.css";
import { useProductListing } from "../../context/ProductListingContext.js";
import { getProductListService } from "../../services/getProductListService.js";
import { useEffect } from "react";
import { ProductCard } from "../../components/product-card";
import { actionTypes } from "../../reducers/actionTypes";
import {
	getSortedProducts,
	getPricedProducts,
	getDiscountedProducts,
	getFliteredProducts,
	getRatedProducts,
} from "../../helpers/filter-functions";
const ProductListing = () => {
	const { productListingState, productListingDispatch } = useProductListing();
	const { data, sortBy, price, categories, rating, discount } =
		productListingState;
	useEffect(() => {
		(async () => {
			let products = await getProductListService();
			products = products.map((item) => ({
				...item,
				discountedPrice: item.price - item.price * (item.discount / 100),
			}));
			if (products) {
				productListingDispatch({
					type: actionTypes.LOAD_DATA,
					payload: products,
				});
			}
		})();
	}, []);
	const pricedProducts = getPricedProducts(data, price);
	const discountedProducts = getDiscountedProducts(pricedProducts, discount);
	const categoryProducts = getFliteredProducts(discountedProducts, categories);
	const ratedProducts = getRatedProducts(categoryProducts, rating);
	const finalFilteredProducts = getSortedProducts(ratedProducts, sortBy);
	return (
		<div class="grid-30-70 main-container-gutter">
			<Filters />
			<div class="grid-product-layout">
				{finalFilteredProducts.map((product) => (
					<ProductCard product={product} />
				))}
			</div>
		</div>
	);
};

export { ProductListing };
