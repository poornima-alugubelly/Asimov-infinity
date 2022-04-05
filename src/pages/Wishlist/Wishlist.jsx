import { useUserData } from "../../context/UserDataContext";
import { ProductCard } from "../ProductListing/components/ProductCard/ProductCard";
import { Loader } from "../../components/Loader/Loader";
export const WishList = () => {
	const { userData, error, loading } = useUserData();
	const { wishlistProducts } = userData;

	return !loading ? (
		<div className="cart-page-container">
			<h2 className="padding-l text-center txt-high-light">My Wish List</h2>
			{wishlistProducts.length ? (
				<div className="grid-product-layout">
					{wishlistProducts.map((product) => (
						<ProductCard key={product._id} product={product} />
					))}
				</div>
			) : (
				<h2 className="text-center text-s">No products wishlisted...</h2>
			)}
		</div>
	) : (
		<Loader />
	);
};
