import { useUserData } from "../../../context/UserDataContext";
import { AddressCard } from "./AddressCard";
import { useGlobal } from "../../../context/GlobalContext";
export const Addresses = () => {
	const { setGlobalState } = useGlobal();
	const {
		userData: { addressList },
	} = useUserData();

	return (
		<div className="padding-s">
			<h3>My Addresses</h3>
			<button className="btn btn-primary-solid margin-tp-btm-s">
				<i className="fas fa-plus"></i>
				<span
					onClick={() =>
						setGlobalState((prev) => ({ ...prev, isAddressModalOpen: true }))
					}
				>
					Add new address
				</span>
			</button>
			<ul>
				{addressList.map((address) => (
					<AddressCard key={address._id} address={address} />
				))}
			</ul>
		</div>
	);
};
