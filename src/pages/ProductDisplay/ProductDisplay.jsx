import "./ProductDisplay.css";
import { useParams } from "react-router-dom";
import { useProductListing } from "../../context/ProductListingContext";
import { addToCartService } from "../../services/cart-services";
import { useCart } from "../../context/cartContext";
import { addToWishlistService } from "../../services/wishlist-services";
import { useAuth } from "../../context/AuthContext";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useWishlist } from "../../context/WishlistContext";
import { toast } from "react-toastify";
export const ProductDisplay = () => {
	const params = useParams();
	const productId = params.productId;
	const { productListingState } = useProductListing();
	const { data } = productListingState;
	const product = data?.find((item) => item.id === productId);
	const { cart, setCart } = useCart();
	const { wishlist, setWishlist } = useWishlist();
	const { auth } = useAuth();
	const [inCart, setInCart] = useState(false);
	const [inWishlist, setInWishlist] = useState(false);
	const [addingToCart, setAddingToCart] = useState(false);
	const [addingToWishList, setAddingToWishlist] = useState(false);
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
	useEffect(() => {
		cart.cartProducts.find((item) => item._id === product._id) &&
			setInCart(true);
		wishlist.wishlistProducts.find((item) => item._id === product._id) &&
			setInWishlist(true);
	}, [cart.cartProducts, wishlist.wishlistProducts]);

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

	return (
		<div class="cart-page-container ">
			<div class="single-product-container gap-s padding-l holo-bg">
				<div class="img-container">
					<img src={product?.src} alt="product image" class="img-responsive" />
				</div>
				<div class=" flex-column gap-s">
					<div class="text-m flex-column gap-xxs">
						{product?.name}
						<span class="card-subtitle text-xs rating-star-icon">
							{product?.rating} <i class="fas fa-star "></i>
						</span>
					</div>

					<div class="flex-row gap-xs single-product-price">
						<span class="txt-bold text-s"> Rs.{product?.discountedPrice}</span>
						<span class="txt-crossed-off">Rs.{product?.price}</span>
						<span class="txt-high-light">{product?.discount}%</span>
					</div>
					<div class="flex-column gap-xs">
						<span class="flex-row gap-xs">
							<i class="fas fa-truck fa-fw"></i>{" "}
							<span>Fast & No-contact Delivery</span>
						</span>
						<span class="flex-row gap-xs">
							<i class="fas fa-tag fa-fw"></i>
							<span>Price displayed is inclusive of GST </span>
						</span>
						<span class="flex-row gap-xs">
							<i class="fas fa-money-bill fa-fw"></i>{" "}
							<span>Cash on Delivery available</span>
						</span>
					</div>
					<div class="flex-start gap-xs">
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
						<button
							class={`btn btn-primary-outline ${
								addingToWishList ? "btn-disabled" : ""
							}`}
							onClick={
								auth.isAuth
									? inWishlist
										? () => navigate("/wishlist")
										: () => addToWishlistServerCall()
									: () => navigate("/login")
							}
						>
							<span>
								{inWishlist ? "Added to Wishlist" : "Move To Wishlist"}
							</span>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
