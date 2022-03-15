import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { ProductListing } from "../pages/ProductListing";

const NavRoutes = () => {
	return (
		<Routes>
			<Route path="home" element={<Home />} />
			<Route path="productlisting" element={<ProductListing />} />
			<Route path="/" element={<Home />} />
		</Routes>
	);
};

export { NavRoutes };
