import "./UserProfile.css";
import { Link, Outlet } from "react-router-dom";
export const UserProfile = () => {
	return (
		<div className="cart-page-container">
			<h2 className="padding-l text-center">My Profile</h2>
			<div className="flex-center">
				<div className="profile-container ">
					<div className="flex-column ">
						<ul className=" profile-nav">
							<li className="profile-link text-center padding-m">
								<Link to="/profile">Profile</Link>
							</li>

							<li className="profile-link text-center padding-m">
								<Link to="/profile/orders">Orders</Link>
							</li>

							<li className="profile-link text-center padding-m">
								<Link to="/profile/addresses">Addresses</Link>
							</li>
						</ul>
					</div>
					<Outlet />
				</div>
			</div>
		</div>
	);
};
