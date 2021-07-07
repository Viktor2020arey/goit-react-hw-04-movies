import logo from "./logo.svg";
import "./App.css";

// API Key: e7d0234ea12f637dc6f206bdb03aefdd

// https://api.themoviedb.org/3/movie/550?api_key=e7d0234ea12f637dc6f206bdb03aefdd

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
