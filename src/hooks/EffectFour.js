import React, { useEffect, useState } from "react";

function EffectFour() {
  let [count, setCount] = useState(0);

  const tick = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    // function doSomething(someProp) {
    //   console.log(someProp);
    // }
    // doSomething(someProp); //over here some prop is a dependency and it should be in the array
    const interval = setInterval(tick, 1000);
    return () => {
      clearInterval(interval);
    }; //Dont put the depends on array , if you put up the empty array make sure that it doesnt actually depend on anything
  });

  return (
    <div>
      <h1>{count}</h1>
    </div>
  );
}

export default EffectFour;
// useEffect with incorrect dependency
