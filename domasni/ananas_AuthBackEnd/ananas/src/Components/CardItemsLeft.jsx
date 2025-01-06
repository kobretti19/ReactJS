import { useDispatch, useSelector } from "react-redux";
import { addToBasket, removeFromCard } from "../app/basketSlice";
import { useEffect } from "react";

const CardItemsLeft = () => {
  const cardItems = useSelector((state) => state?.basket.items);

  const dispatch = useDispatch();

  useEffect(() => {}, [cardItems]);

  console.log();
  return (
    <div className="space-y-8">
      <p className="font-bold text-xl border-b-2 border-zinc-300 pb-8">
        Со цел
      </p>
      {cardItems?.map((item) => (
        <div
          key={item?.id}
          className="flex flex-col w-[800px] h-auto gap-y-6  rounded-lg shadow-sm bg-[#F3F4F6] p-6"
        >
          <span className="pl-8 p-4">
            <span>Од:</span>
            <span className="font-semibold text-lg"> AНАНАС ШОП</span>
          </span>
          <div className="flex flex-row  justify-around items-center p-6   border-2 border-y-zinc-300 border-x-0">
            <img className="w-28 h-28 object-contain" src={item?.image} />
            <div className="w-1/2 ml-6 space-y-6">
              <h4 className="font-bold text-lg w-full ">{item?.title}</h4>
              <p className="w-full underline font-semibold">АНАНАС ШОП</p>
              <span className="text-gray-500">
                <span>Тежина: {(Math.random() * 10).toFixed(2)}</span>
                <span> KG</span>
              </span>
            </div>
            <div className="flex flex-row justify-between mx-6 border-2 bg-white border-zinc-300 rounded-md w-1/6 px-6 py-3">
              <button onClick={() => dispatch(removeFromCard(item))}>-</button>
              <input
                className="w-4 text-center "
                type="text"
                value={item?.quantity}
              />
              <button onClick={() => dispatch(addToBasket(item))}>+</button>
            </div>
            <div>
              {cardItems ? (
                <>
                  <p className="text-lg line-through   text-red-600 text-right">
                    {(
                      0.12 * (item?.totalPrice * 100) +
                      item?.totalPrice * 100
                    ).toFixed(0)}
                  </p>
                  <p className="text-2xl font-bold space-x-2  text-right">
                    <span>{(item?.totalPrice * 100).toFixed(0)}</span>
                    <span className="font-normal text-xl">ДЕН</span>
                  </p>
                  <button
                    onClick={() => dispatch(removeFromCard(item))}
                    className="text-blue-600 -mr-9 font-semibold hover:text-blue-400"
                  >
                    Отстранете го производот
                  </button>{" "}
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
          </div>
          <div className=" p-4 rounded-md  flex items-center gap-4 relative pl-8 text-gray-500 text-lg ">
            <img
              className="  rounded-full p-1"
              src="https://ananas.mk/_next/static/media/delivery-truck-black-icon.fc6a5cb8.svg"
              alt=""
            />

            <span>Достава на адреса</span>
            <span className="text-black font-semibold">Бесплатно</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardItemsLeft;
