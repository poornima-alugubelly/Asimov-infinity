import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home/Home.jsx";
import { ProductListing } from "../pages/ProductListing/ProductListing.jsx";
import { ProtectedRoutes } from "./ProtectedRoutes";
import { Login } from "../pages/Auth/Login/Login.jsx";
import { Signup } from "../pages/Auth/Signup/Signup.jsx";
import { Cart } from "../pages/Cart/Cart.jsx";
import { WishList } from "../pages/Wishlist/Wishlist.jsx";
import { ProductDisplay } from "../pages/ProductDisplay/ProductDisplay.jsx";
import MockApi from "../pages/mockman.jsx";
import { UserProfile } from "../pages/UserProfile/UserProfile.jsx";
import { Orders } from "../pages/UserProfile/Orders/Orders.jsx";
import { Addresses } from "../pages/UserProfile/Addresses/Addresses.jsx";
import { Profile } from "../pages/UserProfile/Profile/Profile.jsx";
import { Checkout } from "../pages/Checkout/Checkout.jsx";
import { OrderSummary } from "../pages/Checkout/OrderSummary/OrderSummary.jsx";
export const NavRoutes = () => {
	return (
		<Routes>
			<Route path="/home" element={<Home />} />
			<Route path="/productlisting" element={<ProductListing />} />
			<Route path="/" element={<Home />} />
			<Route path="/login" element={<Login />} />
			<Route path="/Signup" element={<Signup />} />
			<Route path="/MockApi" element={<MockApi />} />
			<Route
				path="/autherror"
				element={<h1>There was an error!It's not you it's us</h1>}
			/>
			<Route path="/" element={<ProtectedRoutes />}>
				<Route path="/cart" element={<Cart />} />
				<Route path="/wishlist" element={<WishList />} />
				<Route path="/profile" element={<UserProfile />}>
					<Route path="/profile" element={<Profile />} />
					<Route path="/profile/orders" element={<Orders />} />
					<Route path="/profile/addresses" element={<Addresses />} />
				</Route>
				<Route path="/checkout" element={<Checkout />} />
				<Route path="/orderSummary" element={<OrderSummary />} />
			</Route>

			<Route path="/:productId" element={<ProductDisplay />} />
			<Route path="/errorpage" element={<h1>Error page</h1>} />
		</Routes>
	);
};
