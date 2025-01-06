import { useNavigate } from "react-router-dom";

import { useState } from "react";
import HeaderLogin from "../Components/HeaderLogin";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    console.log(email, password, "email,password");
    try {
      const loginData = await fetch("http://localhost:3000/api/user/login", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await loginData?.json();
      if (data) {
        if (data?.message === "success") {
          localStorage.setItem("token", data?.token);
          setEmail("");
          setPassword("");
          navigate("/");
        }
      }
      console.log(data);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <HeaderLogin />
      <>
        {" "}
        <div className="flex items-center justify-center h-[90vh] w-screen">
          <div className="w-1/4 h-3/5 bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold">Најависе</h2>
            <p className="text-sm pt-1">
              Немаш Ананас профил?
              <span
                onClick={() => navigate("/signup")}
                className="text-orange-500 cursor-pointer"
              >
                Регистрирај се
              </span>
            </p>
            <form onSubmit={(e) => e.preventDefault()}>
              <input
                placeholder="E-Mail address"
                className="border border-gray-400 outline-none w-full mt-4 py-2 rounded-md placeholder:pl-2"
                value={email}
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                placeholder="Password"
                className="border border-gray-400 outline-none w-full mt-4 py-2 rounded-md placeholder:pl-2"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <button
                onClick={() => handleLogin()}
                className="bg-orange-500 w-full py-4 text-white text-xl rounded-md mt-10"
              >
                Најави се
              </button>
            </form>
          </div>
        </div>
      </>
    </>
  );
};

export default LoginPage;
