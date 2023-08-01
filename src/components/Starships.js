
import React, { useState, useEffect } from 'react'
import List from './List';
import axios from 'axios'
import Dot from './Dot'
import StarshipsList from './StarshipList'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
export default function Planet() {

    const[gridlist,setGridList]=useState(true);
const [dataStarships, setDataStarships]=useState(null);



useEffect(()=>{
    async function fetcher(){
        try {
          const temp=await axios.get('https://swapi.dev/api/starships')
               console.log(temp);
               setDataStarships(temp);
          
        } catch (error) {
          console.log("Cant fetch Planet data");
          
        }
      
      }
      fetcher();


},[]);;

const starships=[


  { key:"CR90 corvette",value:"https://static1.squarespace.com/static/5e14e3a8c895b10e847cbadf/t/5e84b07426282751211320f5/1585754243355/2c302579166ea019b3a8a8b952041fec.jpg?format=1500w"},
  { key:"Star Destroyer",value:"https://www.brickfinder.net/wp-content/uploads/2019/08/LEGO-Star-Wars-Imperial-Star-Destroyer.jpg"},
  { key:"Sentinel-class landing craft",value:"https://fractalsponge.net/wp/wp-content/uploads/2022/02/sentinel2-1920x1080.jpg"},
  { key:"Death Star",value:"https://lumiere-a.akamaihd.net/v1/images/611bc1cb1edf660001797f4b-image_a7334b50.jpeg?region=0%2C48%2C1536%2C768"},
  { key: "Millennium Falcon",value:"https://lumiere-a.akamaihd.net/v1/images/millennium-falcon-main-tlj-a_7cf89d3a.jpeg?region=0%2C0%2C1280%2C640"},
  { key:"Y-wing",value:"https://lumiere-a.akamaihd.net/v1/images/Y-Wing-Fighter_0e78c9ae.jpeg?region=0%2C24%2C1536%2C768"},
  { key:"X-wing",value:"https://static.wikia.nocookie.net/starwars/images/5/5e/Resistance_X-wing_SWCT.png/revision/latest?cb=20181015050749"},
  { key:"TIE Advanced x1",value:"https://static.wikia.nocookie.net/starwars/images/1/1d/Vader_TIEAdvanced_SWB.png/revision/latest?cb=20160915042032"},
  { key:"Executor",value:"https://oyster.ignimgs.com/mediawiki/apis.ign.com/star-wars-episode-7/3/34/13726900054278.jpg"},
  { key:"Rebel transport",value:"https://external-preview.redd.it/A2lpCEKxYSNqsgaHHjz9TPYVWnAhrA1s64Ey6hCDmv8.jpg?auto=webp&s=1d0a97617b39c6adcbdf34d55c76fe600e1d6d12"}
]
    function changer(){
      setGridList(true);
    }
    function changer2(){
      setGridList(false);
    }
// console.log(planets[0])

if (!dataStarships) {
  // Loading state while data is being fetched
  return <div>

<Box sx={{ display: 'flex' }}>
    <CircularProgress color="success" />
  </Box>

  </div>;
}
//   console.log(dataPlanets.data.results)
  var newPlanetData=dataStarships.data.results;


 newPlanetData= newPlanetData.map((item,index)=>({

...item,"images":starships[index].value
  }))
console.log(newPlanetData);
  return (
    <>
 <div className='grid_main'>

 <div className='grid_heading'>
<div className='grid_heading_name'>StarShips</div>

<div> 
    <button onClick={changer}>Grid</button>
    <button onClick={changer2}>List</button>
    </div>
 </div>
 <div className='grid_card_container'>

{gridlist ? newPlanetData.map((item)=>(
    <div className='gridcard_main'>
<div className='gridcard_poster'>

<img alt={item.name}className='gridcard_img' src={item.images}/>

</div>
<div className='gridcard_name'>
    <div className='gridcard_name_left'>{item.name}</div>
    <div className='gridcard_name_dropdown'>
   <Dot   props={item}/> 
    </div>
    </div>
</div>
)):<StarshipsList  items={newPlanetData}/>}
 </div>
 </div>

    </>
  )
}