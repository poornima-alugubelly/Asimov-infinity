import { useGlobal } from "../../../context/GlobalContext";
import { removeAddressService } from "../../../services/address-services";
import { useAddressUpdater } from "../../../hooks/useAddressUpdater";
export const AddressCard = ({ address }) => {
	const { setGlobalState } = useGlobal();
	const [removeAddressServerCall] = useAddressUpdater(
		removeAddressService,
		address,
		"Address has been deleted"
	);
	return (
		<div className="margin-tp-btm-s card-vertical">
			<div className="card-content gap-xs">
				<span className="text-xs">
					<b>{address.name}</b>
				</span>
				<span>{address.street}</span>
				<div>
					{address.city} , {address.state}
				</div>
				<span>
					{address.country} - {address.pincode}
				</span>
				<span>Phone Number : {address.phone}</span>
			</div>
			<div className="card-footer">
				<button
					className="btn btn-primary-solid"
					onClick={() =>
						setGlobalState({
							isAddressModalOpen: true,
							currAddress: { ...address },
						})
					}
				>
					Edit
				</button>
				<button
					className="btn btn-primary-outline"
					onClick={() => removeAddressServerCall()}
				>
					Delete
				</button>
			</div>
		</div>
	);
};
