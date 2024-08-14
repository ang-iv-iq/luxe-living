import React, { useState } from "react";
import ReactDOM from "react-dom/client";
function RoomColor() {
  const [color, setColor] = useState("red");

  return (
    <>
      <h3>My Room Color is {color}!</h3>
      <button type="button" onClick={() => setColor("blue")}>
        Blue
      </button>
      <button type="button" onClick={() => setColor("red")}>
        Red
      </button>
      <button type="button" onClick={() => setColor("pink")}>
        Pink
      </button>
      <button type="button" onClick={() => setColor("navy")}>
        Navy
      </button>
      <button type="button" onClick={() => setColor("green")}>
        Green
      </button>
    </>
  );
}

const roomColor = ReactDOM.createRoot(document.getElementById("roomColor"));
roomColor.render(
  <React.StrictMode>
    <RoomColor />
  </React.StrictMode>
);
