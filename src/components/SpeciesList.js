import React from 'react';
import Dot from './Dot';
const List = ( items ) => {

const data2 = items.items
console.log(data2)
  return (
   <>
{/* <div className='added_new'>
<div className='list_movie'>Movie Name</div>
    <div className='list_director'>Director</div>
    <div className='list_date'>Release</div>
    <div className='list_button'>Options</div>
</div> */}

<div  className='list_main'>
{data2.map((item)=>(
    
      <div className='list_container'>
    <div className='list_movie'>{item.name}</div>
    <div className='list_director'>{item.average_lifespan}</div>
    <div className='list_date'>{item.classification}</div>
    <div className='list_button'><Dot props={item}/></div>
</div>



))}
</div>
      
   </>
  );
};

export default List;