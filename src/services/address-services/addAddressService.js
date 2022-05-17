/**
 *
 * This is a service function that performs a network request to add a new address to the database
 *
 * @type - function
 * @request - POST
 * @param {object} address address - The address that needs to be added
 * @param {string} token - Auth token which verifies users auth activity
 * @return {object} - response obtained after the request is performed
 * @export {function} addNewAddressService - The service function that performs the addition of new address
 */

import axios from "axios";

export const addAddressService = async (address, token) => {
	return await axios.post(
		"/api/user/address/",
		{ address },
		{ headers: { authorization: token } }
	);
};
