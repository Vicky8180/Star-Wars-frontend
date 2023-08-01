import React from 'react';
import Dot from './Dot';
const List = ( items ) => {

const data2 = items.items
console.log(data2)
  return (
   <>


<div  className='list_main'>
{data2.map((item)=>(
    
      <div className='list_container'>
    <div className='list_movie'>{item.name}</div>
    <div className='list_director'>{item.climate}</div>
    <div className='list_date'>{item.gravity}</div>
    <div className='list_button'><Dot props={item}/></div>
</div>



))}
</div>
      
   </>
  );
};

export default List;