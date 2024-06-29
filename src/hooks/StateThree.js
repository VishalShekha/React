import React, { useState } from "react";

function StateThree() {
  let [name, setName] = useState({ firstName: "", lastName: "" });
  return (
    <div>
      <form action="">
        <input
          type="text"
          value={name.firstName}
          onChange={(e) => setName({ ...name, firstName: e.target.value })}
        />
        <input
          type="text"
          value={name.lastName}
          onChange={(e) => setName({ ...name, lastName: e.target.value })} //...name means that copy everything from name JSON and then overwrite lastName
        />

        <h2>First name is {name.firstName}</h2>
        <h2>First name is {name.lastName}</h2>

        <h2>{JSON.stringify(name)}</h2>
      </form>
    </div>
  );
}

export default StateThree;

// Arrow Functions
/* 
function name(a) {
return a
}


let name = a => a

*/
