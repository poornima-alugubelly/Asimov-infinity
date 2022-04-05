import { useUserData } from "../../../context/UserDataContext";
import { Loader } from "../../../components/Loader/Loader";
export const Orders = () => {
	const {
		userData: { orders, error, loading },
	} = useUserData();

	useEffect(() => (error ? navigate("/errorpage") : ""));

	const ordersPlaced = orders.map((order) => order.orderedProducts);

	return !loading ? (
		orders.length ? (
			<div>
				{ordersPlaced.map((order) =>
					order.map((product) => (
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
					))
				)}
			</div>
		) : (
			<span className="padding-s text-s">No orders placed till now...</span>
		)
	) : (
		<Loader />
	);
};
