import React, { useEffect, useState } from "react";
// interview question
const FormComponent = ({ setFullName, setUsername: setPropUsername }) => {
  const [firsName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [isSubmitted, setIsSubmitted] = useState(false);

  const [toggle, useToggle] = useState(false);
  const [age, setAge] = useState(0);

  useEffect(() => {
    console.log("this is called");
    setFullName(firsName + " " + lastName);
    setPropUsername(username);
    // logika
  }, [isSubmitted]); // dependency array

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
    alert("Your application is submitted ");
  };

  return (
    <form>
      <label>First Name: </label>
      {/* uncontrolled input */}
      {/* <input onChange={(value) => console.log(value)} /> */}
      {/* controlled input */}
      <input
        type="text"
        value={firsName}
        onChange={(event) => setFirstName(event.target.value)}
      />
      <br />
      <label>Last Name: </label>
      <input
        type="text"
        value={lastName}
        onChange={(event) => setLastName(event.target.value)}
      />
      <br />
      <label>Username: </label>
      <input
        type="text"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
      <br />
      <label>Age:</label>
      <input
        type="number"
        value={age}
        onChange={(event) => setAge(event.target.value)}
      />
      <br />
      <label>Email: </label>
      <input
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <br />
      <label>Password: </label>
      <input
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <br />
      <label>Confirm Password: </label>
      <input
        type="password"
        value={confirmPassword}
        onChange={(event) => setConfirmPassword(event.target.value)}
      />
      <br />

      <button onClick={(event) => handleSubmit(event)} type="submit">
        Submit
      </button>
    </form>
  );
};

export default FormComponent;
