import { useUserData } from "../../context/UserDataContext";
import { CartSummary } from "./CartSummary/CartSummary";
import { Loader } from "../../components/Loader/Loader";
import { actionTypes } from "../../reducers/actionTypes";
import { useAddress } from "../../context/AddressContext";

import "./Checkout.css";
export const Checkout = () => {
	const {
		userData: { orderDetails, addressList },
		loading,
		userDataDispatch,
	} = useUserData();
	const { setAddressState } = useAddress();

	const { SET_ORDER } = actionTypes;

	return !loading ? (
		<div className="cart-page-container">
			<h2 className="padding-l text-center txt-high-light">Checkout </h2>
			<div className="grid-40-60 gap-xl">
				<div className="cart-products-wrapper">
					<ul className="flex-column gap-s">
						{addressList.map((address) => (
							<li className="modal-item gap-s " key={address._id}>
								<label className="address-body gap-s " htmlFor={address._id}>
									<input
										type="radio"
										className="input-radio element-round"
										name="radio-item"
										checked={orderDetails?.orderAddress._id === address._id}
										onChange={(e) =>
											e.target.checked &&
											userDataDispatch({
												type: SET_ORDER,
												payload: {
													orderDetails: { orderAddress: address },
												},
											})
										}
									/>

									<div className="line-break flex-column gap-xs ">
										<span className="text-xs txt-bold">{address.name} </span>

										<div>
											{`${address.street} , ${address.city} , 
											${address.state} , ${address.country} - ${address.pincode}`}
										</div>
										<span>Phone Number : {address.phone}</span>
									</div>
								</label>
							</li>
						))}
					</ul>
					<button className="btn btn-primary-solid margin-tp-btm-s">
						<i className="fas fa-plus"></i>
						<span
							onClick={() =>
								setAddressState((prev) => ({
									...prev,
									isAddressModalOpen: true,
								}))
							}
						>
							Add new address
						</span>
					</button>
				</div>
				<CartSummary />
			</div>
		</div>
	) : (
		<Loader />
	);
};
