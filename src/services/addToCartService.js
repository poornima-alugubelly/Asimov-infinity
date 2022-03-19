import axios from "axios";

export const addToCartService = async (product, token) => {
	try {
		const res = await axios.post(
			"/api/user/cart/",
			{ ...product },
			{ headers: { authorization: token } }
		);
		if (res.status === 201) {
			return res.data.cart;
		}
	} catch (err) {
		return err;
	}
};
