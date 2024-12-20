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
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const HeaderComponent = () => {
  const [category, setCategory] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        fetch("https://fakestoreapi.com/products/categories")
          .then((res) => res.json())
          .then((json) => setCategory(json));
      } catch (e) {
        console.error(e);
      }
    };
    fetchData();
  }, [navigate]);

  const handleCategories = (clicked) => {
    navigate(`products/category/${clicked}`, "_blank", "noreferrer");
    window.location.reload();
  };

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

      <div className="p-4 flex items-center justify-between bg-white cursor-pointer">
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
        <div className="flex items-center space-x-3">
          <span className="flex items-start hover:text-orange-500 cursor-pointer transition ease-out duration-200 font-light text-xs">
            <HeartIcon className="h-4 w-4 text-gray-600" /> листа на желби
          </span>
          <span className="flex items-start hover:text-orange-500 cursor-pointer transition ease-out duration-200 font-light text-xs">
            <UserIcon className="h-4 w-4 text-gray-600" /> Најависе
          </span>
          <span className="flex items-start hover:text-orange-500 cursor-pointer transition ease-out duration-200 font-light text-xs">
            <ShoppingCartIcon className="h-4 w-4 text-gray-600" /> Кошничка
          </span>
        </div>
      </div>
      <div className="flex flex-row justify-center items-center space-x-20 text-2xl text-orange-400 my-5 ">
        {category?.map((cat, i) => (
          <ol
            className="hover:text-orange-200 transition-duration:150ms  hover:scale-110 "
            key={i}
          >
            <li
              role="link"
              onClick={() => handleCategories(cat)}
              className="cursor-pointer"
            >
              {cat}
            </li>
          </ol>
        ))}
      </div>
      {/* <Category /> */}
    </header>
  );
};

export default HeaderComponent;
