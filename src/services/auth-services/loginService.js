/**
 *
 * This is a service function that performs the login operation to get the token from backend server
 *
 * @type - function
 * @request - POST
 * @param {string} email   -  email of the user trying to login
 * @param {string} password   -  password of the user trying to login
 * @return { object} - response obtained after the request is performed
 * @export {function} loginService - The service function that loggs-in a user
 */

import axios from "axios";
export const loginService = async (email, password) => {
	return await axios.post("/api/auth/login", {
		email,
		password,
	});
};
