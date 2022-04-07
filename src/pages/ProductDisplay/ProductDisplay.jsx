import "./ProductDisplay.css";
import { useParams } from "react-router-dom";
import { useProductListing } from "../../context/ProductListingContext";
import { addToCartService } from "../../services/cart-services";
import { addToWishlistService } from "../../services/wishlist-services";
import { useAuth } from "../../context/AuthContext";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUserData } from "../../context/UserDataContext";
import { actionTypes } from "../../reducers/actionTypes";
import { toast } from "react-toastify";
export const ProductDisplay = () => {
	const params = useParams();
	const productId = params.productId;
	const { productListingState } = useProductListing();
	const { data } = productListingState;
	const product = data?.find((item) => item.id === productId);
	const { userData, userDataDispatch } = useUserData();
	const { cartProducts, wishlistProducts } = userData;
	const { auth } = useAuth();
	const [inCart, setInCart] = useState(false);
	const [inWishlist, setInWishlist] = useState(false);
	const [addingToCart, setAddingToCart] = useState(false);
	const [addingToWishList, setAddingToWishlist] = useState(false);
	const { SET_CART, SET_WISHLIST } = actionTypes;

	const navigate = useNavigate();
	const addToCartServerCall = async () => {
		setAddingToCart(true);
		try {
			const res = await addToCartService(product, auth.token);

			if (res.status === 201) {
				toast.success("Added to cart");
				setAddingToCart(false);
				userDataDispatch({
					type: SET_CART,
					payload: { cart: res.data.cart },
				});
			}
		} catch (err) {
			toast.error("Couldn't add to cart , try again later!");
		}
	};
	useEffect(() => {
		cartProducts.find((item) => item._id === product._id) && setInCart(true);
		wishlistProducts.find((item) => item._id === product._id) &&
			setInWishlist(true);
	}, [cartProducts, wishlistProducts]);

	const addToWishlistServerCall = async () => {
		setAddingToWishlist(true);
		try {
			const res = await addToWishlistService(product, auth.token);
			if (res.status === 201) {
				toast.success("Added to wishlist");
				setAddingToWishlist(false);
				userDataDispatch({
					type: SET_WISHLIST,
					payload: { wishlist: res.data.wishlist },
				});
			}
		} catch (err) {
			toast.error("Couldn't add to wishlist , try again later!");
		}
	};

	return (
		<div className="cart-page-container ">
			<div className="single-product-container gap-s padding-l holo-bg">
				<div className="img-container">
					<img
						src={product?.src}
						alt="product image"
						className="img-responsive"
					/>
				</div>
				<div className=" flex-column gap-s">
					<div className="text-m flex-column gap-xxs">
						{product?.name}
						<span className="card-subtitle text-xs rating-star-icon">
							{product?.rating} <i className="fas fa-star "></i>
						</span>
					</div>

					<div className="flex-row gap-xs single-product-price">
						<span className="txt-bold text-s">
							{" "}
							Rs.{product?.discountedPrice}
						</span>
						<span className="txt-crossed-off">Rs.{product?.price}</span>
						<span className="txt-high-light">{product?.discount}%</span>
					</div>
					<div className="flex-column gap-xs">
						<span className="flex-row gap-xs">
							<i className="fas fa-truck fa-fw"></i>{" "}
							<span>Fast & No-contact Delivery</span>
						</span>
						<span className="flex-row gap-xs">
							<i className="fas fa-tag fa-fw"></i>
							<span>Price displayed is inclusive of GST </span>
						</span>
						<span className="flex-row gap-xs">
							<i className="fas fa-money-bill fa-fw"></i>{" "}
							<span>Cash on Delivery available</span>
						</span>
					</div>
					<div className="flex-start gap-xs">
						<button
							className={`btn btn-primary-solid ${
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
							<i className="fa-fw fas fa-shopping-cart"> </i>
							<span> {inCart ? "Go to cart" : "Add to Cart"}</span>
						</button>
						<button
							className={`btn btn-primary-outline ${
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
