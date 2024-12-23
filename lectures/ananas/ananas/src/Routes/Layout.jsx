import { Outlet } from "react-router-dom";
import HeaderComponent from "../Components/HeaderComponent";

const Layout = () => {
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
