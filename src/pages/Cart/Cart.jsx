import { useEffect } from "react";
import { CartProduct } from "./components/CartProduct/CartProduct.jsx";
import { CartSummary } from "./components/CartSummary/CartSummary.jsx";
import { useUserData } from "../../context/UserDataContext.js";
import { useNavigate } from "react-router-dom";
import { Loader } from "../../components/Loader/Loader.jsx";
import "./Cart.css";
export const Cart = () => {
	const { userData, error, loading } = useUserData();
	const { cartProducts } = userData;
	const navigate = useNavigate();
	useEffect(() => (error ? navigate("/errorpage") : ""));

	return !loading ? (
		<div class="cart-page-container">
			<h2 class="padding-l text-center">My Cart {cartProducts.length}</h2>
			<div class="grid-60-40 gap-m">
				<div class="cart-products-wrapper">
					{cartProducts.map((product) => (
						<CartProduct key={product._id} product={product} />
					))}
				</div>
				<CartSummary />
			</div>
		</div>
	) : (
		<Loader />
	);
};
