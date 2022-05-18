/**
 *
 * This is a service function gets the user's  cart
 *
 * @type - function
 * @request - DELETE
 * @param {string} token - Auth token which verifies users auth activity
 * @return {object} - response obtained after the request is performed
 * @export {function} getCartService - The service function that gets the cart of the user
 */

import axios from "axios";

export const getCartService = async (token) => {
	return await axios.get("/api/user/cart", {
		headers: { authorization: token },
	});
};
