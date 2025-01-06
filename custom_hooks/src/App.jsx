import { useState } from "react";

import "./App.css";
import { FormComponnent } from "./FormComponent";

function App() {
  const [fullName, setFullName] = useState("");

  return (
    <div>
      <FormComponnent setFullName={setFullName} />
    </div>
  );
}

export default App;
