import { WishListProduct } from "./components/WishlistProduct";
import { useWishlist } from "../../context/WishlistContext";
export const WishList = () => {
	const { wishlist } = useWishlist();
	console.log("wislist", wishlist);
	return (
		<div class="cart-page-container">
			<h2 class="padding-l text-center">My Wish List</h2>
			<div class="grid-product-layout">
				{wishlist.wishlistProducts.map((product) => (
					<WishListProduct key={product._id} product={product} />
				))}
			</div>
		</div>
	);
};
