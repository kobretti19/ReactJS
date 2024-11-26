import Item from "./Item";
import { ITEMS } from "./data";
import checklistImg from "./assets/checklist.png";

const PackageList = () => {
  return (
    <div className="card-container">
      <img id="img-checklist" src={checklistImg} />
      <ol>
        <h2>CHECKLIST</h2>
        <Item {...ITEMS[0]} />
        <Item {...ITEMS[1]} />
        <Item {...ITEMS[2]} />
        <Item {...ITEMS[3]} />
        <Item {...ITEMS[4]} />
        <Item {...ITEMS[5]} />
        <Item {...ITEMS[6]} />
      </ol>
    </div>
  );
};

export default PackageList;
