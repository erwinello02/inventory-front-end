import { useLocation, Outlet, Navigate } from "react-router-dom";

const Auth = ({ setIsAuthenticated }) => {
  const location = useLocation();
  return setIsAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};
export default Auth;
