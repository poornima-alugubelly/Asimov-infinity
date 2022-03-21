import axios from "axios";

export const addToCartService = async (product, token) => {
	return await axios.post(
		"/api/user/cart/",
		{ ...product },
		{ headers: { authorization: token } }
	);
};
