/**
 *
 * This is a service function that performs a network request to remove the address from the backend server
 *
 * @type - function
 * @request - DELETE
 * @param {object} address -  the address to be removed from the backend server
 * @param {string} token - Auth token which verifies users auth activity
 * @return {object} - response obtained after the request is performed
 * @export {function} removeAddressService - The service function that removes an address from the backend server
 */

import axios from "axios";
export const removeAddressService = async (address, token) => {
	return await axios.delete(
		`/api/user/address/${address._id}`,

		{
			headers: { authorization: token },
		}
	);
};
