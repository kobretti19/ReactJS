const Item = ({ name, isPacked }) => {
  return (
    <div className="items-container">
      <div>
        <li>{name}</li>
      </div>
      <div className="check-container">
        <h3>{isPacked === true ? "✅ " : "❌"}</h3>
      </div>
    </div>
  );
};

export default Item;
