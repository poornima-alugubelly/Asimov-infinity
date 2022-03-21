import "./CartProduct.css";
import { useCart } from "../../../../context/cartContext";
import {
	cartCounterService,
	removeProductCartService,
} from "../../../../services/cart-services";
import { addToWishlistService } from "../../../../services/wishlist-services";
import { useAuth } from "../../../../context/AuthContext";
import { useWishlist } from "../../../../context/WishlistContext";
export const CartProduct = ({ product }) => {
	const { setCart } = useCart();
	const { auth } = useAuth();
	const { wishlist, setWishlist } = useWishlist();
	const cartCounterServerCall = async (operation) => {
		let res = null;
		try {
			if (product.qty === 1 && operation === "decrement") {
				res = await removeProductCartService(product._id, auth.token);
			} else {
				res = await cartCounterService(product._id, auth.token, operation);
			}
			console.log("increment", res.data.cart);
			if (res.status === 200) {
				setCart((prev) => ({ ...prev, cartProducts: res.data.cart }));
			}
		} catch (err) {
			console.log(err);
		}
	};
	const findProduct = (product) => {
		const found = wishlist.wishlistProducts.find(
			(item) => item._id === product._id
		);
		console.log("found", found);
		if (!found) addToWishlistServerCall();
	};

	const addToWishlistServerCall = async () => {
		try {
			const res = await addToWishlistService(product, auth.token);

			if (res.status === 201) {
				console.log("data", res.data);
				setWishlist((prev) => ({
					...prev,
					wishlistProducts: res.data.wishlist,
				}));

				const cartres = await removeProductCartService(product._id, auth.token);
				if (cartres.status === 200) {
					setCart((prev) => ({ ...prev, cartProducts: cartres.data.cart }));
				}
			}
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div class="card card-horizontal padding-s">
			<div class="img-container">
				<img src={product.src} alt="product image" class="img-responsive" />
			</div>

			<div class="card-content gap-xs">
				<h2 class="card-title">{product.name}</h2>
				<div class="flex-row gap-xs">
					<span class="txt-bold"> Rs.{product.discountedPrice}</span>
					<span class="txt-crossed-off">Rs.{product.price}</span>
					<span class="txt-high-light">{product.discount}%</span>
				</div>
				<div class="flex-start gap-s">
					<i
						class="fas fa-minus  text-xxs pointer "
						role="button"
						onClick={() => cartCounterServerCall("decrement")}
					></i>
					<span class="text-xs">{product.qty}</span>

					<i
						class="fas fa-plus  text-xxs pointer"
						role="button"
						onClick={() => cartCounterServerCall("increment")}
					></i>
				</div>

				<div class="card-footer">
					<button class="btn btn-primary-outline">
						<span onClick={() => findProduct(product)}>Move to wishlist</span>
					</button>
				</div>
			</div>
		</div>
	);
};
