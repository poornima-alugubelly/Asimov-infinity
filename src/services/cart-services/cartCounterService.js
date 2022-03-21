import axios from "axios";

export const cartCounterService = async (productId, token, type) => {
	return await axios.post(
		`/api/user/cart/${productId}`,
		{ action: { type } },
		{ headers: { authorization: token } }
	);
};
