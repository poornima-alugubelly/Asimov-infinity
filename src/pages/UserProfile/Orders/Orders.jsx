import { useUserData } from "../../../context/UserDataContext";
export const Orders = () => {
	const {
		userData: { orders },
	} = useUserData();

	const ordersPlaced = orders.map((order) => order.orderedProducts);

	return orders.length ? (
		<div>
			{ordersPlaced.map((order) =>
				order.map((product) => (
					<div class="card-horizontal padding-s">
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
				))
			)}
		</div>
	) : (
		<span className="padding-s text-s">No orders placed till now...</span>
	);
};
