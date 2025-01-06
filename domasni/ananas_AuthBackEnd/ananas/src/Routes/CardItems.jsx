import { useSelector } from "react-redux";

import CardItemsLeft from "../Components/CardItemsLeft";
import CardItemsRight from "../Components/CardItemsRight";

const CardItems = () => {
  const cardItems = useSelector((state) => state?.basket.items);

  console.log(cardItems);

  console.log(cardItems, "cardItems");

  return (
    <div className="flex flex-row justify-around space-y-4 mx-20 ">
      <CardItemsLeft />
      <CardItemsRight />
    </div>
  );
};

export default CardItems;
