import { useState, useEffect } from "react";
import { useUserData } from "../../../../context/UserDataContext";
import { billGenerator } from "../../../../helpers/billGenerator";
import { actionTypes } from "../../../../reducers/actionTypes";
import { useNavigate } from "react-router-dom";
export const CartDetails = () => {
	const {
		userData: { cartProducts, addressList },
		userDataDispatch,
	} = useUserData();
	const navigate = useNavigate();
	const { SET_ORDER } = actionTypes;
	const [priceSum, discountedPriceSum] = billGenerator(cartProducts);
	let totalBill = priceSum - discountedPriceSum;
	const [showModal, setShowModal] = useState(false);
	const couponsData = [
		{
			id: 1,
			name: "NEW YEAR OFFER",
			description: "Get Rs.500 off on minimum purchase of Rs.2000",
			minPurchase: 2000,
			amount: 500,
		},
		{
			id: 2,
			name: "SHOPPING SPREE OFFER",
			description: "Get 20% off on minimum purchase of Rs.5000",
			minPurchase: 5000,
			discount: 20,
		},
	];
	const [couponSelected, setCouponSelected] = useState([]);
	const [couponDiscount, setCouponsDiscount] = useState(0); //context

	useEffect(() => {
		let total = 0;
		couponSelected.forEach((coupon) => {
			if (coupon.amount) total += coupon.amount;
			else total += (totalBill * coupon.discount) / 100;
		});
		setCouponsDiscount(total);
	}, [couponSelected]);

	useEffect(
		() =>
			setCouponSelected(
				couponSelected.filter(
					(coupon) => coupon.minPurchase <= totalBill - couponDiscount
				)
			),
		[totalBill]
	);
	const deliveryFee = totalBill - couponDiscount > 1000 ? 0 : 100;
	return (
		<div>
			{showModal && (
				<div>
					<div className="overlay"></div>
					<div className="modal-centered modal holo-bg">
						<div className="padding-xxs flex-space-between">
							<span>Select coupon</span>
							<i
								class="far fa-times-circle pointer"
								onClick={() => setShowModal(false)}
							></i>
						</div>

						<div className="modal-body">
							<ul className="flex-column gap-s">
								{couponsData.map((coupon) => (
									<li
										className={`modal-item gap-s ${
											totalBill >= coupon.minPurchase ? "" : "btn-disabled"
										}`}
										key={coupon.id}
									>
										<label htmlFor={`${coupon.name}`} class="flex-row gap-s">
											<input
												type="checkbox"
												className="input-checkbox"
												checked={couponSelected.some(
													(currCoupon) => currCoupon.id === coupon.id
												)}
												onChange={(e) => {
													e.target.checked
														? setCouponSelected((prev) => [...prev, coupon])
														: setCouponSelected(
																couponSelected.filter((curr) => {
																	return curr.id !== coupon.id;
																})
														  );
												}}
											/>
										</label>
										<div className="flex-column">
											<span>{`${coupon.name}`}</span>
											<span>{`${coupon.description}`}</span>
										</div>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			)}
			<div class="cart-total-wrapper flex-column gap-s">
				<div class="border-dark txt-bold padding-xs pointer">
					<span
						onClick={() => setShowModal(true)}
						className="  gap-xs flex-align-center "
					>
						<i className="fas fa-tag"></i>APPLY COUPONS
					</span>
				</div>

				<ul class="flex-column gap-xs">
					<li class="txt-bold text-s">
						PRICE DETAILS ({cartProducts.length} items):
					</li>
					<li class="flex-space-between">
						<span>Total MRP:</span> <span>₹{priceSum}</span>
					</li>

					<li class="flex-space-between">
						<span>Total Discount:</span>
						<span>-₹{discountedPriceSum}</span>
					</li>
					{couponDiscount ? (
						<li class="flex-space-between">
							<span>Coupon discount:</span> <span>-₹{couponDiscount}</span>
						</li>
					) : null}
					<li class="flex-space-between">
						<span>Delivery fee:</span>{" "}
						<span>Rs.{deliveryFee > 0 ? deliveryFee : "FREE"}</span>
					</li>
					<li class="flex-space-between txt-bold text-s">
						<span>Total:</span> <span>₹{totalBill - couponDiscount}</span>
					</li>
				</ul>
				{deliveryFee > 0 ? (
					<span>
						Add items worth Rs.{1000 - totalBill - couponDiscount} to be
						eligible for free delivery
					</span>
				) : null}
				{couponDiscount + discountedPriceSum > 0 ? (
					<span className="text-green ">{`You saved Rs.${
						couponDiscount + discountedPriceSum
					}`}</span>
				) : null}
				<button
					class="btn btn-primary-solid"
					onClick={() => {
						userDataDispatch({
							type: SET_ORDER,
							payload: {
								orderDetails: {
									cartItemsTotal: priceSum,
									cartItemsDiscountTotal: discountedPriceSum,
									couponDiscountTotal: couponDiscount,
									orderAddress: addressList[0],
								},
							},
						});
						navigate("/checkout");
					}}
				>
					Place Order
				</button>
			</div>
		</div>
	);
};
