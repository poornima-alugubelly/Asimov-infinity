import { IMAGES } from "../../assets";
import "./nav-bar.css";

import { Link } from "react-router-dom";
const NavBar = () => {
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
				<input type="text" />
				<button>
					<img className="icon-search" src={IMAGES.searchIcon} alt="search" />
				</button>
			</div>

			<ul className="nav-bar-secondary nav-bar-links">
				<a href="./login.html" className="flex-column">
					<i class="fas fa-user btn-icon"></i>

					<span className="text-xxs">Login</span>
				</a>
				<div className="flex-column">
					<div className="badge-wrapper">
						<a href="./wishlist-page.html">
							<i class="fas fa-heart btn-icon"></i>

							<span className="badge badge-top badge-s badge-red">11</span>
						</a>
					</div>
					<span className="text-xxs">Wish List</span>
				</div>
				<div className="flex-column">
					<div className="badge-wrapper">
						<a href="./cart-page.html">
							<i class="fas fa-shopping-cart btn-icon"></i>

							<span className="badge badge-top badge-s badge-red">11</span>
						</a>
					</div>
					<span className="text-xxs">Cart</span>
				</div>
			</ul>
			<a
				href="#"
				className="toggle-btn drawer-toggle"
				data-drawer-target="#drawer"
			>
				<span className="toggle-bar"></span>
				<span className="toggle-bar"></span>
				<span className="toggle-bar"></span>
			</a>
			<ul className="drawer" id="drawer">
				<div className="drawer-header">
					<a href="./index.html" className="nav-bar-logo">
						ASIMOV∞
					</a>
					<button className="btn btn-dismiss">
						<img src="./assets/SVG/dismiss-blue.svg" alt="" />
					</button>
				</div>

				<li className="list-item">
					<a href="./index.html" className="link-text">
						Profile
					</a>
				</li>
				<li className="list-item">
					<a href="./public/product-page.html" className="link-text">
						Orders
					</a>
				</li>
				<li className="list-item">
					<a href="./index.html" className="link-text">
						Settings
					</a>
				</li>
				<li className="list-item">
					<a href="./index.html" className="link-text">
						Cart
					</a>
				</li>
			</ul>
		</nav>
	);
};

export { NavBar };
