import "./UserProfile.css";
import { Link, Outlet } from "react-router-dom";
export const UserProfile = () => {
	return (
		<div class="cart-page-container">
			<h2 class="padding-l text-center">My Profile</h2>
			<div className="profile-container">
				<div className="flex-row ">
					<ul className="list-container profile-nav">
						<li className="profile-link text-center padding-m">
							<Link to="/profile">Profile</Link>
						</li>

						<li className="profile-link text-center padding-m">
							<Link to="/profile/orders">Orders</Link>
						</li>

						<li className="profile-link text-center padding-m">
							<Link to="/profile/addresses">Addresses</Link>
						</li>

						<li className="profile-link text-center padding-m">
							<Link to="/profile/settings">Settings</Link>
						</li>
					</ul>
					<Outlet />
				</div>
			</div>
		</div>
	);
};
