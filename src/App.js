import Navbar from "./components/Navbar";
import Body from "./components/Body";
import RightDrawer from './components/RightDrawer'
import Poster from "./components/Poster";
import { useRef } from "react";
function App() {
 const childRef=useRef();


 function callChildFunction() {
  childRef.current.changer(); // Call the child component's function
}

  return (
   <>
   <Navbar/>

  <Body/>
<RightDrawer/>

{/* 
<button onClick={callChildFunction}>click</button>
   
    <Poster ref={childRef}/> */}
  
   </>
  );
}

export default App;
