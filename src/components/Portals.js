import React from "react";
import ReactDOM from "react-dom";

function Portals() {
  return ReactDOM.createPortal(
    <div>Footer</div>,
    document.getElementById("footer")
  );
}

export default Portals;

// We need to call this component in the index.js/App.js file too but it will still render under the new index element id 'footer'
