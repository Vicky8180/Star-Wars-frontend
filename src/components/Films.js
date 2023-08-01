
import React, { useState, useEffect } from 'react'
import List from './List';
import axios from 'axios'
import Dot from './Dot'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function Planet() {

   
    const[gridlist,setGridList]=useState(true);
const [dataFilms, setDataFilms]=useState(null);



useEffect(()=>{
    async function fetcher(){
        try {
          const temp=await axios.get('https://swapi.dev/api/films')
            //    console.log(temp);
               setDataFilms(temp);
          
        } catch (error) {
          console.log("Cant fetch Planet data");
          
        }
      
      }
      fetcher();


},[]);



const films=[

  {key:"A New Hope",value:"https://wp-media.patheos.com/blogs/sites/747/2015/11/IMG_0472.jpg"},
  {key:"The Empire Strikes Back",value:"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/B92552B7CE9B7BB39BB3BDC551F35DB98C04740118F5B30975134814DF7A4E62/scale?width=1200&aspectRatio=1.78&format=jpeg"},
  {key:"Return of the Jedi",value:"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/773B031A52B5727F7C218E42149B45095C21A8BA56601EB1F51FC46485304210/scale?width=1200&aspectRatio=1.78&format=jpeg"},
  {key:"The Phantom Menace",value:"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/1DD533AEAA5733289BC71A5BB2B0F8CCF5738DDED38B214302609E48F53A7374/scale?width=1200&aspectRatio=1.78&format=jpeg"},
  {key:"Attack of the Clones",value:"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/078F6B045F22D352CD101F31A558360C056959BAC6C7DD90914EFC0CC46D86F2/scale?width=1200&aspectRatio=1.78&format=jpeg"},
  {key:"Revenge of the Sith",value:"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/03BE24C8533E2B6128DAB52B3F7E91723330681DF1CB7214FC38482D6592BA57/scale?width=1200&aspectRatio=1.78&format=jpeg"}
]

    function changer(){
      setGridList(true);
    }
    function changer2(){
      setGridList(false);
    }


if (!dataFilms) {
    // Loading state while data is being fetched
    return <div>

<Box sx={{ display: 'flex' }}>
      <CircularProgress />
    </Box>

    </div>;
  }
//   console.log(dataPlanets.data.results)
  var newPlanetData=dataFilms.data.results;


 newPlanetData= newPlanetData.map((item,index)=>({

...item,"images":films[index].value
  }))
console.log(newPlanetData);
  return (
    <>
 <div className='grid_main'>

 <div className='grid_heading'>
<div className='grid_heading_name'>Films</div>

<div> 
    <button onClick={changer}>Grid</button>
    <button onClick={changer2}>List</button>
    </div>
 </div>
 <div className='grid_card_container'>

{gridlist ? newPlanetData.map((item)=>(
    <div className='gridcard_main'>
<div className='gridcard_poster'>

<img alt={item.title} className='gridcard_img' src={item.images}/>

</div>
<div className='gridcard_name'>
    <div className='gridcard_name_left'>{item.title}</div>
    <div className='gridcard_name_dropdown'>
   <Dot   props={item}/> 
    </div>
    </div>
</div>
)):<List  items={newPlanetData}/>}
 </div>
 </div>

    </>
  )
}