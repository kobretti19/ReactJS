import {
  EnvelopeIcon,
  HeartIcon,
  MagnifyingGlassIcon,
  PhoneArrowDownLeftIcon,
  ShoppingBagIcon,
  ShoppingCartIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import Category from "./Category";

import { Link, useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";

const HeaderComponent = () => {
  const navigate = useNavigate();
  const token = useSelector((state) => state.tokenController.token);

  const cardItems = useSelector((state) => state?.basket.items);
  const favoritesItems = useSelector((state) => state?.favourite.items);
  console.log(token);

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
      <div className="flex items-center justify-between px-10 py-2 bg-gray-100">
        <div className="flex items-center space-x-4">
          <span className="flex items-start hover:text-orange-500 cursor-pointer transition ease-out duration-200 font-light text-xs">
            <EnvelopeIcon className="h-4 w-4 text-gray-600" /> Пиши ни
          </span>
          <span className="flex items-start hover:text-orange-500 cursor-pointer transition ease-out duration-200 font-light text-xs">
            <PhoneArrowDownLeftIcon className="h-4 w-4 text-gray-600" /> 0800
            44400
          </span>
        </div>

        <span className="flex items-start hover:text-orange-500 cursor-pointer transition ease-out duration-200 font-light text-xs">
          <ShoppingBagIcon className="h-4 w-4 text-gray-600" /> статус на
          нарачка
        </span>
      </div>

      <div className="p-4 flex items-center justify-between bg-white cursor-pointer space-x-4">
        <div className="flex items-center space-x-4 w-2/3 flex-1">
          <img
            onClick={() => navigate("/")}
            src="https://ananas.mk/_next/static/media/ananas-logo-icon.e438d94d.svg"
            alt="ananas logo"
          />
          <div className="flex items-center p-4 space-x-2 bg-gray-100 rounded-full w-1/3">
            <input
              className="bg-transparent outline-none flex-1"
              placeholder="Внеси термин за пребарување"
            />
            <MagnifyingGlassIcon className="h-8 w-8 p-2 rounded-full text-white bg-orange-500" />
          </div>
        </div>
        <div className="flex items-center space-x-4 relative ">
          <span
            onClick={() => navigate("/favorites")}
            className="flex items-start hover:text-orange-500 cursor-pointer transition ease-out duration-200 font-light text-xs"
          >
            <HeartIcon className="h-4 w-4 text-gray-600" /> листа на желби
          </span>
          <span className=" bg-black text-white text-xs rounded-3xl    px-2 absolute -top-4 left-5">
            {favoritesItems.length}
          </span>

          <div className="flex items-center relative space-x-4">
            <span
              onClick={() =>
                setTimeout(() => {
                  navigate("/korpa");
                }, 8000)
              }
              className="flex items-start hover:text-orange-500 cursor-pointer transition ease-out duration-200 font-light text-xs"
            >
              <ShoppingCartIcon className="h-4 w-4 text-gray-600" /> Кошничка
            </span>
            <span className=" bg-black text-white text-xs rounded-3xl px-2 absolute -top-4 left-1">
              {cardItems.length}
            </span>
            {token === null ? najaviSe : odjaviSe}
          </div>
          <Link to={"/basket"}></Link>
        </div>
      </div>
      <Category />
    </header>
  );
};

export default HeaderComponent;
