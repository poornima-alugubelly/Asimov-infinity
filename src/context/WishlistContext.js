import { createContext, useContext, useState, useEffect } from "react";
import { getWishlistService } from "../services/wishlist-services/getWishlistService";
import { useAuth } from "./AuthContext";
const wishlistContext = createContext();
const useWishlist = () => useContext(wishlistContext);

const WishlistProvider = ({ children }) => {
	const [wishlist, setWishlist] = useState({
		wishlistProducts: [],
		wishlistError: false,
		wishlistLoading: false,
	});
	const { auth } = useAuth();

	useEffect(() => {
		(async () => {
			if (auth.isAuth) {
				setWishlist((prev) => ({ ...prev, wishlistLoading: true }));
				try {
					const res = await getWishlistService(auth.token);
					if (res.status === 200)
						setWishlist((prev) => ({
							...prev,
							wishlistProducts: res.data.wishlist,
							wishlistLoading: false,
						}));
				} catch (err) {
					err && setWishlist((prev) => ({ ...prev, wishlistError: true }));
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
