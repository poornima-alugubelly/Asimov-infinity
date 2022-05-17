/**
 *
 * This is a service function that performs the signup operation to get the token from backend server
 *
 * @type - function
 * @request - POST
 * @param {string } email - email of the user trying to signup
 * @param {string } password - password of the user trying to signup
 * @param {string } firstName - firstName of the user trying to signup
 * @param {string } lastName - lastName of the user trying to signup
 * @return {object} - response obtained after the request is performed
 * @export {function} signupService - The service function that sign's-up a user
 */

import axios from "axios";

export const signupService = async (email, password, firstName, lastName) => {
	return await axios.post("/api/auth/signup", {
		email,
		password,
		firstName,
		lastName,
	});
};
