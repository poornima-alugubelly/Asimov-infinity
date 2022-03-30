import axios from "axios";
export const removeAddressService = async (addressId, token) => {
	return await axios.delete(`/api/user/address/${addressId}`, {
		headers: { authorization: token },
	});
};
