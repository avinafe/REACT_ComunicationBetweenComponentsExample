import React from "react";
import "./App.css";
import Greet from "./Components/Greet";

function App() {
  const sendGreet = (firstName, lastName) =>
    console.log(`Hello, ${firstName} ${lastName}`);

  return (
    <div className="App">
      <Greet
        firstName="Angel"
        lastName="Vinas"
        age="22"
        sendGreet={sendGreet}
      />
      <Greet firstName="Lucia" lastName="Wood" sendGreet={sendGreet} />
    </div>
  );
}

export default App;
