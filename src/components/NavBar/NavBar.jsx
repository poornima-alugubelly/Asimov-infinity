import "./NavBar.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useUserData } from "../../context/UserDataContext";
import { useProductListing } from "../../context/ProductListingContext";
import { actionTypes } from "../../reducers/actionTypes";
export const NavBar = () => {
	const { auth, setAuth } = useAuth();
	const { SEARCH } = actionTypes;
	const {
		userData: { cartProducts, wishlistProducts },
	} = useUserData();
	const {
		productListingState: { searchText },
		productListingDispatch,
	} = useProductListing();
	const [navIsOpen, setNavIsOpen] = useState(false);

	const navigate = useNavigate();
	const [typing, setTyping] = useState(false);

	return (
		<nav className="nav-bar shadow-bottom">
			<div className="nav-bar-primary">
				<Link to="/Home" className="nav-bar-logo">
					ASIMOV∞
				</Link>

				<ul className="nav-bar-links">
					<li>
						<Link to="/Home">Home</Link>
					</li>
					<li>
						<Link to="/ProductListing">Shop Now</Link>
					</li>
				</ul>
			</div>

			<div className="search-bar input">
				<input
					type="text"
					placeholder="Enter category or product name..."
					value={searchText}
					onChange={(e) => {
						navigate("/ProductListing");
						setTyping(true);
						productListingDispatch({
							type: SEARCH,
							payload: { searchInput: e.target.value },
						});
					}}
				/>
				<button>
					<img
						className="icon-search"
						src={typing ? "/assets/dismiss-blue.svg" : "/assets/Search.svg"}
						alt="search"
						onClick={() => {
							setTyping(false);
							productListingDispatch({
								type: SEARCH,
								payload: { searchInput: "" },
							});
						}}
					/>
				</button>
			</div>

			<ul className="nav-bar-secondary nav-bar-links">
				{auth.isAuth ? (
					<div>
						<Link to="/profile" className="flex-column ">
							<i className="fas fa-user btn-icon"></i>

							<span className="text-xxs pointer">Profile </span>
						</Link>
					</div>
				) : (
					<div className="flex-column">
						<Link to="/login" className="flex-column ">
							<i className="fas fa-user btn-icon"></i>
							<span className="text-xxs pointer">Login</span>
						</Link>
					</div>
				)}

				<div className="flex-column">
					<Link to="/wishlist">
						<div className="badge-wrapper ">
							<i class="fas fa-heart btn-icon"></i>

							<span className="badge badge-top badge-s badge-red">
								{wishlistProducts?.length}
							</span>
						</div>

						<span className="text-xxs pointer">Wishlist</span>
					</Link>
				</div>
				<div className="flex-column">
					<Link to="/cart">
						<div className="badge-wrapper">
							<i className="fas fa-shopping-cart btn-icon"></i>

							<span className="badge badge-top badge-s badge-red">
								{cartProducts?.length}
							</span>
						</div>

						<span className="text-xxs pointer">Cart</span>
					</Link>
				</div>
			</ul>
			<div
				href="#"
				className="toggle-btn "
				role="button"
				onClick={() => setNavIsOpen(true)}
			>
				<div>
					<span className="toggle-bar"></span>
					<span className="toggle-bar"></span>
					<span className="toggle-bar"></span>
				</div>
			</div>

			<ul
				className={`side-nav-mobile ${navIsOpen ? "active" : ""}`}
				id="drawer"
			>
				<li className="padding-s">
					<img
						src="/assets/dismiss-blue.svg"
						className="btn-dismiss item-top-left"
						onClick={() => setNavIsOpen(false)}
					/>
				</li>

				<li className="list-item">
					<Link to="/Home" className="link-text">
						Home
					</Link>
				</li>
				<li className="list-item">
					<Link to="/ProductListing" className="link-text">
						Shop Now
					</Link>
				</li>
				<li className="list-item">
					<Link to="/profile" className="link-text">
						My Profile
					</Link>
				</li>
				<li className="list-item">
					<Link to="/cart" className="link-text">
						My Cart
					</Link>
				</li>
				<li className="list-item">
					<Link to="/wishlist" className="link-text">
						My Wishlist
					</Link>
				</li>
			</ul>
		</nav>
	);
};
