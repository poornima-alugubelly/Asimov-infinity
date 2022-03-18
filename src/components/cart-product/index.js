import "./cart-product.css";
import { actionTypes } from "../../reducers/actionTypes";
import { useGlobal } from "../../context/GlobalContext";
const CartProduct = ({ product }) => {
	const { INCREMENT, DECREMENT } = actionTypes;
	const { globalDispatch } = useGlobal();
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
					<span class="txt-high-light">{product.discount}</span>
				</div>
				<div class="flex-start gap-s">
					<i
						class="fas fa-minus  text-xxs pointer "
						role="button"
						onClick={() =>
							globalDispatch({ type: DECREMENT, payload: product })
						}
					></i>
					<span class="text-xs">{product.quantity}</span>

					<i
						class="fas fa-plus  text-xxs pointer"
						role="button"
						onClick={() =>
							globalDispatch({ type: INCREMENT, payload: product })
						}
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
