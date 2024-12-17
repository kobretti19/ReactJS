import "./App.css";
import { Header } from "./components/Header";
import ToDoList from "./components/ToDoList";

function App() {
  return (
    <>
      <div className="bg-sky-400 h-screen flex flex-col items-center pt-52">
        <Header />
        <ToDoList />
      </div>
    </>
  );
}

export default App;
