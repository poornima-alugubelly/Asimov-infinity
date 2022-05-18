import { useUserData } from "../../../context/UserDataContext";
import { Loader } from "../../../components/Loader/Loader";
export const Orders = () => {
	const {
		userData: { orders, error, loading },
	} = useUserData();
	console.log(orders);
	const { ordersPlaced, paymentId, orderId, amountPaid, deliveryAddress } =
		orders.map((order) => order);
	console.log(ordersPlaced, paymentId, orderId, amountPaid);
	return !loading ? (
		orders.length ? (
			orders.map((placedOrder) => (
				<div className="padding-s">
					<p>
						<b>Payment ID :</b> {placedOrder.paymentId}
					</p>
					<p>
						<b>Order ID :</b> {placedOrder.orderId}
					</p>
					<p>
						<b>Amount Paid :</b> {placedOrder.amountPaid}
					</p>
					<p>
						<b>Products Ordered :</b>
					</p>

					{placedOrder?.orderedProducts?.map((product) => (
						<div className="card-horizontal padding-s">
							<div className="img-container">
								<img
									src={product.src}
									alt="product image"
									className="img-responsive"
								/>
							</div>

							<div className="card-content gap-xs">
								<span>{product.name}</span>
								<span>Quantity : {product.qty}</span>
								<span>Price : {product.price}</span>
							</div>
						</div>
					))}
				</div>
			))
		) : (
			<span className="padding-s text-s">No orders placed till now...</span>
		)
	) : (
		<Loader />
	);
};
