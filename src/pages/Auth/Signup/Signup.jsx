import { signupService } from "../../../services/auth-services/signupService";
import { useAuth } from "../../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { usePwdToggler } from "../../../hooks/usePwdToggler";
export const Signup = () => {
	const [formVal, setFormVal] = useState({
		email: "",
		password: "",
		firstName: "",
		lastName: "",
	});
	const { setAuth } = useAuth();
	const [error, setError] = useState("");
	const navigate = useNavigate();
	const [pwdToggle, pwdToggler] = usePwdToggler();
	const signUpHandler = async (e, email, password, firstName, lastName) => {
		e.preventDefault();
		try {
			const res = await signupService(email, password, firstName, lastName);
			if (res.status === 201) {
				localStorage.setItem("token", res.data.token);
				localStorage.setItem("isAuth", true);
				setAuth({
					token: res.data.token,
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
		<div
			className="form-page-container flex-center"
			onSubmit={(e) =>
				signUpHandler(
					e,
					formVal.email,
					formVal.password,
					formVal.firstName,
					formVal.lastName
				)
			}
		>
			<form action="" className="form-container">
				<h2 className="padding-s text-center">SIGN UP</h2>
				<div className="flex-column gap-s">
					<div>
						<label for="email-input"> Email </label>
						<input
							type="email"
							className="input"
							id="email-input"
							placeholder="Enter Email"
							required
							value={formVal.email}
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

					<div>
						<label for="first-name"> First Name </label>
						<input
							type="text"
							className="input"
							id="first-name"
							placeholder="Enter first name"
							value={formVal.firstName}
							required
							onChange={(e) =>
								setFormVal((prev) => ({ ...prev, firstName: e.target.value }))
							}
						/>
					</div>
					<div>
						<label for="last-name"> Last Name </label>
						<input
							type="text"
							class="input"
							id="last-name"
							placeholder="Enter last name"
							value={formVal.lastName}
							required
							onChange={(e) =>
								setFormVal((prev) => ({ ...prev, lastName: e.target.value }))
							}
						/>
					</div>
					<div>
						<label for="remember-me" class="flex-row gap-xs pointer">
							<input
								type="checkbox"
								name="checkbox"
								id="remember-me"
								class="input-checkbox"
								required
							/>
							I accept all Terms & Conditions
						</label>
					</div>
					{error && <span className="red-text">{error}</span>}
					<button className="btn btn-primary-solid">Sign Up</button>
					<a
						href="./login.html"
						className="text-center link-colored flex-center gap-xs"
					>
						Already have an account? <i className="fas fa-chevron-right"></i>
					</a>
				</div>
			</form>
		</div>
	);
};
