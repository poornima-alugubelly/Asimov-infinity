import { useState } from "react";
import "../Auth.css";
import { loginService } from "../../../services/auth-services/loginService";
import { useAuth } from "../../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { usePwdToggler } from "../../../hooks/usePwdToggler";
import { Link } from "react-router-dom";
export const Login = () => {
	const [formVal, setFormVal] = useState({ email: "", password: "" });
	const [pwdToggle, pwdToggler] = usePwdToggler();
	const [error, setError] = useState("");
	const { setAuth } = useAuth();
	const navigate = useNavigate();
	const loginHandler = async (e, email, password) => {
		setFormVal({ email, password });
		e.preventDefault();
		try {
			const res = await loginService(email, password);
			if (res.status === 200) {
				localStorage.setItem("token", res.data.encodedToken);
				localStorage.setItem("isAuth", true);
				console.log(res.data.foundUser.firstName);
				setAuth({
					token: res.data.encodedToken,
					isAuth: true,
					firstName: res.data.foundUser.firstName,
					lastName: res.data.foundUser.lastName,
					userEmail: res.data.foundUser.email,
				});
				navigate("/home");
			}
		} catch (err) {
			setError(err.response.data.errors[0]);
		}
	};

	return (
		<div className="form-page-container flex-center">
			<form
				action=""
				className="form-container"
				onSubmit={(e) => loginHandler(e, formVal.email, formVal.password)}
			>
				<h2 className="padding-s text-center">LOGIN</h2>
				<div className="flex-column gap-s">
					<div>
						<label for="email-input"> Email </label>
						<input
							type="email"
							className="input"
							id="email-input"
							placeholder="Enter Email"
							value={formVal.email}
							required
							onChange={(e) =>
								setFormVal((prev) => ({ ...prev, email: e.target.value }))
							}
						/>
					</div>

					<div>
						<label for="email-password"> Password </label>
						<div className="input input-with-icon flex-space-between">
							<input
								type={`${pwdToggle.type}`}
								id="email-password"
								pattern="^.{8,}$"
								required
								placeholder="Enter Password"
								value={formVal.password}
								onChange={(e) =>
									setFormVal((prev) => ({ ...prev, password: e.target.value }))
								}
							/>

							<span
								className={`fas ${pwdToggle.class} pointer`}
								role="button"
								onClick={() => pwdToggler()}
							></span>
						</div>
					</div>
					<div className="form-subtext flex-space-between">
						<label for="remember-me" className="flex-row gap-xs pointer">
							<input
								type="checkbox"
								name="checkbox"
								id="remember-me"
								className="input-checkbox"
							/>
							Remember-me
						</label>
						<a href="#" className="txt-high-light link-colored">
							Forgot your password?
						</a>
					</div>
					{error && <span className="text-red">{error}</span>}
					<button className="btn btn-primary-solid">Login</button>
					<button
						className="btn btn-primary-outline"
						onClick={(e) =>
							loginHandler(e, "adarshbalak@gmail.com", "adarshBalaki123")
						}
					>
						Login with test credentials
					</button>
					<Link
						to="/Signup"
						className="text-center link-colored flex-center gap-xs"
					>
						Create New account <i className="fas fa-chevron-right"></i>
					</Link>
				</div>
			</form>
		</div>
	);
};
