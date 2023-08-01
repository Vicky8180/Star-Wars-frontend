import React, { forwardRef, useEffect, useImperativeHandle, useState } from 'react'
import "./All.css"
import Grid from './Grid'
import Dummy from './Dummy';
import Planet from './Planet';
import Films from './Films';
import Species from './Species';
import Vehicles from './Vehicles';
import Starships from './Starships';


const Poster=forwardRef((props,ref)=>{

  useImperativeHandle(ref,()=>({
    changer,
      }))
 
  const[whatTodisplay, setWhatToDisplay]=useState('');
   
  function changer(){
    setWhatToDisplay('Grid');
  }
  function changer2(){
    setWhatToDisplay('Planets');
  }
  function changer3(){
    setWhatToDisplay('Species');
  }
  function changer4(){
    setWhatToDisplay('Films');
  }
  function changer5(){
    setWhatToDisplay('Starships');
  }
  function changer6(){
    setWhatToDisplay('Vehicles');
  }

  function renderer(){

    switch(whatTodisplay){
      case 'Grid':
        return <Grid/>;
       case 'Dummy':
        return <Dummy/>;
      case 'Planets':
          return <Planet/>;
      case 'Starships':
          return <Starships/>;
      case 'Vehicles':
          return <Vehicles/>;
      case 'Films':
          return <Films/>
      case 'Species':
          return <Species/>;
    
       default:
        return <Dummy/> 
    }
  }



  return (
  <>
    <div className='poster_main'>
    <button onClick={changer}>click</button>
    <button onClick={changer2}>click</button>
    <button onClick={changer3}>click</button>
    <button onClick={changer4}>click</button>
    <button onClick={changer5}>click</button>
    <button onClick={changer6}>click</button>

{renderer()}

    </div>
  </>
  )
})

export default Poster;
















///////////////////////////////////////////////////////////////



// import React, { forwardRef, useEffect, useImperativeHandle, useState } from 'react'
// import "./All.css"
// import Grid from './Grid'
// import Dummy from './Dummy';
// import Planet from './Planet';
// import Films from './Films';
// import Species from './Species';
// import Vehicles from './Vehicles';
// import Starships from './Starships';


// const Poster=((props)=>{


 



//   return (
//   <>
//     <div className='poster_main'>
 

// {renderer}

//     </div>
//   </>
//   )
// })

// export default Poster;








