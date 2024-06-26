import React from "react";

// function PropsPassing(props) {
//   return <div>Hello World! {props.name}</div>;
// }

// Children props
function PropsPassing(props) {
  return (
    <div>
      <h1>Hello World! {props.name}</h1>
      {props.children}
    </div>
  );
}

export default PropsPassing;
