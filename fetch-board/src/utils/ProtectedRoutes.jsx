import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { MyContext } from "../context/dataContext";

const ProtectedRoutes = () => {
  const { isLogin } = useContext(MyContext);
  return isLogin ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
