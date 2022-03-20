import { useEffect } from "react";
import { CartProduct } from "./components/CartProduct/CartProduct.jsx";
import { CartSummary } from "./components/CartSummary/CartSummary.jsx";
import { useCart } from "../../context/cartContext";
import { useNavigate } from "react-router-dom";
import "./Cart.css";
export const Cart = () => {
	const { cartState } = useCart();
	const navigate = useNavigate();
	useEffect(() => (cartState.cartError ? navigate("/errorpage") : ""));
	console.log("state", cartState);
	return (
		<div class="cart-page-container">
			<h2 class="padding-l text-center">My Cart</h2>
			<div class="grid-60-40 gap-m">
				<div class="cart-products-wrapper">
					{cartState.cart.map((product) => (
						<CartProduct product={product} />
					))}
				</div>
				<CartSummary />
			</div>
		</div>
	);
};
