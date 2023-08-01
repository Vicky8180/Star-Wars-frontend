
import React, { useState, useEffect } from 'react'
import List from './List';
import axios from 'axios'
import Dot from './Dot'
import PlanetList from './PlanetList';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
export default function Planet() {

    const arr=["a","b","c","h","o"];
    const[gridlist,setGridList]=useState(true);
const [dataPlanets, setDataPlanets]=useState(null);
const planets=[{

    key:"Tatooine", value:"https://lumiere-a.akamaihd.net/v1/images/open-uri20150608-27674-m6xfo_e2c4e766.jpeg?region=0%2C0%2C1200%2C587"},
   { key:"Alderaan", value:"https://lumiere-a.akamaihd.net/v1/images/royal-palace-of-alderaan-main_97f8abf2.jpeg?region=164%2C0%2C953%2C536" },
    {key:"Yavin IV", value:"https://lumiere-a.akamaihd.net/v1/images/databank_yavin4_01_169_b6945e20.jpeg?region=0%2C49%2C1560%2C780"},
    {key:"Hoth", value:"https://static0.gamerantimages.com/wordpress/wp-content/uploads/2021/06/walkers-on-hoth.jpg"},
    {key:"Dagobah", value:"https://static.wikia.nocookie.net/starwars/images/5/58/Dagobah_FDNP.png/revision/latest?cb=20160617233754"},
    {key:"Bespin", value:"https://static.wikia.nocookie.net/starwars/images/c/c3/MCQ-cloudcity.jpg/revision/latest?cb=20100514134205"},
    {key:"Endor", value:"https://preview.redd.it/1684rowp3ys31.jpg?auto=webp&s=1aae359f4a60e3f999ef45c686d8559fc882d4f5"},
    {key:"Naboo", value:"https://www.vacationer.travel/wp-content/uploads/2022/05/naboohed.jpg"},
    {key:"Coruscant", value:"https://imgix.ranker.com/list_img_v2/8651/3148651/original/3148651?w=817&h=427&fm=jpg&q=50&fit=crop"},
    {key:"Kamino", value:"https://i.redd.it/snfw92qa8sd61.png"}
]


useEffect(()=>{
    async function fetcher(){
        try {
          const temp=await axios.get('https://swapi.dev/api/planets')
               console.log(temp);
               setDataPlanets(temp);
          
        } catch (error) {
          console.log("Cant fetch Planet data");
          
        }
      
      }
      fetcher();


},[]);
    function changer(){
      setGridList(true);
    }
    function changer2(){
      setGridList(false);
    }
// console.log(planets[0])

if (!dataPlanets) {
    // Loading state while data is being fetched
   return <>
    <Box sx={{ display: 'flex' }}>
      <CircularProgress />
    </Box>
   </>

  
  }
//   console.log(dataPlanets.data.results)
  var newPlanetData=dataPlanets.data.results;


 newPlanetData= newPlanetData.map((item,index)=>({

...item,"images":planets[index].value
  }))
// console.log(newPlanetData);
  return (
    <>
 <div className='grid_main'>

 <div className='grid_heading'>
<div className='grid_heading_name'>Planets</div>

<div> 
    <button onClick={changer}>Grid</button>
    <button onClick={changer2}>List</button>
    </div>
 </div>
 <div className='grid_card_container'>

{gridlist ? newPlanetData.map((item)=>(
    <div className='gridcard_main'>
<div className='gridcard_poster'>

<img className='gridcard_img' src={item.images}/>

</div>
<div className='gridcard_name'>
    <div className='gridcard_name_left'>{item.name}</div>
    <div className='gridcard_name_dropdown'>
   <Dot   props={item}/> 
    </div>
    </div>
</div>
)):<PlanetList  items={newPlanetData}/>}
 </div>
 </div>

    </>
  )
}