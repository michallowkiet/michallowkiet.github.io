import "./App.css";
import Counter from "./Counter";

function App() {
  return (
    <div className="App">
      <header>
        <h1 className="App-title">Counter</h1>
      </header>
      <Counter initValue={1} />
    </div>
  );
}

export default App;
