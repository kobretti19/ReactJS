import { useContext, useState } from "react";
import { LoginContext } from "../store/AuthProvider";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const { setUserInput, userInput, inputPassword, setInputPassword } =
    useContext(LoginContext);
  const [username, setUserName] = useState("");

  const navigate = useNavigate();

  const setUser = (e) => {
    setUserName(e.target.value);
  };

  const hadleClick = () => {
    setUserInput(username);
    setInputPassword(inputPassword);
    if (userInput && inputPassword) {
      navigate("/");
    }
    window.location.reload();
  };
  console.log(inputPassword, "inputPassword");
  return (
    <div className="flex items-center justify-center h-[90vh] w-screen">
      <div className="w-1/4 h-3/5 bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold">Најависе</h2>
        <p className="text-sm pt-1">
          Немаш Ананас профил?{" "}
          <span className="text-orange-500 cursor-pointer">
            {" "}
            Регистрирај се
          </span>
        </p>

        <input
          placeholder="E-Mail address"
          className="border border-gray-400 outline-none w-full mt-4 py-2 rounded-md placeholder:pl-2"
          value={username}
          type="text"
          onChange={setUser}
        />
        <input
          placeholder="Password"
          className="border border-gray-400 outline-none w-full mt-4 py-2 rounded-md placeholder:pl-2"
          type="text"
          value={inputPassword}
          onChange={(e) => setInputPassword(e.target.value)}
        />

        <button
          onClick={hadleClick}
          className="bg-orange-500 w-full py-4 text-white text-xl rounded-md mt-10"
        >
          Најави се
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
