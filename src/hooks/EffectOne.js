// document level coding and DOM Level
import React, { useEffect, useState } from "react";

function EffectOne() {
  let [count, setCount] = useState(0);
  let [name, setName] = useState("");

  useEffect(() => {
    console.log("Updated render");
    document.title = `Clicked ${count} times`;
  }, [count]);

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
    </div>
  );
}

export default EffectOne;
// useEffect runs the function everytime the component renders
// it should be used inside the component function

// conditionally run effects
// useEffect takes in another perimeter that runs only if the props changes
