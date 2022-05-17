/**
 *
 * Utility function to filter products based on discount selected by user
 *
 *
 * @param {array} pricedProducts - array of products filtered based on price
 * @param {number} discount  - discount input selected by the user
 * @returns {array} - array of products filtered based on discount
 */

export const getDiscountedProducts = (pricedProducts, discount) => {
	if (discount) {
		return pricedProducts.filter((item) => item.discount >= discount);
	}
	return pricedProducts;
};
