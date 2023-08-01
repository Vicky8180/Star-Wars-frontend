import React, { forwardRef, useEffect, useImperativeHandle, useState } from 'react';
import './styles.css'; // Create a CSS file for styling the slide drawer

const SlideDrawer = forwardRef((props, ref)=>{

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
    console.log("Kk")
  };
const data4=props.props
console.log(data4)
   useImperativeHandle(ref,()=>({

toggleDrawer,
   }))

useEffect(()=>{

},[isDrawerOpen])

if(!data4){
    return null;
}
  return (
    <div className="container">
    
      <div className={`drawer ${isDrawerOpen ? 'open' : ''}`}>
        <div className='rightdrawer_main'>
              
            <button onClick={toggleDrawer}>Cancel</button>
           <div className='rightdrawer_container'>
<div   className='rightdrawer_image'>
    <img className='rightdrawer_image_holder' alt={data4.title} src={data4.images}/>
</div>
<div className='rightdrawer_name'>
{/* <h5>Title</h5> */}
{data4.title}

</div>
<div className='rightdrawer_title'>{data4.director}</div>
<div className='rightdrawer_release'>{data4.producer}</div>

           </div>
        
        </div>
      </div>
    </div>
  );
});

export default SlideDrawer;


