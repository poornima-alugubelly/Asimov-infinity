import { useAuth } from "../../../context/AuthContext";
export const Settings = () => {
	const {
		auth: { isAuth, token },
		setAuth,
	} = useAuth();
	const logoutHandler = () => {
		localStorage.removeItem("token");
		localStorage.removeItem("isAuth");
		setAuth({ token: "", isAuth: false });
		navigate("/home");
	};
	return (
		<div className="padding-s">
			<h3>Profile Details</h3>
			<button
				className="btn btn-primary-solid margin-tp-btm-s"
				onClick={() => logoutHandler()}
			>
				Log out
			</button>
		</div>
	);
};
