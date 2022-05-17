/**
 *
 * This is a service function that performs the addition of an item to cart on the backend server
 *
 * @type - function
 * @request - POST
 * @param {string} productId - Id of the product whose quantity needs to be updated
 * @param {string} token - Auth token which verifies users auth activity
 * @param {string} type - String which has a value of increment / decrement based on which the quantity
 *                       is updated
 * @return {object} - response obtained after the request is performed
 * @export {function} addToCartService - The service function that add's an item to cart of the user
 */

import axios from "axios";

export const cartCounterService = async (productId, token, type) => {
	return await axios.post(
		`/api/user/cart/${productId}`,
		{ action: { type } },
		{ headers: { authorization: token } }
	);
};
