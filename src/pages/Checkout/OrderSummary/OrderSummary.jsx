import { useLocation } from "react-router-dom";
import { useUserData } from "../../../context/UserDataContext";
export const OrderSummary = () => {
	const {
		state: { orderId },
	} = useLocation();
	const {
		userData: { orders },
		loading,
	} = useUserData();
	const order = orders.filter((currOrder) => currOrder.orderId === orderId);
	if (order.length) {
	}
	console.log(order);
	const { paymentId, amountPaid, orderedProducts, deliveryAddress } = order[0];
	console.log(order?.deliveryAddress, paymentId);
	const { name, street, city, state, country, pincode, phone } =
		deliveryAddress;

	return !loading ? (
		<div class="cart-page-container ">
			<h2 class="padding-l text-center txt-high-light">Order Summary </h2>
			<div class="grid-40-60 gap-xl padding-l border-dark">
				<div class="flex-column gap-xs">
					<span className="text-s text-green margin-tp-btm-s">
						<b>Order Placed Successfully</b>
					</span>
					<span className="text-xs">
						<b>Payment ID : {paymentId}</b>
					</span>
					<span className="text-xs">
						<b>Amount Paid : {amountPaid}</b>
					</span>
					<span>Order will be delivered to :</span>
					<span className="text-s">{name}</span>
					<span>{street}</span>
					<span>
						{city} , {state} , {country} - {pincode}
					</span>
				</div>
				<div className="flex-column order-summary-products">
					{orderedProducts.map((product) => (
						<div class="card card-horizontal padding-s">
							<div class="img-container">
								<img
									src={product.src}
									alt="product image"
									class="img-responsive"
								/>
							</div>

							<div class="card-content gap-xs">
								<span>{product.name}</span>
								<span>Quantity : {product.qty}</span>
								<span>Price : {product.price}</span>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	) : (
		<Loader />
	);
};
