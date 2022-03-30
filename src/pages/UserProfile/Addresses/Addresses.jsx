import { useUserData } from "../../../context/UserDataContext";
export const Addresses = () => {
	const {
		userData: { addressList },
	} = useUserData();
	return (
		<div className="padding-s">
			<h3>My Addresses</h3>
			<button className="btn btn-primary-solid ">
				<i className="fas fa-plus"></i>
				<span>Add new address</span>
			</button>
			<ul>
				{addressList.map((address) => (
					<div className="card card-vertical">
						<div className="card-content">
							<span>{address.name}</span>
							<span>{address.street}</span>
							<div>
								{address.city},{address.state} - {address.pincode}
							</div>
							<span>{address.country}</span>
							<span>Phone Number : {address.mobile}</span>
						</div>
						<div className="card-footer">
							<button className="btn btn-primary-solid">Edit</button>
							<button className="btn btn-primary-outline">Delete</button>
						</div>
					</div>
				))}
			</ul>
		</div>
	);
};
