/**
 *
 * This is a service function that clears the cart by removing all items on the backend server
 *
 * @type - function
 * @request - DELETE
 * @param {string} token - Auth token which verifies users auth activity
 * @return {object} - response obtained after the request is performed
 * @export {function} clearCartService - The service function that clears the cart of the user
 */

import axios from "axios";

export const clearCartService = async (token) => {
	return await axios.post(
		"/api/user/cart/clearCart",
		{},
		{ headers: { authorization: token } }
	);
};
