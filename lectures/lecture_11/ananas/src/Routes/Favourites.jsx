import { useDispatch, useSelector } from "react-redux";
import { removeFromFavourite } from "../app/favouriteSlice";
import { addToBasket } from "../app/basketSlice";

const Favourites = () => {
  const favoritesItems = useSelector((state) => state?.favourite.items);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-start space-y-8 mx-32">
      <p className="font-bold text-xl border-b-2 border-zinc-300 pb-8">
        Со цел
      </p>
      {favoritesItems?.map((item) => (
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
            <div>
              <p className="text-lg line-through   text-red-600 text-right">
                {Number(0.12 * (item?.price * 100) + item?.price * 100).toFixed(
                  0
                )}
              </p>
              <p className="text-2xl font-bold space-x-2  text-right">
                <span>{Number(item?.price * 100).toFixed(0)}</span>
                <span className="font-normal text-xl">ДЕН</span>
              </p>
              <button
                onClick={() => dispatch(removeFromFavourite(item))}
                className="text-blue-600 font-semibold hover:text-blue-400"
              >
                Отстранете го <br /> производот
              </button>
            </div>
          </div>
          <div className=" p-4 rounded-md  flex justify-between items-center gap-4 relative pl-8 text-gray-500 text-lg ">
            <div className="flex space-x-3">
              <img
                className="  rounded-full p-1"
                src="https://ananas.mk/_next/static/media/delivery-truck-black-icon.fc6a5cb8.svg"
                alt=""
              />

              <span>Достава на адреса</span>
            </div>

            <span className="text-black font-semibold">Бесплатно</span>
            <button
              onClick={() => dispatch(addToBasket(item))}
              className="bg-[#FE5000] text-white px-6 py-2 rounded-lg hover:scale-110"
            >
              ADD TO CART
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Favourites;
