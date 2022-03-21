import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home/Home.jsx";
import { ProductListing } from "../pages/ProductListing/ProductListing.jsx";
import { ProtectedRoutes } from "./ProtectedRoutes";
import { Login } from "../pages/Auth/Login/Login.jsx";
import { Signup } from "../pages/Auth/Signup/Signup.jsx";
import { Cart } from "../pages/Cart/Cart.jsx";
import { WishList } from "../pages/Wishlist/Wishlist.jsx";
import MockApi from "../pages/mockman.jsx";
export const NavRoutes = () => {
	return (
		<Routes>
			<Route path="/home" element={<Home />} />
			<Route path="/productlisting" element={<ProductListing />} />
			<Route path="/" element={<Home />} />
			<Route path="/login" element={<Login />} />
			<Route path="/Signup" element={<Signup />} />
			<Route path="/MockApi" element={<MockApi />} />
			<Route path="/autherror" element={<h1>Auth error</h1>} />
			<Route path="/" element={<ProtectedRoutes />}>
				<Route path="/cart" element={<Cart />} />
				<Route path="/wishlist" element={<WishList />} />
			</Route>
			<Route path="/errorpage" element={<h1>Error page</h1>} />
		</Routes>
	);
};
