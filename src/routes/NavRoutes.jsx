import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/home";
import { ProductListing } from "../pages/product-listing";

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
