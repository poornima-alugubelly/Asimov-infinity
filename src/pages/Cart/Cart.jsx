import { CartProduct } from "./components/CartProduct/CartProduct.jsx";
import { CartDetails } from "./components/CartDetails/CartDetails.jsx";
import { useUserData } from "../../context/UserDataContext.js";
import { useNavigate } from "react-router-dom";
import { Loader } from "../../components/Loader/Loader.jsx";
import "./Cart.css";
export const Cart = () => {
	const { userData, error, loading } = useUserData();
	const { cartProducts } = userData;

	return !loading ? (
		<div className="cart-page-container">
			<h2 className="padding-l text-center txt-high-light">
				My Cart ({cartProducts.length} products)
			</h2>
			{cartProducts.length ? (
				<div className="grid-60-40 gap-m">
					<div className="cart-products-wrapper">
						{cartProducts.map((product) => (
							<CartProduct key={product._id} product={product} />
						))}
					</div>
					<CartDetails />{" "}
				</div>
			) : (
				<h2 className="text-center text-s">No products added to cart...</h2>
			)}
		</div>
	) : (
		<Loader />
	);
};
