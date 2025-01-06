import { Outlet } from "react-router-dom";
import HeaderComponent from "../Components/HeaderComponent";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { handleToken } from "../app/CheckToken";

const Layout = () => {
  const token = useSelector((state) => state.tokenController.token);

  useEffect(() => {
    const token = localStorage.getItem("token");
    handleToken(token);
    if (!token) {
      window.location.href = "/login";
    }
  }, [token]);

  return (
    <>
      <div className="bg-gray-50">
        <HeaderComponent />

        <Outlet />
      </div>
    </>
  );
};

export default Layout;
