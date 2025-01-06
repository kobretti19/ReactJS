import { UserIcon } from "@heroicons/react/24/outline";

import { useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";

const HeaderLogin = () => {
  const navigate = useNavigate();
  const token = useSelector((state) => state.tokenController.token);

  const handleLogOut = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const najaviSe = (
    <span
      onClick={() => navigate("/login")}
      className="flex items-start hover:text-orange-500 cursor-pointer transition ease-out duration-200 font-light text-xs"
    >
      <UserIcon className="h-4 w-4 text-gray-600" /> Најависе
    </span>
  );

  const odjaviSe = (
    <span
      onClick={handleLogOut}
      className="flex items-start hover:text-orange-500 cursor-pointer transition ease-out duration-200 font-light text-xs"
    >
      <UserIcon className="h-4 w-4 text-gray-600" /> Одјави се
    </span>
  );

  return (
    <header>
      <div className="p-4 flex items-center justify-between bg-white cursor-pointer">
        <div className="flex items-center space-x-4 w-2/3 flex-1">
          <img
            onClick={() => navigate("/")}
            src="https://ananas.mk/_next/static/media/ananas-logo-icon.e438d94d.svg"
            alt="ananas logo"
          />
        </div>
        <div className="flex items-center space-x-3">
          {token === "" ? najaviSe : odjaviSe}
        </div>
      </div>
    </header>
  );
};

export default HeaderLogin;
