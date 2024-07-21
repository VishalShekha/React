import React, { useState } from "react";
import AddTwoToneIcon from "@mui/icons-material/AddTwoTone";
import RemoveTwoToneIcon from "@mui/icons-material/RemoveTwoTone";
import IconButton from "@mui/material/IconButton";

function StateTwo() {
  let [count, setCount] = useState(0);

  let incrementFive = () => {
    for (let i = 0; i < 5; i++) {
      setCount((pCount) => pCount + 1);
      // if we just use setCount then the code will not go to the return statement and this will be a stale value
    }
  };

  return (
    <center>
      <h1>{count}</h1>
      <IconButton onClick={() => setCount((pCount) => pCount + 1)}>
        {" "}
        {/* pCount is some function used to call it again and again */}
        <AddTwoToneIcon />
      </IconButton>
      <IconButton onClick={() => setCount((pCount) => pCount - 1)}>
        <RemoveTwoToneIcon />
      </IconButton>
      <button onClick={incrementFive}>+5</button>
    </center>
  );
}

export default StateTwo;
