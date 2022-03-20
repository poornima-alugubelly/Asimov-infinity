import { actionTypes } from "../../../../reducers/actionTypes.js";
import { useProductListing } from "../../../../context/ProductListingContext.js";
import "./ProductFilters.css";
import { useState } from "react";
export const ProductFilters = () => {
	const {
		LOW_TO_HIGH,
		HIGH_TO_LOW,
		PRICE,
		ACCESSORIES,
		BOOKS,
		CLOTHING,
		LIFESTYLE,
		RATING,
		STATIONERY,
		WALLART,
		DISCOUNT,
		CLEAR,
	} = actionTypes;
	const { productListingDispatch, productListingState } = useProductListing();
	const { sortBy, categories, price, rating, discount } = productListingState;
	const { accessories, books, clothing, lifestyle, stationery, wallart } =
		categories;
	const [filterToggle, setFilterToggle] = useState("");
	const filterToggler = () => {
		filterToggle === ""
			? setFilterToggle("filter-active")
			: setFilterToggle("");
	};
	return (
		<div class={`filter-container padding-s flex-column gap-s ${filterToggle}`}>
			<section class="filter-section filter-title flex-space-between">
				<h3 class="text-s filter-option" onClick={() => filterToggler()}>
					{filterToggle ? "APPLY NOW" : "FILTERS"}
				</h3>
				<span
					class="link-text text-xs clear-option"
					onClick={() => productListingDispatch({ type: CLEAR })}
				>
					Clear All
				</span>
			</section>
			<div class="filter-wrapper flex-column gap-s">
				<section class="filter-section">
					<ul class="filter-input-wrapper flex-column gap-xs">
						<h3>SORT</h3>
						<li>
							<label for="price-L2H" class="flex-row gap-xs">
								<input
									type="radio"
									class="input-radio element-round"
									id="price-L2H"
									name="radio-item-sort"
									value="lowToHigh"
									checked={sortBy === LOW_TO_HIGH}
									onChange={() => productListingDispatch({ type: LOW_TO_HIGH })}
								/>

								<span>Price - Low to High</span>
							</label>
						</li>

						<li>
							<label for="price-H2L" class="flex-row gap-xs">
								<input
									type="radio"
									class="input-radio element-round"
									id="price-H2L"
									name="radio-item-sort"
									value="highToLow"
									checked={sortBy === HIGH_TO_LOW}
									onChange={() => productListingDispatch({ type: HIGH_TO_LOW })}
								/>
								<span>Price - High to Low</span>
							</label>
						</li>
					</ul>
				</section>
				<section class="filter-section">
					<h3>PRICE</h3>
					<datalist id="tickmarks">
						<option value="1000" label="1k"></option>
						<option value="2000" label="2k"></option>
						<option value="3000" label="3k"></option>
						<option value="4000" label="4k"></option>
						<option value="5000" label="5k"></option>
					</datalist>
					<input
						type="range"
						name=""
						class="slider"
						step="1000"
						min="1000"
						max="5000"
						value={price}
						onChange={(e) =>
							productListingDispatch({
								type: PRICE,
								price_value: e.target.value,
							})
						}
						style={{
							background: `linear-gradient(
        to right,
        var(--primary-color) ${((price - 1000) / 4000) * 100}%,
        var(--ternary-dark) ${((price - 1000) / 4000) * 100}%
    )`,
						}}
					/>
				</section>
				<section class="filter-section">
					<ul class="filter-input-wrapper flex-column gap-xs">
						<h3>CATEGORY</h3>
						<li>
							<label for="checkbox-accessories" class="flex-row gap-xs">
								<input
									type="checkbox"
									name="checkbox"
									id="checkbox-accessories"
									class="input-checkbox"
									checked={accessories}
									onChange={(e) =>
										productListingDispatch({ type: ACCESSORIES })
									}
								/>
								Accessories
							</label>
						</li>
						<li>
							<label for="checkbox-books" class="flex-row gap-xs">
								<input
									type="checkbox"
									name="checkbox"
									id="checkbox-books"
									class="input-checkbox"
									checked={books}
									onChange={(e) => productListingDispatch({ type: BOOKS })}
								/>
								Books
							</label>
						</li>
						<li>
							<label for="checkbox-clothing" class="flex-row gap-xs">
								<input
									type="checkbox"
									name="checkbox"
									id="checkbox-clothing"
									class="input-checkbox"
									checked={clothing}
									onChange={(e) => productListingDispatch({ type: CLOTHING })}
								/>
								Clothing
							</label>
						</li>
						<li>
							<label for="checkbox-living" class="flex-row gap-xs">
								<input
									type="checkbox"
									name="checkbox"
									id="checkbox-living"
									class="input-checkbox"
									checked={lifestyle}
									onChange={(e) => productListingDispatch({ type: LIFESTYLE })}
								/>
								Lifestyle
							</label>
						</li>
						<li>
							<label for="checkbox-stationery" class="flex-row gap-xs">
								<input
									type="checkbox"
									name="checkbox"
									id="checkbox-stationery"
									class="input-checkbox"
									checked={stationery}
									onChange={(e) => productListingDispatch({ type: STATIONERY })}
								/>
								Stationery
							</label>
						</li>
						<li>
							<label for="checkbox-wallart" class="flex-row gap-xs">
								<input
									type="checkbox"
									name="checkbox"
									id="checkbox-wallart"
									class="input-checkbox"
									checked={wallart}
									onChange={(e) => productListingDispatch({ type: WALLART })}
								/>
								Wall Art
							</label>
						</li>
					</ul>
				</section>
				<section class="filter-section">
					<ul class="filter-input-wrapper flex-column gap-xs">
						<h3>RATING</h3>
						<li>
							<label for="input-4star" class="flex-row gap-xs">
								<input
									type="radio"
									class="input-radio element-round"
									id="input-4star"
									name="radio-item"
									value="4"
									checked={rating === 4}
									onChange={(e) =>
										productListingDispatch({
											type: RATING,
											value: e.target.value,
										})
									}
								/>

								<span>4 Stars & above</span>
							</label>
						</li>

						<li>
							<label for="input-3star" class="flex-row gap-xs">
								<input
									type="radio"
									class="input-radio element-round"
									id="input-3star"
									name="radio-item"
									value="3"
									checked={rating === 3}
									onChange={(e) =>
										productListingDispatch({
											type: RATING,
											value: e.target.value,
										})
									}
								/>
								<span>3 Stars & above</span>
							</label>
						</li>
						<li>
							<label for="input-2star" class="flex-row gap-xs">
								<input
									type="radio"
									class="input-radio element-round"
									id="input-2star"
									name="radio-item"
									value="2"
									checked={rating === 2}
									onChange={(e) =>
										productListingDispatch({
											type: RATING,
											value: e.target.value,
										})
									}
								/>
								<span>2 Stars & above</span>
							</label>
						</li>
						<li>
							<label for="input-1star" class="flex-row gap-xs">
								<input
									type="radio"
									class="input-radio element-round"
									id="input-1star"
									name="radio-item"
									value="1"
									checked={rating === 1}
									onChange={(e) =>
										productListingDispatch({
											type: RATING,
											value: e.target.value,
										})
									}
								/>
								<span>1 Stars & above</span>
							</label>
						</li>
					</ul>
				</section>
				<section class="filter-section">
					<ul class="filter-input-wrapper flex-column gap-xs">
						<h3>DISCOUNT</h3>
						<li>
							<label for="input-50%" class="flex-row gap-xs">
								<input
									type="radio"
									class="input-radio element-round"
									id="input-50%"
									name="radio-discount"
									checked={discount === 50}
									value="50"
									onChange={(e) =>
										productListingDispatch({
											type: DISCOUNT,
											value: e.target.value,
										})
									}
								/>

								<span>50% and above</span>
							</label>
						</li>

						<li>
							<label for="input-40%" class="flex-row gap-xs">
								<input
									type="radio"
									class="input-radio element-round"
									id="input-40%"
									name="radio-discount"
									checked={discount === 40}
									value="40"
									onChange={(e) =>
										productListingDispatch({
											type: DISCOUNT,
											value: e.target.value,
										})
									}
								/>
								<span>40% and above</span>
							</label>
						</li>
						<li>
							<label for="input-30%" class="flex-row gap-xs">
								<input
									type="radio"
									class="input-radio element-round"
									id="input-30%"
									name="radio-discount"
									checked={discount === 30}
									value="30"
									onChange={(e) =>
										productListingDispatch({
											type: DISCOUNT,
											value: e.target.value,
										})
									}
								/>
								<span>30% and above</span>
							</label>
						</li>
						<li>
							<label for="input-20%" class="flex-row gap-xs">
								<input
									type="radio"
									class="input-radio element-round"
									id="input-20%"
									name="radio-discount"
									checked={discount === 20}
									value="20"
									onChange={(e) =>
										productListingDispatch({
											type: DISCOUNT,
											value: e.target.value,
										})
									}
								/>
								<span>20% and above</span>
							</label>
						</li>
						<li>
							<label for="input-10%" class="flex-row gap-xs">
								<input
									type="radio"
									class="input-radio element-round"
									id="input-10%"
									name="radio-discount"
									value="10"
									checked={discount === 10}
									onChange={(e) =>
										productListingDispatch({
											type: DISCOUNT,
											value: e.target.value,
										})
									}
								/>
								<span>10% and above</span>
							</label>
						</li>
					</ul>
				</section>
			</div>
		</div>
	);
};
