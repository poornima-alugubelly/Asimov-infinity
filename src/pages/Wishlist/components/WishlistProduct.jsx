import { IMAGES } from "../../../assets";
import { removeProductWishlistService } from "../../../services/wishlist-services/removeProductWishlistService.js";
import { addToCartService } from "../../../services/cart-services/addToCartService";
import { useAuth } from "../../../context/AuthContext";
import { useWishlist } from "../../../context/WishlistContext";
import { useCart } from "../../../context/cartContext";
export const WishListProduct = ({ product }) => {
	const { auth } = useAuth();
	const { setWishlist } = useWishlist();
	const { setCart } = useCart();
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
	const addToCartServerCall = async () => {
		try {
			const res = await addToCartService(product, auth.token);
			if (res.status === 201) {
				setCart((prev) => ({ ...prev, cartProducts: res.data.cart }));
				removeProductWishlistServerCall();
			}
		} catch (err) {
			console.log(err.response);
		}
	};
	return (
		<div class="card card-vertical card-shadow-dark">
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
					<button class="btn btn-primary-solid">
						<i class="fa-fw fas fa-shopping-cart"> </i>
						<span role="button" onClick={() => addToCartServerCall()}>
							Add to Cart
						</span>
					</button>
				</div>
			</div>
			<button
				class="btn-dismiss item-top"
				onClick={() => removeProductWishlistServerCall()}
			>
				<img src={IMAGES.dismissBlue} alt="" />
			</button>
		</div>
	);
};
