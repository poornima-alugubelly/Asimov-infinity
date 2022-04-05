import { useState, useEffect } from "react";
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
import { useCallback } from "react";

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
	}

	const pricedProducts = getPricedProducts(products, price);
	const discountedProducts = getDiscountedProducts(pricedProducts, discount);
	const categoryProducts = getFliteredProducts(discountedProducts, categories);
	const ratedProducts = getRatedProducts(categoryProducts, rating);
	const finalFilteredProducts = getSortedProducts(ratedProducts, sortBy);
	const totalPages = Math.ceil(finalFilteredProducts.length / 8);
	console.log("total", totalPages);
	const [currPage, setCurrPage] = useState(1);
	const [pagesArray, setPagesArray] = useState([1, 2, 3]);
	const pageLimit = 3;
	const setValue = useCallback(() => {
		setPagesArray(
			Array(totalPages)
				.fill()
				.map((_, idx) => idx + 1)
		);
	}, [totalPages]);

	useEffect(() => {
		totalPages < 3 ? setValue() : setPagesArray([1, 2, 3]);
	}, [setValue]);

	const pageProducts = finalFilteredProducts.slice(
		1 + 8 * (currPage - 1),
		currPage * 8 + 1
	);

	const getPagesArray = (start) => {
		let limit = pageLimit;
		if (start + pageLimit - 1 > totalPages) limit = totalPages - start + 1;

		setPagesArray(
			Array(limit)
				.fill()
				.map((_, idx) => start + idx)
		);
		setCurrPage(start);
	};

	return !productsLoading ? (
		<div className="grid-30-70 main-container-gutter">
			<ProductFilters />
			{pageProducts.length ? (
				<div className="productListing-space-between">
					<div className="grid-product-layout">
						{pageProducts.map((product) => (
							<ProductCard key={product._id} product={product} />
						))}
					</div>
					<div className="flex-row gap-s flex-center padding-tp-btm-s">
						<button
							className={`btn btn-primary-outline ${
								pagesArray && pagesArray[0] === 1 ? "btn-disabled" : ""
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
							onClick={() =>
								getPagesArray(pagesArray[pagesArray.length - 1] + 1)
							}
						>
							Next
						</button>
					</div>
				</div>
			) : (
				<h2 className="text-center">No products found...</h2>
			)}
		</div>
	) : (
		<Loader />
	);
};
