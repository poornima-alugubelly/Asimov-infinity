import { useState } from "react";
export const usePwdToggler = () => {
	const [pwdToggle, setpwdToggle] = useState({
		type: "password",
		class: "fa-eye-slash",
	});
	const pwdToggler = () => {
		pwdToggle.type === "password"
			? setpwdToggle({ type: "text", class: "fa-eye" })
			: setpwdToggle({ type: "password", class: "fa-eye-slash" });
	};

	return [pwdToggle, pwdToggler];
};
