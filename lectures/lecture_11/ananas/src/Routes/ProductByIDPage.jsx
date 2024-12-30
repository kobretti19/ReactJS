/* eslint-disable react-hooks/exhaustive-deps */
import { HeartIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addToBasket, removeFromCard } from "../app/basketSlice";
import { addToFavourite } from "../app/favouriteSlice";

const ProductByIDPage = () => {
  const params = useParams();
  const id = params.id;
  const quantity = useSelector((state) => state.basket.quantity);

  const [product, setProduct] = useState(null);
  const [count, setCount] = useState("1");

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        fetch(`https://fakestoreapi.com/products/${id}`)
          .then((res) => res.json())
          .then((json) => setProduct(json));
      } catch (e) {
        console.error(e);
      }
    };
    fetchData();
  }, [count, quantity]);

  const countMinus = (value) => {
    dispatch(removeFromCard(value));
    setCount((count) => --count);
  };

  const countPlus = (value) => {
    dispatch(addToBasket(value));
    console.log(quantity, "value.quantity");
    setCount((count) => ++count);
  };

  const handleAddItem = (value) => {
    dispatch(addToBasket(value));
    setCount((count) => ++count);
  };

  return (
    <div className="flex px-20  py-10 justify-around  bg-white mx-auto">
      <div className=" w-1/2 ">
        <div>
          <img className="max-h-[510px] w-2/3" src={product?.image} alt="" />
        </div>
      </div>
      <div className="w-2/4 px-5 flex flex-col space-y-10 bg-white ">
        <div className="flex flex-col space-y-4">
          <h2 className="text-3xl font-semibold tracking-wide ">
            {product?.title}
          </h2>
          <p>
            Бренд:{" "}
            <span className="underline"> {product?.title.split(" ")[1]}</span>
          </p>

          <p>
            Продавач: <span className="underline">АНАНАС ШОП</span>{" "}
          </p>
        </div>
        <div className="text-xs bg-[#90C41A] w-[25%] rounded-xl px-2 py-1 -mt-10 flex items-center justify-center space-x-1">
          <span>
            <img
              src="https://ananas.mk/_next/static/media/delivery-truck-black-icon.fc6a5cb8.svg"
              alt=""
            />
          </span>
          <p>Бесплатна испорака</p>
        </div>
        <div className="flex flex-col space-y-5 border-2 border-zinc-300 rounded-md p-10 h-full ">
          <p className="text-sm ">
            <span className="  space-x-2">
              <span className=" line-through ">
                {(0.12 * (product?.price * 100) + product?.price * 100).toFixed(
                  0
                )}
              </span>
              <span className=" line-through ">ДЕН</span>
              <span>
                Заштеда:
                {(0.12 * (product?.price * 100) + product?.price * 100).toFixed(
                  0
                ) -
                  product?.price * 100}
              </span>
              <span>ДЕН</span>
            </span>
          </p>
          <div>
            <span className="text-red-500 text-3xl font-bold   space-x-2">
              <span>{(product?.price * 100).toFixed(0)}</span>
              <span className="font-normal text-2xl">ден</span>
            </span>
            <p className="text-sm">Понудата важи од 13.12.2024 до 13.01.2025</p>
          </div>
          <div className="flex flex-row space-x-4">
            <button
              onClick={() => dispatch(addToFavourite(product))}
              className="flex flex-row space-x-2 border-2  border-zinc-300 rounded-md px-4 py-3 hover:border-[#FE5000] "
            >
              <HeartIcon className="w-6 h-6 text-zinc-500 hover:stroke-orange-400 " />
            </button>
            <div className="flex flex-row justify-between  border-2 border-zinc-300 rounded-md w-1/6 px-6 py-3">
              <button onClick={() => countMinus(product)}>-</button>
              <input
                className="w-4 text-center"
                type="text"
                value={count - 1}
                onChange={(e) => setCount(e.target.value)}
              />
              <button onClick={() => countPlus(product)}>+</button>
            </div>
            <button
              onClick={() => handleAddItem(product)}
              className="bg-[#FE5000] px-6 py-3 rounded-md text-white font-semibold text-lg tracking-wide w-1/2"
            >
              Додади во кошничка
            </button>
          </div>
          <div className="bg-[#F3F4F6] p-4 rounded-md">
            <div className="flex  justify-between relative pl-10 ">
              <img
                className="absolute -top-1 left-0 bg-blue-400 rounded-full p-1"
                src="https://ananas.mk/_next/static/media/delivery-truck-black-icon.fc6a5cb8.svg"
                alt=""
              />
              <span>Достава на адреса</span>
              <span>
                <img
                  src="https://ananas.mk/_next/static/media/info-icon.53bde20f.svg"
                  alt=""
                />
              </span>
            </div>
            <p className="pl-10">Проценети трошоци за испорака: Бесплатна</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductByIDPage;
