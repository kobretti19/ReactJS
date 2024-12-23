/* eslint-disable no-unused-vars */
import { Bars3Icon } from "@heroicons/react/24/outline";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Category = () => {
  const [category, setCategory] = useState([]);

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
  }, []);
  const handleCategories = (clicked) => {
    navigate(`products/category/${clicked}`, "_blank", "noreferrer");
    // window.location.reload();
  };

  let menuRender = (
    <>
      {category?.map((cat, i) => (
        <ol
          className="tracking-wide hover:text-orange-200 transition-duration:150ms bg-white p-3   hover:scale-110  "
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
    </>
  );

  return (
    <div className="flex flex-row justify-start items-center space-x-8 pl-10 text-xs my-5 mt-0 bg-white ">
      <div className=" flex items-center  -ml-10 space-x-2 text- bg-[#F9FAFB] p-3 px-8 font-bold cursor-pointer">
        <Bars3Icon className="w-6" />
        <p>Сите категории</p>
      </div>
      {menuRender}
    </div>
  );
};

export default Category;
