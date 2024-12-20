import { Outlet, useNavigate } from "react-router-dom";
import HeaderComponent from "../Components/HeaderComponent";
import { useEffect } from "react";

const Layout = () => {
  const username = localStorage.getItem("username");
  const navigate = useNavigate();

  useEffect(() => {
    if (!username) {
      navigate("/login");
    }
  }, [username]);

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
