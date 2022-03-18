import { useEffect } from "react";
import { CartProduct } from "../../components/cart-product";
import { CartSummary } from "../../components/cart-summary";
import { useGlobal } from "../../context/GlobalContext";
import "./cart.css";
const Cart = () => {
	const { globalState } = useGlobal();

	console.log("state", globalState);
	return (
		<div class="cart-page-container">
			<h2 class="padding-l text-center">My Cart</h2>
			<div class="grid-60-40 gap-m">
				<div class="cart-products-wrapper">
					{globalState.cart.map((product) => (
						<CartProduct product={product} />
					))}
				</div>
				<CartSummary />
			</div>
		</div>
	);
};

export { Cart };
