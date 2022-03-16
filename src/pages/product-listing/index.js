import { Filters } from "../../components/filters";
import "./product-listing.css";
import { useProductListing } from "../../context/ProductListingContext.js";
import { getProductListService } from "../../services/getProductListService.js";
import { useEffect } from "react";
import { ProductCard } from "../../components/product-card";
import { actionTypes } from "../../reducers/actionTypes";
import { getSortedProducts } from "../../helpers/filter-functions";
const ProductListing = () => {
	const { productListingState, productListingDispatch } = useProductListing();
	const { data, sortBy } = productListingState;
	useEffect(() => {
		(async () => {
			let products = await getProductListService();
			products = products.map((item) =>
				Object.defineProperty(item, "discountedPrice", {
					get: function () {
						return this.price - this.price * (this.discount / 100);
					},
				})
			);
			if (products) {
				productListingDispatch({
					type: actionTypes.LOAD_DATA,
					payload: products,
				});
			}
		})();
	}, []);
	const sortedProducts = getSortedProducts(data, sortBy);
	return (
		<div class="grid-30-70 main-container-gutter">
			<Filters />
			<div class="grid-product-layout">
				{sortedProducts.map((product) => (
					<ProductCard product={product} />
				))}
			</div>
		</div>
	);
};

export { ProductListing };
