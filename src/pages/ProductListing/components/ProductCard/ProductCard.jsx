import { useCart } from "../../../../context/cartContext";
import { actionTypes } from "../../../../reducers/actionTypes";
import { addToCartService } from "../../../../services/addToCartService";
import { useAuth } from "../../../../context/AuthContext";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
export const ProductCard = ({ product }) => {
	const { cartState, cartDispatch } = useCart();
	const { SET_CART } = actionTypes;
	const { auth } = useAuth();
	const [inCart, setInCart] = useState(false);
	const addToCartServerCall = async () => {
		const cart = await addToCartService(product, auth.token);
		if (cart) cartDispatch({ type: SET_CART, payload: { cart } });
	};
	const navigate = useNavigate();
	const goToCart = () => navigate("/cart");
	useEffect(() => {
		cartState.cart.find((item) => item._id === product._id) && setInCart(true);
	}, [cartState.cart]);
	return (
		<div class="card card-vertical">
			<div class="img-container">
				<img src={product.src} alt="product image" class="img-responsive" />
			</div>

			<div class="card-content padding-s">
				<div class="card-title">
					<h3> {product.category} </h3>{" "}
					<i className="far fa-heart text-xs btn-icon"></i>
				</div>

				<span class="card-subtitle">{product.name} </span>
				<span class="card-subtitle">{product.rating} </span>

				<div class="flex-row gap-xs">
					<span class="txt-bold"> {product.discountedPrice}</span>
					<span class="txt-crossed-off">RS.{product.price}</span>
					<span class="txt-high-light">{product.discount}%</span>
				</div>
				<div class="card-footer">
					<button
						class="btn btn-primary-solid"
						onClick={
							inCart ? () => navigate("/cart") : () => addToCartServerCall()
						}
					>
						<i class="fa-fw fas fa-shopping-cart"> </i>
						<span> {inCart ? "Go to cart" : "Add to Cart"}</span>
					</button>
				</div>
			</div>
		</div>
	);
};
