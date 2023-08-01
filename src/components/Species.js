
import React, { useState, useEffect } from 'react'
import List from './List';
import axios from 'axios'
import Dot from './Dot'
import SpeciesList from "./SpeciesList"
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
export default function Species() {

    const[gridlist,setGridList]=useState(true);
const [dataSpecies, setDataSpecies]=useState(null);

useEffect(()=>{
    async function fetcher(){
        try {
          const temp=await axios.get('https://swapi.dev/api/species')
            //    console.log(temp);
               setDataSpecies(temp);
          
        } catch (error) {
          console.log("Cant fetch Planet data");
          
        }
      
      }
      fetcher();


},[]);;


const species=[


  {key:"Human",value:"https://images.hindustantimes.com/tech/rf/image_size_960x540/HT/p2/2020/01/07/Pictures/_881d2a34-311b-11ea-866e-f0adb255fbdd.jpg"},
  {key:"Droid",value:"https://images2.minutemediacdn.com/image/fetch/https%3A%2F%2Fdorksideoftheforce.com%2Ffiles%2F2023%2F04%2FAhsoka_online_trailer_uhd_r709f_stills_230329.088673.jpg"},
  {key:"Wookie",value:"https://static0.gamerantimages.com/wordpress/wp-content/uploads/2022/12/wookies-main.jpeg"},
  {key:"Rodian",value:"https://i.ytimg.com/vi/62dyq0d5JtE/maxresdefault.jpg"},
  {key:"Hutt",value:"https://screenrant.com/wp-content/uploads/2022/01/The-Hutt-Twins-in-Book-of-Boba-Fett-Star-Wars.jpg"},
  {key:"Yoda's species",value:"https://images.squarespace-cdn.com/content/v1/5fbc4a62c2150e62cfcb09aa/1613782033419-NKUTZM5RCMSN5KGA7QSB/Grogu.jpg"},
  {key:"Trandoshan",value:"https://lumiere-a.akamaihd.net/v1/images/trandoshian-main_19804be7.jpeg?region=0%2C67%2C1280%2C720"},
  {key:"Mon Calamari",value:"https://www.looper.com/img/gallery/star-wars-the-mon-calamari-explained/intro-1605299609.jpg"},
  {key:"Ewok",value:"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2020%2F06%2F11%2FEwok.jpg"},
  {key:"Sullustan",value:"https://i.redd.it/qyc6zfraqen11.png"}


]
    function changer(){
      setGridList(true);
    }
    function changer2(){
      setGridList(false);
    }


if (!dataSpecies) {
    // Loading state while data is being fetched
    return <div>

<Box sx={{ display: 'flex' }}>
      <CircularProgress />
    </Box>

    </div>;
  }
//   console.log(dataPlanets.data.results)
  var newPlanetData=dataSpecies.data.results;

  newPlanetData= newPlanetData.map((item,index)=>({

    ...item,"images":species[index].value
      }))

  return (
    <>
 <div className='grid_main'>

 <div className='grid_heading'>
<div className='grid_heading_name'>Species</div>

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
)):<SpeciesList  items={newPlanetData}/>}
 </div>
 </div>

    </>
  )
}