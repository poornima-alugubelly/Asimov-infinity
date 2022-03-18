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
