// import Greet from "./components/ComponentFunc";
// import PropsPassing from "./components/PropsPassing";
// import StatesChanges from "./components/StatesChanges";
// import MethodsAsProps from "./components/MethodsAsProps";
// import ConditionalRender from "./components/ConditionalRender";
// import ListRender from "./components/ListRender";
// import FormHandling from "./components/FormHandling";
import Memos from "./components/Memos";
import { useState } from "react";
import Portals from "./components/Portals";

// let logged = (child) => {
//   console.log(`Hi ${child}`)
// }


function App() {
  let [name, setName] = useState('Vishal');

  return (
    <div className="App" onClick={() => setName('Vidya')}>
      {/* <Greet /> */}

      {/* <PropsPassing name="Vishal"> 
       <h1>children tag</h1>
      </PropsPassing>*/}
      
      {/* <StatesChanges></StatesChanges> */}
      
      {/* <MethodsAsProps func = {logged}/> */}
    
        {/* <ConditionalRender isTrue = {0}></ConditionalRender> */}
        
        {/* <ListRender></ListRender> */}

        {/* <FormHandling></FormHandling> */}

        <Memos name = {name}></Memos>
        <Portals></Portals>

    </div>
  );
}

export default App;
