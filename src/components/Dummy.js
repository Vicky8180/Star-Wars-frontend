import React from 'react'
import "./All.css"
export default function Dummy() {
  return (
    
    <>
        <div className='dummy_main'>
        <div className='dummy_img_main'><img alt="poster" className="dummy_img" src="https://media.contentapi.ea.com/content/dam/eacom/en-us/migrated-images/2016/11/news-article-images-star-wars-goh-splash.jpg.adapt.crop16x9.1023w.jpg"/></div>
            <div className='dummy_heading'>
                <h2>Welcome to Star Wars Dashboard</h2>
                {/* <h2>Dashboard</h2> */}
                <h5>Star Wars is an American epic space opera multimedia franchise created by George Lucas, which began with the eponymous 1977 film and quickly became a worldwide pop culture phenomenon.</h5>
            </div>
            {/* <button>Explor</button> */}
        </div>
        
    </>
  )
}
