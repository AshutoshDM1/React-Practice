import viteLogo from "/vite.svg";
import "./App.css";
import Counter from "./components/Counter";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex items-center justify-center">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>React Redux</h1>
      <Counter />
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
