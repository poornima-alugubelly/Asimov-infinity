import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/home";
import { ProductListing } from "../pages/product-listing";
import { ProtectedRoutes } from "./ProtectedRoutes";
import { useAuth } from "../context/AuthContext";
import { Login } from "../pages/login";
import { Signup } from "../pages/signup";
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
		</Routes>
	);
};

export { NavRoutes };
