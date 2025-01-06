import { useState } from "react";

import "./App.css";
import useDeviceDetect from "../hooks/useDeviceDetect";

function App() {
  const [count, setCount] = useState(0);
  const { isMobile } = useDeviceDetect();

  return (
    <>
      <div className={isMobile ? "bg-red-500" : "bg-green-500"}>
        <h2>{isMobile ? "Mobile Device" : "Desktop"}</h2>
        <p>Mleko</p>
        <button onClick={() => setCount(count + 50)}>ADD</button>
        <p>Leb</p>
        <button onClick={() => setCount(count + 20)}>ADD</button>
        <p>Jajca</p>
        <button onClick={() => setCount(count + 75)}>ADD</button>

        <h4>TOTAL {count}</h4>
      </div>
    </>
  );
}

export default App;
