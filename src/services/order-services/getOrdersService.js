/**
 *
 * This is a service function gets the user's  orders
 *
 * @type - function
 * @request - DELETE
 * @param {string} token - Auth token which verifies users auth activity
 * @return {object} - response obtained after the request is performed
 * @export {function} getOrdersService - The service function that gets the orders of the user
 */

import axios from "axios";

export const getOrdersService = async (token) => {
	return await axios.get("api/user/orders", {
		headers: { authorization: token },
	});
};
