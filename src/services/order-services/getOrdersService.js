import axios from "axios";

export const getOrdersService = async (token) => {
	return await axios.get("api/user/orders", {
		headers: { authorization: token },
	});
};
