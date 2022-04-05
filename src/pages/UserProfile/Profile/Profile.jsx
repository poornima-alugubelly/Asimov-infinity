import { useAuth } from "../../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { actionTypes } from "../../../reducers/actionTypes";
import { useUserData } from "../../../context/UserDataContext";
export const Profile = () => {
	const {
		auth: { firstName, lastName, userEmail },
		setAuth,
	} = useAuth();
	const { userDataDispatch } = useUserData();

	const navigate = useNavigate();

	const { RESET } = actionTypes;

	const logoutHandler = () => {
		localStorage.removeItem("token");
		localStorage.removeItem("isAuth");
		setAuth({
			token: "",
			isAuth: false,
			firstName: "",
			lastName: "",
			userEmail: "",
		});
		userDataDispatch({ type: RESET });
		navigate("/home");
	};

	return (
		<div className="padding-s ">
			<h3>Profile Details</h3>
			<div className="profile-details">
				<div className="flex-space-between padding-tp-btm-xs">
					<p>Full Name</p>
					<p>{`${firstName} ${lastName}`}</p>
				</div>
				<div className="flex-space-between padding-tp-btm-xs">
					<p>Email</p>
					<p>{userEmail}</p>
				</div>
				<button
					className="btn btn-primary-solid margin-tp-btm-s"
					onClick={() => logoutHandler()}
				>
					Log out
				</button>
			</div>
		</div>
	);
};
