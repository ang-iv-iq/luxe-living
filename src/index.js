import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import HeroShot from "./MainPage";
import "rsuite/dist/rsuite.min.css";

// Hooks
function RoomColor() {
  const [color, setColor] = useState("Red");

  return (
    <div className="roomColor-section">
      <h3>My Room Color is {color}!</h3>
      <button
        type="button"
        onClick={() => setColor("Blue")}
        style={{ backgroundColor: "#8ecae6" }}
        className="roomColor-button"
      >
        Blue
      </button>
      <button
        type="button"
        onClick={() => setColor("Red")}
        style={{ backgroundColor: "#c1121f" }}
        className="roomColor-button"
      >
        Red
      </button>
      <button
        type="button"
        onClick={() => setColor("Pink")}
        style={{ backgroundColor: "#ffcad4" }}
        className="roomColor-button"
      >
        Pink
      </button>
      <button
        type="button"
        onClick={() => setColor("Navy")}
        style={{ backgroundColor: "#1d3557" }}
        className="roomColor-button"
      >
        Navy
      </button>
      <button
        type="button"
        onClick={() => setColor("Green")}
        style={{ backgroundColor: "#84a98c" }}
        className="roomColor-button"
      >
        Green
      </button>
    </div>
  );
}

//Custom Hooks (counter functionality)
function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);
  const increment = () => setCount((prevState) => prevState + 1);
  const reset = () => setCount(initialValue);
  return [count, increment, reset];
}
function CounterComponent() {
  const [count, increment, reset] = useCounter();
  return (
    <div className="counter">
      <h3>Rooms in my home: {count}</h3>
      <div className="counter-inner">
        <button className="increment-button" onClick={increment}>
          Count
        </button>
        <button className="reset-button" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
}
function SecondCounter() {
  const [count, increment, reset] = useCounter();
  return (
    <div className="counter">
      <h3>Toilets in my home: {count}</h3>
      <div className="counter-inner">
        <button className="increment-button" onClick={increment}>
          Count
        </button>
        <button className="reset-button" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <HeroShot />
    {/* <FirstSection /> */}
    <RoomColor />
    <div className="counters-container">
      <CounterComponent />
      <SecondCounter />
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
