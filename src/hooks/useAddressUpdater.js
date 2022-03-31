import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { toast } from "react-toastify";
import { useUserData } from "../context/UserDataContext";
import { actionTypes } from "../reducers/actionTypes";
export const useAddressUpdater = (serviceFunction, address, msg) => {
	const [updatingAddress, setUpdatingAddress] = useState();
	const {
		auth: { token },
	} = useAuth();
	const { userDataDispatch } = useUserData();
	const { SET_ADDRESSLIST } = actionTypes;
	// console.log("got", address);
	// console.log(serviceFunction);
	const serverCall = async () => {
		try {
			console.log("here");
			const res = await serviceFunction(address, token);
			console.log("res", res);
			if (res.status === 200 || 201) {
				toast.success(msg);
				userDataDispatch({
					type: SET_ADDRESSLIST,
					payload: { addressList: res.data.addressList },
				});
			}
		} catch (err) {
			console.log("Error", err);
		}
	};
	return [serverCall];
};
