import axios from "axios";
export const getWishlistService = async (token) => {
	return await axios.get("/api/user/wishlist", {
		headers: { authorization: token },
	});
};
