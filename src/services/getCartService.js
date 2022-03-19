import axios from "axios";

export const getCartService = async (token) => {
	try {
		const res = await axios.get("/api/user/cart", {
			headers: { authorization: token },
		});
		if (res.status === 200) {
			return res.data.cart;
		}
	} catch (err) {
		console.log("error", err);
	}
};
