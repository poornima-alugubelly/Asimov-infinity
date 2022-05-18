/**
 *
 * This is a service function gets list of products
 *
 * @type - function
 * @request - GET
 * @return {object} - response obtained after the request is performed
 * @export {function} getCategoryService - The service function that gets list of products
 */

import axios from "axios";

export const getProductListService = async () => {
	return await axios.get("/api/products");
};
