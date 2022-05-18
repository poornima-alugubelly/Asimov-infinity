/**
 *
 * This is a service function gets the user's  wishlist
 *
 * @type - function
 * @request - DELETE
 * @param {string} token - Auth token which verifies users auth activity
 * @return {object} - response obtained after the request is performed
 * @export {function} getWishlistService - The service function that gets the wishlist of the user
 */

import axios from "axios";
export const getWishlistService = async (token) => {
	return await axios.get("/api/user/wishlist", {
		headers: { authorization: token },
	});
};
