import "./NavBar.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import { useUserData } from "../../context/UserDataContext";
import { useProductListing } from "../../context/ProductListingContext";
import { actionTypes } from "../../reducers/actionTypes";
import { useDebounce } from "../../hooks/useDebounce";

export const NavBar = () => {
	const { auth } = useAuth();
	const { SEARCH } = actionTypes;
	const {
		userData: { cartProducts, wishlistProducts },
	} = useUserData();
	const { productListingDispatch } = useProductListing();
	const [navIsOpen, setNavIsOpen] = useState(false);
	const navigate = useNavigate();
	const [typing, setTyping] = useState(false);
	const getActiveStyle = ({ isActive }) => ({
		color: isActive ? "#01d2ed" : "",
	});
	const [searchVal, setSearchVal] = useState();
	const debouncedSearchVal = useDebounce(searchVal, 800);

	useEffect(() => {
		productListingDispatch({
			type: SEARCH,
			payload: { searchInput: searchVal },
		});
		console.log("called");
	}, [debouncedSearchVal]);

	return (
		<nav className="nav-bar shadow-bottom">
			<div className="nav-bar-primary">
				<NavLink style={getActiveStyle} to="/Home" className="nav-bar-logo">
					ASIMOV∞
				</NavLink>

				<ul className="nav-bar-links">
					<li>
						<NavLink style={getActiveStyle} to="/Home">
							Home
						</NavLink>
					</li>
					<li>
						<NavLink style={getActiveStyle} to="/ProductListing">
							Shop Now
						</NavLink>
					</li>
				</ul>
			</div>

			<div className="search-bar input">
				<input
					type="text"
					placeholder="Enter category or product name..."
					value={searchVal}
					onChange={(e) => {
						navigate("/ProductListing");
						setTyping(true);
						setSearchVal(e.target.value);
					}}
				/>
				<button>
					<img
						className="icon-search"
						src={
							typing && searchVal
								? "/assets/dismiss-blue.svg"
								: "/assets/Search.svg"
						}
						alt="search"
						onClick={() => {
							setTyping(false);
							setSearchVal("");
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
						<NavLink
							style={getActiveStyle}
							to="/profile"
							className="flex-column "
						>
							<i className="fas fa-user btn-icon"></i>

							<span className="text-xxs pointer">Profile </span>
						</NavLink>
					</div>
				) : (
					<div className="flex-column">
						<NavLink
							style={getActiveStyle}
							to="/login"
							className="flex-column "
						>
							<i className="fas fa-user btn-icon"></i>
							<span className="text-xxs pointer">Login</span>
						</NavLink>
					</div>
				)}

				<div className="flex-column">
					<NavLink style={getActiveStyle} to="/wishlist">
						<div className="badge-wrapper ">
							<i class="fas fa-heart btn-icon"></i>

							<span className="badge badge-top badge-s badge-red">
								{wishlistProducts?.length}
							</span>
						</div>

						<span className="text-xxs pointer">Wishlist</span>
					</NavLink>
				</div>
				<div className="flex-column">
					<NavLink style={getActiveStyle} to="/cart">
						<div className="badge-wrapper">
							<i className="fas fa-shopping-cart btn-icon"></i>

							<span className="badge badge-top badge-s badge-red">
								{cartProducts?.length}
							</span>
						</div>

						<span className="text-xxs pointer">Cart</span>
					</NavLink>
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
					<NavLink to="/Home" style={getActiveStyle} className="link-text">
						Home
					</NavLink>
				</li>
				<li className="list-item">
					<NavLink
						to="/ProductListing"
						style={getActiveStyle}
						className="link-text"
					>
						Shop Now
					</NavLink>
				</li>
				<li className="list-item">
					<NavLink to="/profile" style={getActiveStyle} className="link-text">
						My Profile
					</NavLink>
				</li>
				<li className="list-item">
					<NavLink to="/cart" style={getActiveStyle} className="link-text">
						My Cart
					</NavLink>
				</li>
				<li className="list-item">
					<NavLink to="/wishlist" style={getActiveStyle} className="link-text">
						My Wishlist
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};
