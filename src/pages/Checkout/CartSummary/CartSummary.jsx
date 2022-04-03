import { useUserData } from "../../../context/UserDataContext";
import { v4 as uuid } from "uuid";
import axios from "axios";
function loadScript(src) {
	return new Promise((resolve) => {
		const script = document.createElement("script");
		script.src = src;
		script.onload = () => {
			resolve(true);
		};
		script.onerror = () => {
			resolve(false);
		};
		document.body.appendChild(script);
	});
}

export const CartSummary = () => {
	const {
		userData: { orderDetails, cartProducts },
	} = useUserData();
	console.log(orderDetails);
	const totalPaymentWithOutDelivery =
		orderDetails?.cartItemsTotal -
		orderDetails?.cartItemsDiscountTotal -
		orderDetails?.couponDiscountTotal;
	const deliveryFee = totalPaymentWithOutDelivery > 1000 ? 0 : 100;
	console.log(totalPaymentWithOutDelivery, deliveryFee);

	const totalPayment = totalPaymentWithOutDelivery + deliveryFee;

	async function displayRazorpay() {
		const res = await loadScript(
			"https://checkout.razorpay.com/v1/checkout.js"
		);

		if (!res) {
			alert("Razorpay SDK failed to load. Are you online?");
			return;
		}

		// const result = await axios.post("api/orders");
		// if (!result) {
		// 	alert("Server error. Are you online?");
		// 	return;
		// }
		// console.log(totalPayment);
		// console.log("razorpay", result.data);
		// const { amount, id: order_id, currency } = result.data;
		// console.log(amount, order_id, currency);
		const options = {
			key: process.env.REACT_APP_RAZORPAY_ID,
			currency: "INR",
			amount: totalPayment * 100,
			name: "Asimov-store",
			description: "Order for products",
			handler: function (response) {
				const data = {
					orderCreationId: order_id,
					razorpayPaymentId: response.razorpay_payment_id,
					razorpayOrderId: response.razorpay_order_id,
					razorpaySignature: response.razorpay_signature,
				};
				console.log(data);
			},
			prefill: {
				name: "Gaurav Kumar",
				email: "gaurav.kumar@example.com",
				contact: "9999999999",
			},
		};
		const paymentObject = new window.Razorpay(options);
		paymentObject.open();
	}

	return (
		<div class="cart-total-wrapper flex-column gap-s">
			<ul class="flex-column gap-xs">
				<li class="txt-bold text-xs">
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
			<button className="btn btn-primary-solid" onClick={displayRazorpay}>
				Proceed to pay
			</button>
		</div>
	);
};
