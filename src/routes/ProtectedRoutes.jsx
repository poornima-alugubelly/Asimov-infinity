import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
export const ProtectedRoutes = () => {
	const { auth } = useAuth();
	console.log(auth.isAuth);
	return auth.isAuth ? <Outlet /> : <Navigate to="login" />;
};
