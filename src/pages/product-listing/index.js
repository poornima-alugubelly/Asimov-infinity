import { Filters } from "../../components/filters";
import "./product-listing.css";
import { useProductListing } from "../../context/ProductListingContext.js";
import { getProductListService } from "../../services/getProductListService";
import { useEffect } from "react";
import { ProductCard } from "../../components/product-card";
const ProductListing = () => {
	const { productListingState, productListingDispatch } = useProductListing();
	useEffect(() => {
		(async () => {
			const products = await getProductListService();
			if (products)
				productListingDispatch({ type: "LOAD_DATA", payload: products });
		})();
	}, []);
	return (
		<div class="grid-30-70 main-container-gutter">
			<Filters />
			<div class="grid-product-layout">
				{productListingState.data.map((product) => (
					<ProductCard product={product} />
				))}
			</div>
		</div>
	);
};

export { ProductListing };
