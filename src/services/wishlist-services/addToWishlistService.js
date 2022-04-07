import axios from "axios";

export const addToWishlistService = async (product, token) => {
	return await axios.post(
		"/api/user/wishlist",
		{ product },
		{ headers: { authorization: token } }
	);
};
