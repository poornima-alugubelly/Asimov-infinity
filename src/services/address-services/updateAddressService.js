/**
 *
 * This is a service function that performs a network request to update an existing address from the backend server
 *
 * @type - function
 * @request - POST
 * @param {string} address - The updated address object that needs to be replaced with already existing address
 *                           from the backend server
 * @param {string} token - Auth token which verifies users auth activity
 * @return {object} - response obtained after the request is performed
 * @export {function} updateAddressService - The service function that updates an address from the backend server
 */

import axios from "axios";
export const updateAddressService = async (address, token) => {
	return await axios.post(
		`/api/user/address/${address._id}`,
		{
			address,
		},
		{
			headers: { authorization: token },
		}
	);
};
