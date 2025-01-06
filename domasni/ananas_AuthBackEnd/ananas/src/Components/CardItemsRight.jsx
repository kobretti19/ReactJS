import { useSelector } from "react-redux";
import { selectTotal } from "../app/basketSlice";

const CardItemsRight = () => {
  const cardItems = useSelector((state) => state?.basket.items);
  const total = useSelector(selectTotal);
  console.log(cardItems);

  return (
    <div className="flex flex-col w-1/4 bg-white gap-y-7">
      {total ? (
        <>
          <div className="flex justify-between font-normal text-xl -ml-0">
            <span>Вкупни трошоци за испорака:</span>
            <span>0.00 ден</span>
          </div>
          <div className="flex justify-between  font-normal text-xl border-2 border-x-0 border-t-0 border-b-gray-200 pb-7">
            <span className="ml-0">Акциски заштеди:</span>
            <span className="text-red-500">
              {(total * 0.12 * 100).toFixed(0)} ден
            </span>
          </div>
          <div className="flex justify-between flex-row space-x-2 w-full text-2xl font-bold">
            <span>Вкупно:</span>
            <span className="space-x-2">
              <span>{(total * 100).toFixed(0)}</span>
              <span>ден</span>
            </span>
          </div>
          <span>(ДДВ е вклучен во цената)</span>
          <button className="bg-[#FE5000] text-white text-xl px-6 py-6 rounded-lg hover:scale-105">
            Изберете начин на испорака
          </button>
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
      ;
    </div>
  );
};

export default CardItemsRight;
