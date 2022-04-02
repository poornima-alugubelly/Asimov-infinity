import { useUserData } from "../../context/UserDataContext";
import { CartSummary } from "./CartSummary/CartSummary";
import { Loader } from "../../components/Loader/Loader";
import { useEffect } from "react";
import { actionTypes } from "../../reducers/actionTypes";
import "./Checkout.css";
export const Checkout = () => {
	const {
		userData: { orderDetails, addressList },
		loading,
		userDataDispatch,
	} = useUserData();

	const { SET_ORDER } = actionTypes;
	useEffect(() => {
		addressList.length
			? userDataDispatch({
					type: SET_ORDER,
					payload: {
						orderDetails: { orderAddress: addressList[0] },
					},
			  })
			: "";
	}, [addressList]);

	return !loading ? (
		<div class="cart-page-container">
			<h2 class="padding-l text-center txt-high-light">Checkout </h2>
			<div class="grid-40-60 gap-xl">
				<div class="cart-products-wrapper">
					<ul className="flex-column gap-s">
						{addressList.map((address) => (
							<li className="modal-item gap-s " key={address._id}>
								<label class="address-body gap-s " htmlFor={address._id}>
									<input
										type="radio"
										class="input-radio element-round"
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
				</div>
				<CartSummary />
			</div>
		</div>
	) : (
		<Loader />
	);
};
