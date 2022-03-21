import axios from "axios";

export const getCartService = async (token) => {
	return await axios.get("/api/user/cart", {
		headers: { authorization: token },
	});
};
