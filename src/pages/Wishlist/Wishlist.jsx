import { useEffect } from "react";
import { useWishlist } from "../../context/WishlistContext";
import { ProductCard } from "../ProductListing/components/ProductCard/ProductCard";
import { useNavigate } from "react-router-dom";
import { Loader } from "../../components/Loader/Loader";
export const WishList = () => {
	const { wishlist } = useWishlist();
	const { wishlistProducts, wishlistError, wishlistLoading } = wishlist;
	const navigate = useNavigate();
	useEffect(() => (wishlistError ? navigate("/errorpage") : ""));
	return !wishlistLoading ? (
		<div class="cart-page-container">
			<h2 class="padding-l text-center">My Wish List</h2>
			<div class="grid-product-layout">
				{wishlistProducts.map((product) => (
					<ProductCard key={product._id} product={product} />
				))}
			</div>
		</div>
	) : (
		<Loader />
	);
};
