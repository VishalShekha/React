import React, { useState } from "react";
import EffectsTwo from "./EffectsTwo";

function EffectThree() {
  const [display, setDisplay] = useState(true);
  return (
    <div>
      <button
        onClick={() => {
          setDisplay(!display);
        }}
      >
        Toggle Display
      </button>
      {display && <EffectsTwo />}
    </div>
  );
}

export default EffectThree;
