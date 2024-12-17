import "./App.css";
// import { Form01 } from "./components/Form01";
// import { Form02 } from "./components/Form02";

import { ReactHookForm } from "./components/ReactHookForm";

function App() {
  return (
    <div className=" flex justify-center items-center bg-gradient-to-r from-teal-200 to-teal-500 h-screen">
      {/* <Form01 /> */}
      {/* <Form03 /> */}
      <ReactHookForm />
    </div>
  );
}

export default App;
