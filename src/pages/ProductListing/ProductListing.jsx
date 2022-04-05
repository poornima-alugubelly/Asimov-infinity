import { useState } from "react";
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
	const totalPages = Math.ceil(finalFilteredProducts.length / 8);

	const [currPage, setCurrPage] = useState(1);
	const [pagesArray, setPagesArray] = useState([1, 2, 3]);
	const pageLimit = 3;

	const pageProducts = finalFilteredProducts.slice(
		1 + 8 * (currPage - 1),
		currPage * 8 + 1
	);

	const getPagesArray = (start) => {
		let limit = pageLimit;
		if (start + pageLimit - 1 > totalPages) limit = totalPages - start + 1;
		console.log(
			Array(limit)
				.fill()
				.map((_, idx) => start + idx)
		);
		setPagesArray(
			Array(limit)
				.fill()
				.map((_, idx) => start + idx)
		);
		setCurrPage(start);
	};
	console.log("pagesArray", pagesArray);
	return !productsLoading ? (
		<div className="grid-30-70 main-container-gutter">
			<ProductFilters />
			<div>
				<div className="grid-product-layout">
					{pageProducts.map((product) => (
						<ProductCard key={product._id} product={product} />
					))}
				</div>
				<div className="flex-row gap-s flex-align-center">
					<button
						className={`btn btn-primary-outline ${
							pagesArray[0] === 1 ? "btn-disabled" : ""
						}`}
						onClick={() => getPagesArray(pagesArray[0] - pageLimit)}
					>
						Previous
					</button>

					{pagesArray.map((pageNumber) => (
						<span
							role="button"
							className={`${
								currPage === pageNumber ? "btn btn-primary-solid" : ""
							} pointer`}
							onClick={() => setCurrPage(pageNumber)}
						>
							{pageNumber}
						</span>
					))}

					<button
						className={`btn btn-primary-outline ${
							pagesArray[0] + pageLimit > totalPages ? "btn-disabled" : ""
						}`}
						onClick={() => getPagesArray(pagesArray[pagesArray.length - 1] + 1)}
					>
						Next
					</button>
				</div>
			</div>
		</div>
	) : (
		<Loader />
	);
};
