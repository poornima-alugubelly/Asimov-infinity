const updateAddressService = async (addressId, token) => {
	return await axios.post(`/api/user/address/${addressId}`, {
		headers: { authorization: token },
	});
};
