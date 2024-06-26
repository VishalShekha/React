// import Greet from "./components/ComponentFunc";
// import PropsPassing from "./components/PropsPassing";
// import StatesChanges from "./components/StatesChanges";
// import MethodsAsProps from "./components/MethodsAsProps";
// import ConditionalRender from "./components/ConditionalRender";
import ListRender from "./components/ListRender";

// let logged = (child) => {
//   console.log(`Hi ${child}`)
// }


function App() {
  return (
    <div className="App">
      {/* <Greet /> */}

      {/* <PropsPassing name="Vishal"> 
       <h1>children tag</h1>
      </PropsPassing>*/}
      
      {/* <StatesChanges></StatesChanges> */}
      
      {/* <MethodsAsProps func = {logged}/> */}
    
        {/* <ConditionalRender isTrue = {0}></ConditionalRender> */}
        
        <ListRender></ListRender>

    </div>
  );
}

export default App;
