/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";

const Category = () => {
  const [category, setCategory] = useState("");

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

  return (
    <div className="flex flex-row justify-center items-center space-x-5 text-2xl text-orange-400">
      {category?.map((cat, i) => (
        <div key={i}>
          <a href="#">{cat}</a>
        </div>
      ))}
    </div>
  );
};

export default Category;
