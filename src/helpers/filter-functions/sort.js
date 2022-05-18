/**
 *
 * Utility function to get products sorted based on price
 *
 * @param {array} ratedProducts - array of products filtered based on rating
 * @param {string} sortBy - string which indicated whether to sort in ascending or descending order
 * @returns {array} - sorted array based on user input of low to high or high to low
 */
import { constants } from "../constants";

export const getSortedProducts = (ratedProducts, sortBy) => {
	const { LOW_TO_HIGH, HIGH_TO_LOW } = constants;
	if (sortBy === LOW_TO_HIGH)
		return [...ratedProducts].sort(
			(item1, item2) => item1.discountedPrice - item2.discountedPrice
		);
	if (sortBy === HIGH_TO_LOW)
		return [...ratedProducts].sort(
			(item1, item2) => item2.discountedPrice - item1.discountedPrice
		);

	return ratedProducts;
};
