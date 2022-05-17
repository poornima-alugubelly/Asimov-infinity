/**
 *
 * utility class to filter products based on the rating input of user
 *
 * @param {array} categoryProducts - array of producst filtered based on category
 * @param {number} rating - rating input selected by user
 * @returns {array} array of products filtered based on rating
 */

export const getRatedProducts = (categoryProducts, rating) => {
	return categoryProducts.filter((item) => item.rating >= rating);
};
