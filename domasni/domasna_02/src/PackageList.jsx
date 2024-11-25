import Item from "./Item";
import { ITEMS } from "./data";
import checklistImg from "./assets/checklist.png";

const PackageList = () => {
  return (
    <div className="card-container">
      <img id="img-checklist" src={checklistImg} />
      <ol>
        <h2>CHECKLIST</h2>
        <Item name={ITEMS[0].name} isPacked={ITEMS[0].isPacked} />
        <Item name={ITEMS[1].name} isPacked={ITEMS[1].isPacked} />
        <Item name={ITEMS[2].name} isPacked={ITEMS[2].isPacked} />
        <Item name={ITEMS[3].name} isPacked={ITEMS[3].isPacked} />
        <Item name={ITEMS[4].name} isPacked={ITEMS[4].isPacked} />
        <Item name={ITEMS[5].name} isPacked={ITEMS[5].isPacked} />
      </ol>
    </div>
  );
};

export default PackageList;
