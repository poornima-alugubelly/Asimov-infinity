import { useUserData } from "../../../../context/UserDataContext";
import { sumOfProducts } from "../../../../helpers/sumOfProducts";
export const CartSummary = () => {
	const { userData } = useUserData();
	const { cartProducts } = userData;
	const priceSum = sumOfProducts(cartProducts, "price");
	const discountedPriceSum = sumOfProducts(cartProducts, "discount");
	return (
		<div class="cart-total-wrapper flex-column gap-s">
			<div class="flex-column gap-xs">
				<span class="txt-bold">COUPONS</span>
				<input type="text" placeholder="Apply Coupon..." class="input" />
			</div>

			<ul class="flex-column gap-xs">
				<li class="txt-bold">PRICE DETAILS ({cartProducts.length} items):</li>
				<li class="flex-space-between">
					<span>Total MRP:</span> <span>₹{priceSum}.00</span>
				</li>
				<li class="flex-space-between">
					<span>Total Discount:</span>
					<span>-₹{discountedPriceSum}.00</span>
				</li>
				<li class="flex-space-between">
					<span>Delivery fee:</span> <span>FREE</span>
				</li>
				<li class="flex-space-between txt-bold text-s">
					<span>Total:</span> <span>₹{priceSum - discountedPriceSum}</span>
				</li>
			</ul>
			<button class="btn btn-primary-solid">Place Order</button>
		</div>
	);
};
