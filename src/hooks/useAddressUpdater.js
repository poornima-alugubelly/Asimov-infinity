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

	const serverCall = async () => {
		try {
			const res = await serviceFunction(address, token);

			if (res.status === 200 || 201) {
				toast.success(msg);
				userDataDispatch({
					type: SET_ADDRESSLIST,
					payload: { addressList: res.data.addressList },
				});
			}
		} catch (err) {
			toast.error("There was a problem please try after some time");
		}
	};
	return [serverCall];
};
