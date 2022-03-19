import axios from "axios";
export const removeProductService = async (productId, token) => {
	try {
		const res = await axios.delete(`/api/user/cart/${productId}`, {
			headers: { authorization: token },
		});
		if (res.status === 200) {
			return res.data.cart;
		}
	} catch {}
};
