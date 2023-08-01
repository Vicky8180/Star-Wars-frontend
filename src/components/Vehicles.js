
import React, { useState, useEffect } from 'react'
import List from './List';
import axios from 'axios'
import Dot from './Dot'
import VehiclesList from './VehiclesList'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
export default function Planet() {

    const arr=["a","b","c","h","o"];
    const[gridlist,setGridList]=useState(true);
const [dataVehicles, setDataVehicles]=useState(null);


useEffect(()=>{
    async function fetcher(){
        try {
          const temp=await axios.get('https://swapi.dev/api/vehicles')
               console.log(temp);
               setDataVehicles(temp);
          
        } catch (error) {
          console.log("Cant fetch Planet data");
          
        }
      
      }
      fetcher();


},[]);

const vehicles=[

  {key:"Sand Crawler",value:"https://static.wikia.nocookie.net/starwars/images/f/ff/Sandcrawler.png/revision/latest?cb=20130812001443"},
  {key:"T-16 skyhopper",value:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ab940dbf-6b1c-43d5-9e49-aa8736340b2d/dclh32o-d561b1e3-0522-47df-9973-07d7a45faa61.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2FiOTQwZGJmLTZiMWMtNDNkNS05ZTQ5LWFhODczNjM0MGIyZFwvZGNsaDMyby1kNTYxYjFlMy0wNTIyLTQ3ZGYtOTk3My0wN2Q3YTQ1ZmFhNjEuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.BWcsYZBwFbHRmsHFeEkk1sfunOCRtkz-0qfgnILPFTU"},
  {key:"X-34 landspeeder",value:"https://cdnb.artstation.com/p/assets/images/images/040/894/903/large/andrey-strepetov-fin22223333.jpg?1630177016"},
  {key:"TIE/LN starfighter",value:"https://us.v-cdn.net/5021068/uploads/editor/cs/kb6uqwzqvpyi.jpg"},
  {key:"Snowspeeder",value:"https://static.wikia.nocookie.net/starwars/images/4/44/T-47_Speeder_DICE.png/revision/latest?cb=20230723013701"},
  {key:"TIE bomber",value:"https://lumiere-a.akamaihd.net/v1/images/tie-bomber-1-retina_d3ea46d8.jpeg?region=0%2C0%2C1200%2C675"},
  {key:"AT-AT",value:"https://oyster.ignimgs.com/mediawiki/apis.ign.com/star-wars-episode-7/7/76/Atat.jpg?width=1280"},
  {key:"AT-ST",value:"https://lumiere-a.akamaihd.net/v1/images/AT-ST-gallery-1_85c9da66.jpeg?region=101%2C0%2C1078%2C539"},
  {key:"Storm IV Twin-Pod cloud car",value:"https://i.pinimg.com/1200x/71/b8/26/71b8262fa8e6e4814e2dd114b1457f56.jpg"},
  {key:"Sail barge",value:"https://cdn.geekwire.com/wp-content/uploads/2018/04/E2596AT60_Jabba_Sail_Barge_1-630x360.jpg"}
]  


    function changer(){
      setGridList(true);
    }
    function changer2(){
      setGridList(false);
    }
// console.log(planets[0])

if (!dataVehicles) {
    // Loading state while data is being fetched
    return <div>

<Box sx={{ display: 'flex' }}>
      <CircularProgress />
    </Box>

    </div>;
  }
//   console.log(dataPlanets.data.results)
  var newPlanetData=dataVehicles.data.results;


 newPlanetData= newPlanetData.map((item,index)=>({

...item,"images":vehicles[index].value
  }))
console.log(newPlanetData);
  return (
    <>
 <div className='grid_main'>

 <div className='grid_heading'>
<div className='grid_heading_name'>Vehicles</div>

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
)):<VehiclesList  items={newPlanetData}/>}
 </div>
 </div>

    </>
  )
}