import { useState } from "react";

export default function Username({ intialUserName }) {
  const [isEditing, setIsEditing] = useState(false);
  const [userName, setUserName] = useState(intialUserName);

  function hadleEditClick() {
    setIsEditing((editing) => !editing);
  }

  function handleChange(event) {
    setUserName(event.target.value);
  }

  let editingUserName = (
    <span className="font-semibold text-3xl tracking-widest text-red-400">
      {userName}
    </span>
  );
  if (isEditing) {
    editingUserName = (
      <input type="text" value={userName} onChange={handleChange} />
    );
  }

  return (
    <li className="flex justify-between items-center space-x-16 w-full ">
      {editingUserName}
      <button onClick={hadleEditClick}>{!isEditing ? "Edit" : "Save"}</button>
    </li>
  );
}
