import { Outlet } from "react-router-dom";
import HeaderComponent from "../Components/HeaderComponent";
import { SignedIn } from "@clerk/clerk-react";

const Layout = () => {
  return (
    <>
      <div className="bg-gray-50">
        <HeaderComponent />
        <SignedIn>
          <Outlet />
        </SignedIn>
      </div>
    </>
  );
};

export default Layout;
