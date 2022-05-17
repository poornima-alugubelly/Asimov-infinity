/**
 *
 * This is a service function that performs the addition of an item to cart on the backend server
 *
 * @type - function
 * @request - POST
 * @param {string} product - The Id of the item which needs to be removed from cart
 * @param {string} token - Auth token which verifies users auth activity
 * @return {object} - response obtained after the request is performed
 * @export {function}   removeProductCartService - The service function that removes an item to cart of the user
 */

import axios from "axios";

export const removeProductCartService = async (productId, token) => {
	return await axios.delete(`/api/user/cart/${productId}`, {
		headers: { authorization: token },
	});
};
