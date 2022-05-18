/**
 *
 * This is a service function that removes a product from wishlist of a user in the backend server
 *
 * @type - function
 * @request - DELETE
 * @param {object} item - The item that needs to be removed from wishlist
 * @param {string} token - Auth token which verifies users auth activity
 * @return {object} - response obtained after the request is performed
 * @export {function} removeProductWishlistService - The service function that removes a product from
 *                                                wishlist on backend server
 */

import axios from "axios";

export const removeProductWishlistService = async (productId, token) => {
	return await axios.delete(`/api/user/wishlist/${productId}`, {
		headers: { authorization: token },
	});
};
