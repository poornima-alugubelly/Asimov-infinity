import "./UserProfile.css";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
export const UserProfile = () => {
	const [currPage, setCurrPage] = useState("Profile");
	return (
		<div className="cart-page-container">
			<h2 className="padding-l text-center">My Profile</h2>
			<div className="flex-center">
				<div className="profile-container ">
					<div className="flex-column ">
						<ul className="flex-space-between">
							<li
								className={`profile-link text-center padding-m ${
									currPage === "Profile" ? "border-bottom" : ""
								}`}
							>
								<Link to="/profile" onClick={() => setCurrPage("Profile")}>
									Profile
								</Link>
							</li>

							<li
								className={`profile-link text-center padding-m ${
									currPage === "Orders" ? "border-bottom" : ""
								}`}
							>
								<Link
									to="/profile/orders"
									onClick={() => setCurrPage("Orders")}
								>
									Orders
								</Link>
							</li>

							<li
								className={`profile-link text-center padding-m ${
									currPage === "Addresses" ? "border-bottom" : ""
								}`}
							>
								<Link
									to="/profile/addresses"
									onClick={() => setCurrPage("Addresses")}
								>
									Addresses
								</Link>
							</li>
						</ul>
					</div>
					<Outlet />
				</div>
			</div>
		</div>
	);
};
