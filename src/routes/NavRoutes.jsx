import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/home";
import { ProductListing } from "../pages/product-listing";
import { ProtectedRoutes } from "./ProtectedRoutes";
import { Login } from "../pages/login";
import { Signup } from "../pages/signup";
import { Cart } from "../pages/cart";
import MockApi from "../pages/mockman.jsx";
const NavRoutes = () => {
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
			</Route>
			<Route path="/errorpage" element={<h1>Error page</h1>} />
		</Routes>
	);
};

export { NavRoutes };
