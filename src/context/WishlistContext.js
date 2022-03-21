import { createContext, useContext, useState, useEffect } from "react";
import { getWishlistService } from "../services/wishlist-services/getWishlistService";
import { useAuth } from "./AuthContext";
const wishlistContext = createContext();
const useWishlist = () => useContext(wishlistContext);

const WishlistProvider = ({ children }) => {
	const [wishlist, setWishlist] = useState({
		wishlistProducts: [],
	});
	const { auth } = useAuth();

	useEffect(() => {
		(async () => {
			if (auth.isAuth) {
				console.log("calling");
				try {
					const res = await getWishlistService(auth.token);
					console.log(cart);
					if (res.status === 200)
						setWishlist((prev) => ({
							...prev,
							wishlistProducts: res.data.wishlist,
						}));
				} catch (err) {
					console.log(err.response);
				}
			} else {
				setWishlist((prev) => ({
					...prev,
					wishlistProducts: [],
				}));
			}
		})();
	}, []);
	console.log("wishlist", wishlist);
	return (
		<wishlistContext.Provider value={{ wishlist, setWishlist }}>
			{children}
		</wishlistContext.Provider>
	);
};

export { useWishlist, WishlistProvider };
