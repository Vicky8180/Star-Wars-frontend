import React, { useState, useEffect } from 'react'
import GridCard from './GridCard';
import List from './List';
import axios from 'axios'
import PeopleList from './PeopleList'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
export default function Grid() {

 
    const[gridlist,setGridList]=useState(true);
const [dataPeople,setDataPeople]=useState(null);
    useEffect(()=>{
      async function fetcher(){
          try {
            const temp=await axios.get('https://swapi.dev/api/people')
                 console.log(temp);
                 setDataPeople(temp);
            
          } catch (error) {
            console.log("Cant fetch Planet data");
            
          }
        
        }
        fetcher();
  
  
  },[]);

  const people=[
    
        {key:"Luke Skywalker",value:"https://variety.com/wp-content/uploads/2023/06/MCDSTWA_EC220.jpg?w=1000&h=563&crop=1"},
        {key:"C-3PO",value:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/star-wars-the-rise-of-skywalker-c-3po-1-1571736016.jpg"},
       {key:"R2-D2",value:"https://www.designboom.com/wp-content/uploads/2021/04/lego-r2-d2-star-wars-designboom-001.jpg"},
        {key:"Darth Vader",value:"https://miro.medium.com/v2/resize:fit:1400/1*sMRzxqyo6BQD4CE5VPaEMg.jpeg"},
       {key: "Leia Organa",value:"https://c4.wallpaperflare.com/wallpaper/1024/586/419/star-wars-carrie-fisher-leia-organa-1024x768-video-games-star-wars-hd-art-wallpaper-preview.jpg"},
       {key: "Owen Lars",value:"https://imgix.bustle.com/uploads/image/2022/3/22/9d5d72cc-318b-4f52-851a-f1f3d55c9013-uncle-owen-obi-wan.jpg?w=1200&h=630&fit=crop&crop=faces&fm=jpg"},
       {key: "Beru Whitesun lars",value:"https://lumiere-a.akamaihd.net/v1/images/beru-lars-main_fa680a4c.png?region=338%2C0%2C942%2C531"},
        {key:"R5-D4",value:"https://www.slashfilm.com/img/gallery/is-r5-d4-the-same-droid-from-star-wars-a-new-hope-an-investigation/l-intro-1678268003.jpg"},
        {key:"Biggs Darklighte",value:"https://static1.cbrimages.com/wordpress/wp-content/uploads/2021/03/biggs-and-Luke.jpg"},
        {key:"Obi-Wan Kenobi",value:"https://m.media-amazon.com/images/M/MV5BNjFiZTllM2ItMDBmMy00YjczLTgxMDktYmZhMWY4MDAyMjRlXkEyXkFqcGdeQXZ3ZXNsZXk@._V1_.jpg"},
        {key:"Anakin Skywalker",value:"https://images.squarespace-cdn.com/content/v1/5fbc4a62c2150e62cfcb09aa/1655632480169-0HBDLU23IVDGQOMUFT6N/anakin%2Bcover.jpg"},
        {key:"Wilhuff Tarkin",value:"https://oyster.ignimgs.com/mediawiki/apis.ign.com/star-wars-episode-7/b/bc/Wilhuff_tarkin_bio_pic.jpeg"},
        {key:"Chewbacca",value:"https://lumiere-a.akamaihd.net/v1/images/5e94826f7d7499000120d564-image_f9b9d30e.jpeg?region=0%2C48%2C1536%2C768"},
        {key:"Han Solo",value:"https://thefifthtrooper.com/wp-content/uploads/2021/11/Star-Wars-Han-Solo-Wallpaper-1024x768.jpg"},
       {key: "Greedo",value:"https://www.cnet.com/a/img/resize/a52e1fb6dae2773b3d98c752daa6a28627066c49/hub/2019/11/12/d8253cd2-87f8-414e-81b7-a174196c040a/greedo-1.jpg?auto=webp&fit=crop&height=675&width=1200"},
        {key:"Jabba Desilijic Tiure",value:"https://e1.pxfuel.com/desktop-wallpaper/816/911/desktop-wallpaper-jabba-desilijic-tiure-jabba-the-hutt.jpg"},
        {key:"Wedge Antilles",value:"https://cdn.images.express.co.uk/img/dynamic/36/750x445/1220243.jpg"},
       {key: "Jek Tono Porkins",value:"https://preview.redd.it/kfvbjz2ootu41.jpg?auto=webp&s=f40bac57d6f282722ad7899a538ab96fd0ce0dbb"},
       {key: "Yoda",value:"https://nationaltoday.com/wp-content/uploads/2020/05/Yoda-1200x834.jpg"},
       {key: "Palpatine",value:"https://assetsio.reedpopcdn.com/DUK1LQmV4AAHgoo.jpg?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp"},
        {key:"Boba Fett",value:"https://www.themarysue.com/wp-content/uploads/2023/03/Temuera-Morrison-Boba-Fett-The-Book-of-Boba-Fett.jpg"},
       {key: "IG-88",value:"https://thefifthtrooper.com/wp-content/uploads/2022/11/ryan_valle_ig_88_02_by_bangjang96_ddom51u-pre.jpg"},
       {key:"Bossk",value:"https://media.contentapi.ea.com/content/dam/swgoh/news-articles/bossk-1.jpg.adapt.crop16x9.575p.jpg"},
       {key: "Lando Calrissian",value:"https://i.guim.co.uk/img/media/04e3c28dd867ef02c4ccc222c2bb90091c73df6f/0_137_4200_2520/master/4200.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=8ae8cf134b5bfba6955ad8c7ebf88317"},
       {key: "Lobot",value:"https://lumiere-a.akamaihd.net/v1/images/databank_lobot_01_169_8a50d7ae.jpeg"},
       {key: "Ackbar",value:"https://sportshub.cbsistatic.com/i/2021/03/15/26f8ef4c-c020-4d07-8797-25546b98b764/admiral-ackbar-return-of-the-jedi-153580.jpg"},
        {key:"Mon Mothma",value:"https://static.onecms.io/wp-content/uploads/sites/6/2016/06/star-wars-rogue-one-000et_0.jpg"},
        {key:"Arvel Crynyd",value:"https://static.wikia.nocookie.net/starwars/images/d/de/Arvel-crynyd.jpg/revision/latest?cb=20120113223349"},
        {key:"Wicket Systri Warrick",value:"https://static.wikia.nocookie.net/starwars/images/4/41/Wicket-TROS.png/revision/latest?cb=20200317055300"},
       {key: "Nien Nunb",value:"https://images.immediate.co.uk/production/volatile/sites/3/2020/01/Screen-Shot-2020-01-11-at-12.52.38-f33ecaf.png"},
       {key: "Qui-Gon Jinn",value:"https://www.denofgeek.com/wp-content/uploads/2022/04/star-wars-qui-gon-jinn-liam-neeson.jpg?fit=1536%2C864"},
        {key:"Nute Gunray",value:"https://i.redd.it/qapf3nhq2wp01.jpg"},
        {key:"Finis Valorum",value:"https://static1.srcdn.com/wordpress/wp-content/uploads/2022/08/Andor-Tay-Kolma.jpg"},
       {key: "Padmé Amidala",value:"https://lumiere-a.akamaihd.net/v1/images/Padme-Amidala_05d50c8a.jpeg?region=0%2C0%2C1536%2C864"},
       {key: "Jar Jar Binks",value:"https://lumiere-a.akamaihd.net/v1/images/databank_jarjarbinks_01_169_c70767ab.jpeg?region=0%2C0%2C1560%2C780"},
       {key: "Roos Tarpals",value:"https://lumiere-a.akamaihd.net/v1/images/databank_generaltarpals_01_169_cb2134d2.jpeg"},
       {key: "Rugor Nass",value:"https://medias.spotern.com/spots/w640/60/60361-1532336916.jpg"},
       {key: "Ric Olié",value:"https://lumiere-a.akamaihd.net/v1/images/databank_ricolie_01_169_f175f81b.jpeg?region=0%2C49%2C1560%2C780"},
       {key: "Watto",value:"https://res.cloudinary.com/sagacity/image/upload/c_crop,h_2048,w_3072,x_0,y_0/c_limit,dpr_auto,f_auto,fl_lossy,q_80,w_1200/JTEHYN_zanxoi.jpg"},
      {key:  "Sebulba",value:"https://static1.srcdn.com/wordpress/wp-content/uploads/2022/04/LEGO-Star-Wars-How-To-Unlock-Sebulba-Sacred-Textbooks-Guide.jpg"}
    
    
    ]

if (!dataPeople) {
  // Loading state while data is being fetched
  return <>
<Box sx={{ display: 'flex' }}>
      <CircularProgress />
    </Box>
  </>

  
}

// const arr2=props.props
    function changer(){
      setGridList(true);
    }
    function changer2(){
      setGridList(false);
    }

    var newPlanetData=dataPeople.data.results;

    newPlanetData= newPlanetData.map((item,index)=>({

      ...item,"images":people[index].value
        }))
  return (
    <>
 <div className='grid_main'>

 <div className='grid_heading'>
<div className='grid_heading_name'>Film</div>

<div> 
    <button onClick={changer}>Grid</button>
    <button onClick={changer2}>List</button>
    </div>
 </div>
 <div className='grid_card_container'>

{gridlist ? newPlanetData.map((item)=><GridCard props={item}/>):<PeopleList  items={newPlanetData}/>}
 </div>
 </div>



    </>
  )
}
