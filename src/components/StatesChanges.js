import React, { useState } from "react";

function StatesChanges() {
  let [text, setText] = useState("Hello");

  const handleClick = () => {
    setText("Hi"); // Update text state when button is clicked
    alert("Wrong password");
  };
  return (
    <>
      <h1>{text}</h1>
      <button
        type="button"
        class="btn btn-outline-success"
        onClick={handleClick} // when you add paratensis to a function name you call the function immediately thats why you have to use another function on an onclick events
      >
        Success
      </button>
    </>
  );
}

export default StatesChanges;
