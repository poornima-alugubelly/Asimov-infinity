/**
 *
 * This is a service function that performs a network request to get the addresses from the database
 *
 * @type - function
 * @request - GET
 * @param {string} token - Auth token which verifies users auth activity
 * @return {object} - response obtained after the request is performed
 * @export {function} getAddressService - The service function that fetches all address from the backend server
 */

import axios from "axios";
export const getAddressListService = async (token) => {
	return await axios.get("/api/user/address", {
		headers: { authorization: token },
	});
};
