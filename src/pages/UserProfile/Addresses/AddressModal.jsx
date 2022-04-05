import { useGlobal } from "../../../context/GlobalContext";
import { useState, useEffect } from "react";
import { useAddressUpdater } from "../../../hooks/useAddressUpdater";
import { addAddressService } from "../../../services/address-services/addAddressService";
import { updateAddressService } from "../../../services/address-services/updateAddressService";

export const AddressModal = () => {
	const {
		globalState: { isAddressModalOpen, currAddress },
		setGlobalState,
	} = useGlobal();

	const [formValues, setFormValues] = useState();

	useEffect(() => {
		setFormValues(currAddress);
	}, [currAddress]);

	const changeHandler = (e) => {
		const { name, value } = e.target;
		setFormValues((prev) => ({ ...prev, [name]: value }));
	};

	const dummyData = {
		name: "Poornima",
		street: "PLOT 999",
		city: "hyd",
		state: "Telangana",
		country: "India",
		pincode: "500099",
		phone: "9999999999",
	};
	const [addAddressServerCall] = useAddressUpdater(
		addAddressService,
		formValues,
		"Address has been added"
	);
	const [updateAddressServerCall] = useAddressUpdater(
		updateAddressService,
		formValues,
		"Address has been updated"
	);
	const resetForm = () => {
		setGlobalState((prev) => ({
			...prev,
			isAddressModalOpen: false,
			currAddress: {
				name: "",
				street: "",
				city: "",
				state: "",
				country: "",
				pincode: "",
				phone: "",
			},
		}));
	};
	const submitHandler = (e) => {
		e.preventDefault();
		currAddress?._id ? updateAddressServerCall() : addAddressServerCall();
		resetForm();
	};

	return (
		isAddressModalOpen && (
			<div>
				<div className="overlay"></div>
				<form
					className=" modal-center form-container flex-column gap-s"
					onSubmit={submitHandler}
				>
					<h3>Address form </h3>
					<input
						placeholder="Enter name"
						name="name"
						className="input"
						value={formValues?.name}
						onChange={changeHandler}
						required
					></input>
					<input
						placeholder="Enter House No., building number and Street address"
						name="street"
						className="input"
						value={formValues?.street}
						onChange={changeHandler}
						required
					></input>
					<input
						placeholder="Enter city"
						name="city"
						className="input"
						value={formValues?.city}
						onChange={changeHandler}
						required
					></input>
					<input
						placeholder="Enter state"
						name="state"
						className="input"
						value={formValues?.state}
						onChange={changeHandler}
						required
					></input>
					<input
						placeholder="Enter pincode"
						name="pincode"
						className="input"
						value={formValues?.pincode}
						onChange={changeHandler}
						required
					></input>

					<select
						name="Country"
						className="input"
						value={formValues?.country}
						onChange={changeHandler}
						required
					>
						<option>India</option>
						<option>China</option>
						<option>Japan</option>
						<option>Korea</option>
					</select>
					<input
						placeholder="Enter phone number"
						name="phone"
						className="input"
						value={formValues?.phone}
						onChange={changeHandler}
						pattern="[0-9]{10}"
						required
					></input>
					<div className="flex-row gap-s">
						<button className="btn btn-primary-solid">Save</button>

						<button
							onClick={(e) => {
								e.preventDefault();
								resetForm();
							}}
							className="btn btn-primary-outline"
						>
							Cancel
						</button>
						<button
							onClick={(e) => {
								e.preventDefault();
								setFormValues((prev) => ({ ...prev, ...dummyData }));
							}}
							className="btn btn-primary-outline"
						>
							Enter dummy values
						</button>
					</div>
				</form>
			</div>
		)
	);
};
