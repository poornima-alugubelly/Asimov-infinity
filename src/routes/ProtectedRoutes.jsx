import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useLocation } from "react-router-dom";
export const ProtectedRoutes = () => {
	const { auth } = useAuth();
	const location = useLocation();
	return auth.isAuth ? (
		<Outlet />
	) : (
		<Navigate to="login" state={{ from: location }} replace />
	);
};
