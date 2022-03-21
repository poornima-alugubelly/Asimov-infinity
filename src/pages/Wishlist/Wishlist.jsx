import { useWishlist } from "../../context/WishlistContext";
import { ProductCard } from "../ProductListing/components/ProductCard/ProductCard";
export const WishList = () => {
	const { wishlist } = useWishlist();
	console.log("wislist", wishlist);
	return (
		<div class="cart-page-container">
			<h2 class="padding-l text-center">My Wish List</h2>
			<div class="grid-product-layout">
				{wishlist.wishlistProducts.map((product) => (
					<ProductCard key={product._id} product={product} />
				))}
			</div>
		</div>
	);
};
