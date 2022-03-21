import { useEffect } from "react";
import { CartProduct } from "./components/CartProduct/CartProduct.jsx";
import { CartSummary } from "./components/CartSummary/CartSummary.jsx";
import { useCart } from "../../context/cartContext";
import { useNavigate } from "react-router-dom";
import "./Cart.css";
import { sumOfProducts } from "../../helpers/sumOfProducts";
export const Cart = () => {
	const { cart } = useCart();
	const navigate = useNavigate();
	useEffect(() => (cart.cartError ? navigate("/errorpage") : ""));

	return (
		<div class="cart-page-container">
			<h2 class="padding-l text-center">My Cart {cart.cartProducts.length}</h2>
			<div class="grid-60-40 gap-m">
				<div class="cart-products-wrapper">
					{cart.cartProducts.map((product) => (
						<CartProduct key={product._id} product={product} />
					))}
				</div>
				<CartSummary />
			</div>
		</div>
	);
};
