import { actionTypes } from "../../reducers/actionTypes";
import { useProductListing } from "../../context/ProductListingContext";
const Filters = () => {
	const { SORT_TYPE } = actionTypes;
	const { productListingDispatch, productListingState } = useProductListing();
	const { sortBy } = productListingState;
	return (
		<fieldset>
			<button
				className="btn btn-primary-outline"
				onClick={() => productListingDispatch({ type: "CLEAR" })}
			>
				Cleat All
			</button>
			<h3>Sort by price</h3>
			<label for="radio-input-1" className="flex-row gap-s">
				<input
					type="radio"
					className="input-radio element-round"
					id="radio-input-1"
					name="radio-item"
					value="lowToHigh"
					checked={sortBy === SORT_TYPE[0]}
					onChange={() => productListingDispatch({ type: "LOW_TO_HIGH" })}
				/>

				<span>Low to High</span>
			</label>
			<label for="radio-input-2" className="flex-row gap-s">
				<input
					type="radio"
					className="input-radio element-round"
					id="radio-input-2"
					name="radio-item"
					value="highToLow"
					checked={sortBy === SORT_TYPE[1]}
					onChange={() => productListingDispatch({ type: "HIGH_TO_LOW" })}
				/>
				<span>High to low</span>
			</label>
		</fieldset>
	);
};

export { Filters };
