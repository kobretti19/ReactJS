import Header from './components/Header';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="bg-sky-400 h-screen flex flex-col items-center pt-52">
      <Header />
      <TodoList />
    </div>
  );
}

export default App;
