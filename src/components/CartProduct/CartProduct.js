import "./CartProduct.css";
import { actionTypes } from "../../reducers/actionTypes";
import { useGlobal } from "../../context/GlobalContext";
import { cartCounter } from "../../services/cartCounter";
import { useAuth } from "../../context/AuthContext";
import { removeProductService } from "../../services/removeProductService";
const CartProduct = ({ product }) => {
	const { SET_CART, INCREMENT } = actionTypes;
	const { globalDispatch } = useGlobal();
	const { auth } = useAuth();

	const cartCounterServerCall = async (operation) => {
		let cart = null;
		if (product.qty === 1 && operation === "decrement") {
			cart = await removeProductService(product._id, auth.token);
		} else {
			cart = await cartCounter(product._id, auth.token, operation);
		}
		if (cart) {
			globalDispatch({ type: SET_CART, payload: { cart } });
		}
	};

	return (
		<div class="card card-horizontal padding-s">
			<div class="img-container">
				<img
					src="https://d1x7zurbps6occ.cloudfront.net/product/large/858355-224378.jpg"
					alt="product image"
					class="img-responsive"
				/>
			</div>

			<div class="card-content gap-xs">
				<h2 class="card-title">{product.name}</h2>
				<div class="flex-row gap-xs">
					<span class="txt-bold"> {product.discountedPrice}</span>
					<span class="txt-crossed-off">{product.price}</span>
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
						<span>Move to wishlist</span>
					</button>
				</div>
			</div>
		</div>
	);
};

export { CartProduct };
