import { useCart } from "../../../../context/cartContext";
import { addToCartService } from "../../../../services/cart-services";
import {
	addToWishlistService,
	removeProductWishlistService,
} from "../../../../services/wishlist-services";
import { useAuth } from "../../../../context/AuthContext";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useWishlist } from "../../../../context/WishlistContext";

export const ProductCard = ({ product }) => {
	const { cart, setCart } = useCart();
	const { auth } = useAuth();
	const [inCart, setInCart] = useState(false);
	const [inWishlist, setInWishlist] = useState(false);
	const addToCartServerCall = async () => {
		try {
			const res = await addToCartService(product, auth.token);
			if (res.status === 201) {
				setCart((prev) => ({ ...prev, cartProducts: res.data.cart }));
			}
		} catch (err) {
			console.log(err.response);
		}
	};
	const navigate = useNavigate();

	const { wishlist, setWishlist } = useWishlist();

	const addToWishlistServerCall = async () => {
		try {
			const res = await addToWishlistService(product, auth.token);
			if (res.status === 201) {
				setWishlist((prev) => ({
					...prev,
					wishlistProducts: res.data.wishlist,
				}));
			}
		} catch (err) {
			console.log(err.response);
		}
	};

	const removeProductWishlistServerCall = async () => {
		try {
			const res = await removeProductWishlistService(product._id, auth.token);
			if (res.status === 200) {
				setWishlist((prev) => ({
					...prev,
					wishlistProducts: res.data.wishlist,
				}));
			}
		} catch (err) {
			console.log(err.response);
		}
	};
	useEffect(() => {
		cart.cartProducts.find((item) => item._id === product._id) &&
			setInCart(true);
		wishlist.wishlistProducts.find((item) => item._id === product._id)
			? setInWishlist(true)
			: setInWishlist(false);
	}, [cart.cartProducts, wishlist.wishlistProducts]);
	return (
		<div class="card card-vertical">
			<div class="img-container">
				<img src={product.src} alt="product image" class="img-responsive" />
			</div>

			<div class="card-content padding-s">
				<i
					className={
						inWishlist
							? "fas fa-heart text-xs btn-icon item-top  "
							: "far fa-heart text-xs btn-icon item-top "
					}
					role="button"
					onClick={() =>
						inWishlist
							? removeProductWishlistServerCall()
							: addToWishlistServerCall()
					}
				></i>

				<span class="card-subtitle">{product.name} </span>
				<span class="card-subtitle">{product.rating} </span>

				<div class="flex-row gap-xs">
					<span class="txt-bold"> Rs.{product.discountedPrice}</span>
					<span class="txt-crossed-off">Rs.{product.price}</span>
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
