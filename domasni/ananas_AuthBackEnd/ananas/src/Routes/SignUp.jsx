import { useState } from "react";
import { useNavigate } from "react-router-dom";
import HeaderLogin from "../Components/HeaderLogin";

const SignUp = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const handleLogin = async () => {
    try {
      const signUpData = await fetch("http://localhost:3000/api/user/signup", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
          passwordConfirm,
        }),
      });

      const data = await signUpData?.json();

      if (data?.message === "success") {
        navigate("/login");
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
        <div className="flex items-center justify-center h-[90vh] w-screen  ">
          <div className="w-1/4 h-auto bg-white p-8 rounded-lg shadow-lg  ">
            <h2 className="text-3xl font-bold">Регистирај се</h2>

            <form
              className="space-y-6 py-6 "
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                placeholder="name"
                className="border border-gray-400 outline-none w-full mt-4 py-2 px-2 rounded-md "
                value={name}
                type="text"
                onChange={(e) => setName(e.target.value)}
              />
              <input
                placeholder="E-Mail address"
                className="border border-gray-400 outline-none w-full mt-4 py-2 px-2 rounded-md placeholder:pl-2"
                value={email}
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                placeholder="Password"
                className="border border-gray-400 outline-none w-full mt-4 py-2 px-2 rounded-md placeholder:pl-2"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                placeholder="PasswordConfirm"
                className="border border-gray-400 outline-none w-full mt-4 py-2 px-2 rounded-md placeholder:pl-2"
                type="password"
                value={passwordConfirm}
                onChange={(e) => setPasswordConfirm(e.target.value)}
              />

              <button
                onClick={handleLogin}
                className="bg-orange-500 w-full py-4 text-white text-xl rounded-md mt-10"
              >
                Креирај Сметка
              </button>
            </form>
          </div>
        </div>
      </>
    </>
  );
};

export default SignUp;
