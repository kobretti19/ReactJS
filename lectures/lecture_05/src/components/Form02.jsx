import { useState } from "react";

export function Form02() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleInputFirstName = (value) => {
    setFirstName(value);
  };

  return (
    <div>
      <form className="space-x-3" onSubmit={(event) => event.preventDefault()}>
        <input
          type="text"
          value={firstName}
          placeholder="First Name"
          onChange={(event) => handleInputFirstName(event.target.value)}
        />
        <input
          type="text"
          value={lastName}
          placeholder="Last Name"
          onChange={(event) => setLastName(event.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
