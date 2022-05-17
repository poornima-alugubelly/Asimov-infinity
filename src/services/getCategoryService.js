/**
 *
 * This is a service function gets categories
 *
 * @type - function
 * @request - GET
 * @return {object} - response obtained after the request is performed
 * @export {function} getCategoryService - The service function that gets categories
 */

import axios from "axios";

export const getCategoryService = async () => {
	return await axios.get("/api/categories");
};
