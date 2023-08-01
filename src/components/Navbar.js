import React from 'react'
import { useRef } from 'react';
import "./All.css"
import DDrawer from './DDrawer';


export default function Navbar() {

  const reff = useRef();


  const handleButtonClick = () => {
    // Call the child component's function using the ref
    if (reff.current) {
      reff.current.temp();
    }
  };






  return (<>   
  


<div className='navbar_container'>
<DDrawer  ref={reff}/>

{/* <button onClick={handleButtonClick} >Clk</button> */}
<div className='navbar_button'><button onClick={handleButtonClick} >Clk</button></div>
   <div className='navbar_logo'>
   <img  alt="Logo" className='logo_img' src="https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png?region=0,0,586,254"  />


   </div>
  


</div>



    </>
  );
}

