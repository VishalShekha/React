import { useContext } from "react";
import { UserContext } from "../AppLearn";
// use context is for the component child to have information the parent doesnt need
// useContext - Contextpeovides a way to pass data through the component tree without having to pass props down manually at every level

import React from "react";

function ContextOne() {
  const user = useContext(UserContext);
  return <div>{user}</div>;
}

export default ContextOne;
