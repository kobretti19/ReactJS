import { useState, useEffect } from "react";
import validator from "validator";

export function Formcomponnent({ setUserName: setUser }) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [message, setMessage] = useState("");

  const [errorUserName, setErrorUserName] = useState(null);
  const [errorPassword, setErrorPassword] = useState(null);

  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateError = (value, setFunction, errorText) => {
    if (value.length < 4) {
      setFunction(errorText);
      setIsSubmitted(false);
    } else {
      setFunction(null);
      setIsSubmitted(true);
    }
  };
  // const validate = (value) => {
  //   if (
  //     validator.isStrongPassword(value, {
  //       minLength: 8,
  //       minLowercase: 1,
  //       minUppercase: 1,
  //       minNumbers: 1,
  //       minSymbols: 1,
  //     })
  //   ) {
  //     setErrorMessage("✅");
  //   } else {
  //     setErrorMessage("Is Not Strong Password");
  //   }
  // };

  const validatePassword = () => {
    if (password !== passwordConfirm) {
      console.log(password, passwordConfirm);
      setErrorPassword("Invalid password");
    } else {
      setErrorPassword("✅");
    }
  };

  const validateEmail = (e) => {
    const email = e.target.value;

    if (!validator.isEmail(email)) {
      setMessage("Please, enter valid Email!");
    } else if (validator.isEmail(email)) {
      setMessage("✅");
    }
  };

  const handleSubmit = () => {
    validateError(
      userName,
      setErrorUserName,
      "Username must have contain min 4 character"
    );
  };

  useEffect(() => {
    setUser(userName);
  }, [isSubmitted]);

  useEffect(() => {
    // if (!password || !passwordConfirm) {
    //   return;
    // } else {
    //   validatePassword();
    // }
    validatePassword();
    console.log("Use effect called");
  }, [password, passwordConfirm]);

  const handleEvent = (event) => {
    event.preventDefault();
    handleSubmit();
    validatePassword();
  };

  return (
    <div className=" w-64 h-auto">
      <form>
        <label>Username</label>
        <input
          type="text"
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
        />
        <span>{errorUserName}</span>
        <label htmlFor="userEmail">email</label>
        <input
          type="email"
          name="email"
          id="userEmail"
          onChange={(e) => validateEmail(e)}
        />
        <span>{message}</span>

        <label>password</label>
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <span>{errorPassword}</span>
        <label>passwordConfirm</label>
        <input
          type="password"
          value={passwordConfirm}
          onChange={(event) => setPasswordConfirm(event.target.value)}
        />
        <span>{errorPassword}</span>
        <button
          onClick={(event) => handleEvent(event)}
          className="btn-input"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
