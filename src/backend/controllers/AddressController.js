import { Response } from "miragejs";
import { formatDate, requiresAuth } from "../utils/authUtils";

export const getAddressListHandler = function (schema, request) {
	const userId = requiresAuth.call(this, request);
	if (!userId) {
		new Response(
			404,
			{},
			{
				errors: ["The email you entered is not Registered. Not Found error"],
			}
		);
	}
	const userAddressList = schema.users.findBy({ _id: userId }).addressList;

	return new Response(200, {}, { addressList: userAddressList });
};

export const addAddressHandler = function (schema, request) {
	const userId = requiresAuth.call(this, request);
	try {
		if (!userId) {
			new Response(
				404,
				{},
				{
					errors: ["The email you entered is not Registered. Not Found error"],
				}
			);
		}
		const userAddressList = schema.users.findBy({
			_id: userId,
		}).addressList;
		const { address } = JSON.parse(request.requestBody);
		userAddressList.push({
			...address,
			_id: uuid(),
			createdAt: formatDate(),
			updatedAt: formatDate(),
		});
		this.db.users.update(
			{
				_id: userId,
			},
			{
				addressList: userAddressList,
			}
		);
		return new Response(
			201,
			{},
			{
				addressList: userAddressList,
			}
		);
	} catch (error) {
		return new Response(
			500,
			{},
			{
				error,
			}
		);
	}
};

export const removeAddressHandler = function (schema, request) {
	const userId = requiresAuth.call(this, request);
	try {
		if (!userId) {
			new Response(
				404,
				{},
				{
					errors: ["The email you entered is not Registered. Not Found error"],
				}
			);
		}
		let userAddressList = schema.users.findBy({
			_id: userId,
		}).addressList;

		const addressId = request.params.addressId;

		userAddressList = userAddressList.filter((item) => item._id !== addressId);
		this.db.users.update(
			{
				_id: userId,
			},
			{
				addressList: userAddressList,
			}
		);
		return new Response(
			200,
			{},
			{
				addressList: userAddressList,
			}
		);
	} catch (error) {
		return new Response(
			500,
			{},
			{
				error,
			}
		);
	}
};

export const updateAddressHandler = function (schema, request) {
	const addressId = request.params.addressId;
	const userId = requiresAuth.call(this, request);
	try {
		if (!userId) {
			new Response(
				404,
				{},
				{
					errors: ["The email you entered is not Registered. Not Found error"],
				}
			);
		}
		const userAddressList = schema.users.findBy({
			_id: userId,
		}).addressList;

		const {
			address: { name, street, city, state, country, zipCode, mobile },
		} = JSON.parse(request.requestBody);

		userAddressList.forEach((address) => {
			if (address._id === addressId) {
				address.name = name;
				address.street = street;
				address.city = city;
				address.state = state;
				address.country = country;
				address.zipCode = zipCode;
				address.mobile = mobile;
				address.updatedAt = formatDate();
			}
		});
		this.db.users.update(
			{
				_id: userId,
			},
			{
				addressList: userAddressList,
			}
		);
		return new Response(
			200,
			{},
			{
				addressList: userAddressList,
			}
		);
	} catch (error) {
		return new Response(
			500,
			{},
			{
				error,
			}
		);
	}
};
