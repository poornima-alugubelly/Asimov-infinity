export const CartSummary = () => {
	return (
		<div class="cart-total-wrapper flex-column gap-s">
			<div class="flex-column gap-xs">
				<span class="txt-bold">COUPONS</span>
				<input type="text" placeholder="Apply Coupon..." class="input" />
			</div>

			<ul class="flex-column gap-xs">
				<li class="txt-bold">PRICE DETAILS (4 items):</li>
				<li class="flex-space-between">
					<span>Total MRP:</span> <span>₹2754.00</span>
				</li>
				<li class="flex-space-between">
					<span>Total Discount:</span>
					<span>₹2754.00</span>
				</li>
				<li class="flex-space-between">
					<span>Delivery fee:</span> <span>₹2754.00</span>
				</li>
				<li class="flex-space-between txt-bold text-s">
					<span>Total:</span> <span>₹2754.00</span>
				</li>
			</ul>
			<button class="btn btn-primary-solid">Place Order</button>
		</div>
	);
};
