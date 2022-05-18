/**
 * /**
 *
 * This is a custom hook for changing the UI of input for the password field
 *
 * @type {custom-hook} - usePwdToggler
 * @return {array} - array having two values
 *              1) pwdToggle - object which has type and class
 * 				where type is type of input for the password field
 * 				class is class to be applied on input for the password field
 * 				2) pwdToggler - function which sets the pwdToggle value
 *
 * @export {custom-hook} - usePwdToggler
 */

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
