import axios from "axios";
export const removeProductCartService = async (productId, token) => {
	return await axios.delete(`/api/user/cart/${productId}`, {
		headers: { authorization: token },
	});
};
