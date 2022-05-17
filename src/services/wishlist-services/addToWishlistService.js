/**
 *
 * This is a service function that adds a product to wishlist of a user in the backend server
 *
 * @type - function
 * @request - POST
 * @param {object} product - The product that needs to be added to wishlist
 * @param {string} token - Auth token which verifies users auth activity
 * @return {object} - response obtained after the request is performed
 * @export {function} addToWishlistService - The service function that adds a product to wishlist on backend server
 */

import axios from "axios";

export const addToWishlistService = async (product, token) => {
	return await axios.post(
		"/api/user/wishlist",
		{ product },
		{ headers: { authorization: token } }
	);
};
