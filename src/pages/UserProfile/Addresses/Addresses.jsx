import { useUserData } from "../../../context/UserDataContext";
import { AddressCard } from "./AddressCard";
import { useAddress } from "../../../context/AddressContext";
import { Loader } from "../../../components/Loader/Loader";
export const Addresses = () => {
	const { setAddressState } = useAddress();
	const {
		userData: { addressList, loading },
	} = useUserData();

	return !loading ? (
		<div className="padding-s">
			<h3>My Addresses</h3>
			<button className="btn btn-primary-solid margin-tp-btm-s">
				<i className="fas fa-plus"></i>
				<span
					onClick={() =>
						setAddressState((prev) => ({ ...prev, isAddressModalOpen: true }))
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
	) : (
		<Loader />
	);
};
