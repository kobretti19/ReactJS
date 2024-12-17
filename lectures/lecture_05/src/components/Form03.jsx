import { useState } from "react";

export function Form03() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [errorFirstName, setErrorFirstName] = useState(null);
  const [errorLastName, setErrorLastName] = useState(null);

  const validateError = (value, setFunction, errorText) => {
    if (value.length < 3) {
      setFunction(errorText);
    } else {
      setFunction(null);
    }
  };
  const handdleSubmit = () => {
    console.log(firstName);
    console.log(setErrorFirstName);
    validateError(firstName, setErrorFirstName, "Error");
    // validateError(
    //   lastName,
    //   setErrorLastName,
    //   "Error message for the Last Name"
    // );
  };

  return (
    <div>
      <form className="space-x-3" onSubmit={(event) => event.preventDefault()}>
        <div>
          <input
            type="text"
            value={firstName}
            placeholder="First Name"
            onChange={(event) => setFirstName(event.target.value)}
          />
          <p>{errorFirstName}</p>
        </div>
        <div>
          <input
            type="text"
            value={lastName}
            placeholder="Last Name"
            onChange={(event) => setLastName(event.target.value)}
          />
        </div>
        <button type="submit" onClick={handdleSubmit}>
          Sign up
        </button>
      </form>
    </div>
  );
}
