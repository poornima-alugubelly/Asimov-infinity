import { useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { useUserData } from "../../../context/UserDataContext";
import { actionTypes } from "../../../reducers/actionTypes";
import { useAuth } from "../../../context/AuthContext";
import { addOrderService } from "../../../services/order-services/addOrderService";

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
		userDataDispatch,
	} = useUserData();
	const {
		auth: { token },
	} = useAuth();
	const { SET_ORDERS, SET_ORDER, SET_CART } = actionTypes;

	const totalPaymentWithOutDelivery =
		orderDetails?.cartItemsTotal -
		orderDetails?.cartItemsDiscountTotal -
		orderDetails?.couponDiscountTotal;
	const deliveryFee = totalPaymentWithOutDelivery > 1000 ? 0 : 100;

	const totalPayment = totalPaymentWithOutDelivery + deliveryFee;

	const navigate = useNavigate();

	async function displayRazorpay() {
		const res = await loadScript(
			"https://checkout.razorpay.com/v1/checkout.js"
		);

		if (!res) {
			alert("Razorpay SDK failed to load. Are you online?");
			return;
		}

		const options = {
			key: process.env.REACT_APP_RAZORPAY_ID,
			currency: "INR",
			amount: totalPayment * 100,
			name: "Asimov store",
			description: "Order for products",
			handler: async function (response) {
				const paymentId = response.razorpay_payment_id;
				const orderId = uuid();

				const order = {
					paymentId,
					orderId,
					amountPaid: totalPayment,
					orderedProducts: [...cartProducts],
					deliveryAddress: { ...orderDetails.orderAddress },
				};

				const res = await addOrderService(order, token);
				if (res.status === 201) {
					console.log("order", res.data.orders);
					userDataDispatch({
						type: SET_ORDERS,
						payload: { orders: res.data.orders },
					});
					userDataDispatch({
						type: SET_ORDER,
						payload: { orderDetails: { orderId } },
					});
					userDataDispatch({
						type: SET_CART,
						payload: { cart: [] },
					});
					navigate("/orderSummary", { state: { orderId } });
				}
			},
			prefill: {
				name: orderDetails?.orderAddress.name,
				email: "gaurav.kumar@example.com",
				contact: "9999999999",
			},
		};
		const paymentObject = new window.Razorpay(options);
		paymentObject.open();
	}

	return (
		<div className="cart-total-wrapper flex-column gap-s">
			<ul className="flex-column gap-xs">
				<li className="txt-bold text-xs">
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
				<li className="flex-space-between">
					<span>Total MRP:</span> <span>₹{orderDetails?.cartItemsTotal}</span>
				</li>

				<li className="flex-space-between">
					<span>Total Discount:</span>
					<span>-₹{orderDetails?.cartItemsDiscountTotal}</span>
				</li>
				{orderDetails?.couponDiscount ? (
					<li className="flex-space-between">
						<span>Coupon discount:</span>{" "}
						<span>-₹{orderDetails?.couponDiscountTotal}</span>
					</li>
				) : null}
				<li className="flex-space-between">
					<span>Delivery fee:</span>{" "}
					<span>₹{deliveryFee > 0 ? deliveryFee : "FREE"}</span>
				</li>
				<li className="flex-space-between txt-bold text-s">
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
