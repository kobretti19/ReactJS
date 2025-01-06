import { Outlet } from "react-router-dom";
import HeaderComponent from "../components/HeaderComponent";

const Layout = () => {
  return (
    <div>
      <HeaderComponent />
      <Outlet />
      <footer>THIS IS FOOTER</footer>
    </div>
  );
};

export default Layout;
