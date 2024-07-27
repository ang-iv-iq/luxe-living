import logo from "../src/images/logo-long-navy.svg";
import "./App.css";
import MyButton from "./Button";
import "rsuite/dist/rsuite.min.css";
function Navbar() {
  return (
    <nav className="navbar">
      <a href="#">Indoor</a>
      <a href="#">Outdoor</a>
      <a href="#">Decorations</a>
    </nav>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo-iq" alt="logo" />
        <Navbar />
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <MyButton color={"orange"} appearance={"primary"} label={"Login"} />
      </header>
    </div>
  );
}

export default App;
