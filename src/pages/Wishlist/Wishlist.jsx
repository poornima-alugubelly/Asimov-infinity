import { useEffect } from "react";
import { useUserData } from "../../context/UserDataContext";
import { ProductCard } from "../ProductListing/components/ProductCard/ProductCard";
import { useNavigate } from "react-router-dom";
import { Loader } from "../../components/Loader/Loader";
export const WishList = () => {
	const { userData, error, loading } = useUserData();
	const { wishlistProducts } = userData;
	const navigate = useNavigate();
	useEffect(() => (error ? navigate("/errorpage") : ""));
	return !loading ? (
		<div class="cart-page-container">
			<h2 class="padding-l text-center txt-high-light">My Wish List</h2>
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
