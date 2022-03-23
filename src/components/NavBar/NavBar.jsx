import { IMAGES } from "../../assets";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useUserData } from "../../context/UserDataContext";
export const NavBar = () => {
	const { auth, setAuth } = useAuth();
	const { userData } = useUserData();
	const { cartProducts, wishlistProducts } = userData;
	const [navIsOpen, setNavIsOpen] = useState(false);
	const logoutHandler = () => {
		localStorage.removeItem("token");
		localStorage.removeItem("isAuth");
		setAuth({ token: "", isAuth: false });
		navigate("/home");
	};

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
				<input type="text" placeholder="type to search..." />
				<button>
					<img className="icon-search" src={IMAGES.searchIcon} alt="search" />
				</button>
			</div>

			<ul className="nav-bar-secondary nav-bar-links">
				{auth.isAuth ? (
					<div onClick={logoutHandler}>
						<Link to="/login" className="flex-column ">
							<i class="fas fa-user btn-icon"></i>

							<span className="text-xxs pointer">Logout </span>
						</Link>
					</div>
				) : (
					<div className="flex-column">
						<Link to="/login" className="flex-column ">
							<i class="fas fa-user btn-icon"></i>
							<span className="text-xxs pointer">Login</span>
						</Link>
					</div>
				)}

				<div className="flex-column">
					<Link to="/wishlist">
						<div className="badge-wrapper ">
							<i class="fas fa-heart btn-icon"></i>

							<span className="badge badge-top badge-s badge-red">
								{wishlistProducts.length}
							</span>
						</div>

						<span className="text-xxs pointer">Wishlist</span>
					</Link>
				</div>
				<div className="flex-column">
					<Link to="/cart">
						<div className="badge-wrapper">
							<i class="fas fa-shopping-cart btn-icon"></i>

							<span className="badge badge-top badge-s badge-red">
								{cartProducts.length}
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
				onClick={() => setNavIsOpen(!navIsOpen)}
			>
				{!navIsOpen ? (
					<div>
						<span className="toggle-bar"></span>
						<span className="toggle-bar"></span>
						<span className="toggle-bar"></span>
					</div>
				) : (
					<i class="fas fa-times btn-icon"></i>
				)}
			</div>

			<ul
				className={`side-nav-mobile ${navIsOpen ? "active" : ""}`}
				id="drawer"
			>
				{/* <div className="drawer-header">
					<a href="./index.html" className="nav-bar-logo">
						ASIMOV∞
					</a>
					<button className="btn btn-dismiss">
						<img src="./assets/SVG/dismiss-blue.svg" alt="" />
					</button>
				</div> */}

				<li className="list-item">
					<Link to="/Home" className="link-text">
						Home
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
