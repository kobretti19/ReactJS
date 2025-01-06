/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { useSelector } from "react-redux";
import useFetch from "../../hooks/useFetch";

const ProductsCategories = () => {
  const navigate = useNavigate();
  const params = useParams();

  const category = params.categories;

  const { data: products, isFetched } = useFetch(
    `https://fakestoreapi.com/products/category/${category}`
  );

  const handleProductId = (value) => {
    navigate(`/product/${value?.id}`);
  };

  return (
    <div className="flex flex-wrap  gap-5  mx-20   relative  overflow-hidden bg-cover bg-no-repeat  py-10 pb-20">
      {isFetched ? (
        <>
          {products?.map((product) => (
            <div
              key={product?.id}
              onClick={() => handleProductId(product)}
              className="flex flex-col justify-around space-y-2  w-[210px] h-[350px] bg-white bg-blend-overlay rounded-lg shadow-lg px-2 relative cursor-pointer max-w-xs transition duration-300 ease-in-out hover:scale-110"
            >
              <div
                className="flex flex-col h-[200px]
        "
              >
                <img className="w-full h-[150px]  -mt-4" src={product?.image} />
                <div className="space-y-1">
                  <h3 className="text-xs font-thin text-gray-400">
                    АНАНАС ШОП
                  </h3>
                  <h3 className="text-xs">{product?.title}</h3>
                </div>
              </div>
              <div>
                <div className="text-xs bg-[#90C41A] w-[80%] rounded-2xl px-2 py-1 -mt-16 flex items-center justify-center space-x-1">
                  <span>
                    <img
                      src="https://ananas.mk/_next/static/media/delivery-truck-black-icon.fc6a5cb8.svg"
                      alt=""
                    />
                  </span>
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
        </>
      ) : (
        <div
          className="flex justify-center h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status"
        >
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Loading...
          </span>
        </div>
      )}
    </div>
  );
};

export default ProductsCategories;
