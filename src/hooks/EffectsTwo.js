import React, { useEffect, useState } from "react";

function EffectsTwo() {
  let [x, setX] = useState(0);
  let [y, setY] = useState(0);

  const logMousePosition = (e) => {
    console.log("Mouse event");
    setX(e.clientX);
    setY(e.clientY);
  };

  useEffect(() => {
    console.log("updated render");
    window.addEventListener("mousemove", logMousePosition);
    return () => {
      console.log("Unmount Code");
      window.removeEventListener("mousemove", logMousePosition);
    };
  }, []);

  return (
    <div>
      Hooks X-{x} Y-{y}
    </div>
  );
}

export default EffectsTwo;
// For making it render only on Mount time then we can do this by passing nothing in the conditional parameter

// if you want it to render only while unmount then you have to return a function in the useeffect first parameter
