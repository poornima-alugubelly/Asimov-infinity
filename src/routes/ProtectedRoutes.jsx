import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Login } from "../pages/login";
const ProtectedRoutes = () => {
	const { auth } = useAuth();
	console.log(auth.isAuth);
	return auth.isAuth ? <Outlet /> : <Navigate to="login" />;
};

export { ProtectedRoutes };
