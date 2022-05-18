/**
 * /**
 *
 * This is a Context Provider for the address state
 *
 * @type - context-provider
 * @return {react-component} - AuthProvider component
 * @export {react-component} - AuthProvider component
 * @export {custom-hook} - useAuth()
 */

import { createContext, useContext, useState } from "react";
const AuthContext = createContext();

const useAuth = () => useContext(AuthContext);
const AuthContextProvider = ({ children }) => {
	const [auth, setAuth] = useState(() => {
		const token = localStorage.getItem("token");

		if (token) return { token, isAuth: true };

		return { token: "", isAuth: false };
	});
	return (
		<AuthContext.Provider value={{ auth, setAuth }}>
			{children}
		</AuthContext.Provider>
	);
};

export { useAuth, AuthContextProvider };
