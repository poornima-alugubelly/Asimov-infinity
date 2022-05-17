/**
 *
 * Utility function to filter products based on price range chosen by user
 *
 * @param {array} products - an array of all products
 * @param {price} price - price input selected by user
 * @returns {array} return array of products filtered based on price
 */

export const getPricedProducts = (products, price) => {
	return products.filter((item) => item.price <= price);
};
