/**
 *
 * This is a service function that performs the addition of an item to cart on the backend server
 *
 * @type - function
 * @request - POST
 * @param {object} product - The item which needs to be added to cart
 * @param {string} token - Auth token which verifies users auth activity
 * @return {object} - response obtained after the request is performed
 * @export {function} addToCartService - The service function that add's an item to cart of the user
 */

import axios from "axios";

export const addToCartService = async (product, token) => {
	return await axios.post(
		"/api/user/cart/",
		{ ...product },
		{ headers: { authorization: token } }
	);
};
