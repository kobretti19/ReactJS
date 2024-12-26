import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { handlePassword, handleUserName } from "../app/AuthProvider";
import { useContext } from "react";
import { LoginContext } from "../store/AuthProvider";

const LoginPage = () => {
  // const { setUserInput, userInput, inputPassword, setInputPassword } =
  //   useContext(LoginContext);
  const username = useSelector((state) => state.authController.username);
  const password = useSelector((state) => state.authController.password);
  const { setUserInput, setPasswordInput } = useContext(LoginContext);
  console.log(username, password, "username, password");
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const hadleClick = () => {
    if (username !== "" && password !== "") {
      setUserInput(username);
      setPasswordInput(password);

      navigate("/");
    }
    window.location.reload();
  };

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
        <form>
          <input
            placeholder="E-Mail address"
            className="border border-gray-400 outline-none w-full mt-4 py-2 rounded-md placeholder:pl-2"
            value={username}
            type="email"
            onChange={(e) => dispatch(handleUserName(e.target.value))}
          />
          <input
            placeholder="Password"
            className="border border-gray-400 outline-none w-full mt-4 py-2 rounded-md placeholder:pl-2"
            type="password"
            value={password}
            onChange={(e) => dispatch(handlePassword(e.target.value))}
          />

          <button
            onClick={hadleClick}
            className="bg-orange-500 w-full py-4 text-white text-xl rounded-md mt-10"
          >
            Најави се
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
