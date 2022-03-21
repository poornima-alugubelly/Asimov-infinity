import axios from "axios";

export const removeProductWishlistService = async (productId, token) => {
	console.log("id", productId);
	return await axios.delete(`/api/user/wishlist/${productId}`, {
		headers: { authorization: token },
	});
};
