import { useUserData } from "../../../context/UserDataContext";
import { useEffect } from "react";
import { actionTypes } from "../../../reducers/actionTypes";
export const CartSummary = () => {
	const {
		userData: { orderDetails, cartProducts, addressList },
		userDataDispatch,
	} = useUserData();

	const { SET_ORDER } = actionTypes;
	const deliveryFee =
		orderDetails?.cartItemsTotal +
			orderDetails?.cartItemsDiscountTotal -
			orderDetails?.couponDiscount >
		1000
			? 0
			: 100;

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

	return (
		<div class="cart-total-wrapper flex-column gap-s">
			<ul class="flex-column gap-xs">
				<li class="txt-bold text-s ">
					ORDER DETAILS ({cartProducts.length} items):
				</li>
				<span className="text-xs border-top-bottom-light padding-tp-btm-xs text-center">
					PURCHASED ITEMS
				</span>
				<div className="flex-space-between txt-bold">
					<span>Item</span> <span>Price</span>
				</div>

				{cartProducts.map((product) => (
					<li className="flex-space-between" key={product._id}>
						<div>
							<span>{product.name}</span>
							<div className="flex-row gap-xs">
								(<span>{product.qty}</span>
								<span>x</span>
								<span>₹{product.price}</span>)
							</div>
						</div>

						<div>₹{product.qty * product.price}</div>
					</li>
				))}
				<span className="text-xs border-top-bottom-light padding-tp-btm-xs text-center">
					BILLING
				</span>
				<li class="flex-space-between">
					<span>Total MRP:</span> <span>₹{orderDetails?.cartItemsTotal}</span>
				</li>

				<li class="flex-space-between">
					<span>Total Discount:</span>
					<span>-₹{orderDetails?.cartItemsDiscountTotal}</span>
				</li>
				{orderDetails?.couponDiscount ? (
					<li class="flex-space-between">
						<span>Coupon discount:</span>{" "}
						<span>-₹{orderDetails?.couponDiscountTotal}</span>
					</li>
				) : null}
				<li class="flex-space-between">
					<span>Delivery fee:</span>{" "}
					<span>₹{deliveryFee > 0 ? deliveryFee : "FREE"}</span>
				</li>
				<li class="flex-space-between txt-bold text-s">
					<span>Total:</span>{" "}
					<span>
						₹
						{orderDetails?.cartItemsTotal -
							orderDetails?.cartItemsDiscountTotal -
							orderDetails?.couponDiscountTotal}
					</span>
				</li>
				<span className="text-xs border-top-bottom-light padding-tp-btm-xs text-center">
					DELIVERING TO
				</span>
				<div className="card-content gap-xs ">
					<span className="text-xs">{orderDetails?.orderAddress.name}</span>

					<div>
						{`${orderDetails?.orderAddress.street} ,
						 ${orderDetails?.orderAddress.city} ,
						 ${orderDetails?.orderAddress.state} ,
						 ${orderDetails?.orderAddress.country} -
						 ${orderDetails?.orderAddress.pincode}`}
					</div>

					<span>Phone Number : {orderDetails?.orderAddress.phone}</span>
				</div>
			</ul>
		</div>
	);
};
