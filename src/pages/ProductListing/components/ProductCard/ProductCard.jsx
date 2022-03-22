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
import { toast } from "react-toastify";

export const ProductCard = ({ product }) => {
	const { cart, setCart } = useCart();
	const { wishlist, setWishlist } = useWishlist();
	const { auth } = useAuth();
	const [inCart, setInCart] = useState(false);
	const [inWishlist, setInWishlist] = useState(false);
	const [addingToCart, setAddingToCart] = useState(false);
	const [addingToWishList, setAddingToWishlist] = useState(false);
	const [removingFromWishlist, setRemovingFromWishlist] = useState(false);
	const navigate = useNavigate();

	const addToCartServerCall = async () => {
		setAddingToCart(true);
		try {
			const res = await addToCartService(product, auth.token);

			if (res.status === 201) {
				toast.success("Added to cart");
				setAddingToCart(false);
				setCart((prev) => ({ ...prev, cartProducts: res.data.cart }));
			}
		} catch (err) {
			toast.error("Couldn't add to cart , try again later!");
		}
	};

	const addToWishlistServerCall = async () => {
		setAddingToWishlist(true);
		try {
			const res = await addToWishlistService(product, auth.token);
			if (res.status === 201) {
				toast.success("Added to wishlist");
				setAddingToWishlist(false);
				setWishlist((prev) => ({
					...prev,
					wishlistProducts: res.data.wishlist,
				}));
			}
		} catch (err) {
			toast.error("Couldn't add to wishlist , try again later!");
		}
	};

	const removeProductWishlistServerCall = async () => {
		setRemovingFromWishlist(true);
		try {
			const res = await removeProductWishlistService(product._id, auth.token);

			if (res.status === 200) {
				toast.success("Removed from wishlist");
				setRemovingFromWishlist(false);

				setWishlist((prev) => ({
					...prev,
					wishlistProducts: res.data.wishlist,
				}));
			}
		} catch (err) {
			toast.error("Please try again after some time");
		}
	};
	useEffect(() => {
		cart.cartProducts.find((item) => item._id === product._id) &&
			setInCart(true);
		wishlist.wishlistProducts.find((item) => item._id === product._id) &&
			setInWishlist(true);
	}, [cart.cartProducts, wishlist.wishlistProducts]);
	return (
		<div class="card card-vertical">
			<div class="img-container" onClick={() => navigate(`/${product.id}`)}>
				<img src={product.src} alt="product image" class="img-responsive" />
			</div>

			<div class="card-content padding-s">
				<i
					className={
						inWishlist
							? `fas fa-heart text-xs btn-icon item-top ${
									removingFromWishlist ? "btn-disabled" : ""
							  }`
							: `far fa-heart text-xs btn-icon item-top ${
									addingToWishList ? "btn-disabled" : ""
							  }`
					}
					role="button"
					onClick={
						auth.isAuth
							? inWishlist
								? () => removeProductWishlistServerCall()
								: () => addToWishlistServerCall()
							: () => navigate("/login")
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
						class={`btn btn-primary-solid ${
							addingToCart ? "btn-disabled" : ""
						}`}
						onClick={
							auth.isAuth
								? inCart
									? () => navigate("/cart")
									: () => addToCartServerCall()
								: () => navigate("/login")
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
