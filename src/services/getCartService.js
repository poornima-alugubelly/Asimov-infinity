import axios from "axios";

const getCartService = async (token) => {
	const res = await axios.get(
		"/api/user/cart",
		// {},
		{ headers: { authorization: token } }
	);
	try {
		if (res.status === 200) {
			return res.data.cart;
		} else {
			throw new Error(res);
		}
	} catch (err) {
		console.log("error", err);
	}
};
export { getCartService };
