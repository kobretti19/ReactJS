import { useState } from "react";
import { Formcomponnent } from "./components/FormComponnent";
import { EXAMPLES } from "./data";
import { TabButton } from "./components/Tabbutton";
import Username from "./components/Username";

function App() {
  const [userName, setUserName] = useState("");
  const [examples, setExamples] = useState("components");

  function handleSelect(selectedButton) {
    console.log(selectedButton);
    setExamples(selectedButton);
  }

  return (
    <div className="flex  justify-center items-center h-screen bg-gradient-to-r from-slate-500 to-slate-800">
      {userName.length < 2 ? (
        <Formcomponnent setUserName={setUserName} />
      ) : (
        <menu className="flex flex-col items-center space-y-6 text-white">
          <ol>
            <Username intialUserName={userName} />
          </ol>

          <div className="flex justify-center items-center flex-row gap-5  text-lg ">
            <TabButton
              selected={examples === "components"}
              onClick={() => handleSelect("components")}
            >
              Components
            </TabButton>
            <TabButton
              selected={examples === "jsx"}
              onClick={() => handleSelect("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              selected={examples === "props"}
              onClick={() => handleSelect("props")}
            >
              Props
            </TabButton>
            <TabButton
              selected={examples === "state"}
              onClick={() => handleSelect("state")}
            >
              State
            </TabButton>
          </div>

          <div className="  w-[575px] h-[520px] bg-[#647081] p-10 space-y-3">
            <h3 className="text-2xl">{EXAMPLES[examples].title}</h3>
            <p>{EXAMPLES[examples].description}</p>
            <pre>
              <code>{EXAMPLES[examples].code}</code>
            </pre>
          </div>
        </menu>
      )}
    </div>
  );
}

export default App;
