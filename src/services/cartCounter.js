import axios from "axios";

export const cartCounter = async (productId, token, type) => {
	try {
		const res = await axios.post(
			`/api/user/cart/${productId}`,
			{ action: { type } },
			{ headers: { authorization: token } }
		);
		if (res.status === 200) {
			return res.data.cart;
		}
	} catch (err) {
		console.log("error", err);
	}
};
