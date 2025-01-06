/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { LoginContext } from "../store/AuthProvider";
import { useSelector } from "react-redux";

const ProductsCategories = () => {
  const username = useSelector((state) => state.authController.username);
  const [products, setProducts] = useState(null);
  const navigate = useNavigate();
  const params = useParams();
  const category = params.categories;
  console.log(products);

  useEffect(() => {
    const fetchData = async () => {
      try {
        fetch(`https://fakestoreapi.com/products/category/${category}`)
          .then((res) => res.json())
          .then((json) => setProducts(json));
      } catch (e) {
        console.error(e);
      }
    };
    fetchData();
  }, [category, username]);
  useEffect(() => {
    console.log("username", username);
  }, [username]);

  const handleProductId = (value) => {
    navigate(`/product/${value}`);
  };

  return (
    <div className="flex flex-wrap  gap-5  mx-20   relative  overflow-hidden bg-cover bg-no-repeat  py-10 pb-20">
      {products?.map((product) => (
        <div
          key={product?.id}
          onClick={() => handleProductId(product?.id)}
          className="flex flex-col justify-around space-y-2  w-[210px] h-[350px] bg-white bg-blend-overlay rounded-lg shadow-lg px-2 relative cursor-pointer max-w-xs transition duration-300 ease-in-out hover:scale-110"
        >
          <div
            className="flex flex-col h-[200px]
        "
          >
            <img className="w-full h-[150px]  -mt-4" src={product?.image} />
            <div className="space-y-1">
              <h3 className="text-xs font-thin text-gray-400">АНАНАС ШОП</h3>
              <h3 className="text-xs">{product?.title}</h3>
            </div>
          </div>
          <div className="">
            <div className="text-xs bg-[#90C41A] w-[80%] rounded-2xl px-2 py-1 -mt-10 flex items-center justify-center">
              <p>Бесплатна испорака</p>
            </div>
            <span className="text-red-500 text-xl font-bold absolute left-2 bottom-2 space-x-2">
              <span>{product?.price * 100}</span>
              <span className="font-normal">ден</span>
            </span>
          </div>

          <div className="bg-red-600 flex justify-center items-center text-white absolute -top-2 left-0 w-14 h-8 rounded-tl-xl rounded-br-xl text-lg ">
            <span>-{Math.floor(Math.random() * 30)}%</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductsCategories;
