import React from "react";

export default function Greet(props) {
  const { age, firstName, lastName, sendGreet } = props;
  return (
    <div>
      <h1>
        Hello, {firstName} {lastName} {age}!
      </h1>
      <button onClick={() => sendGreet(firstName, lastName)}>Send Greet</button>
    </div>
  );
}
