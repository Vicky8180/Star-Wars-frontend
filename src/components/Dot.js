import React, { useRef } from 'react'


import RightDrawer from './RightDrawer'

export default function Dot(props) {

    const [age, setAge] = React.useState('')

const data3=props.props
   
    const ref2 = useRef();


  const handleButtonClick = () => {
    // Call the child component's function using the ref
    if (ref2.current) {
      ref2.current.toggleDrawer();
    }
  };


  return (
   <>
    
        <RightDrawer ref={ref2} props={data3}/>
        <button  className='dot_view'  onClick={handleButtonClick}>view</button>
       
   </>
  )
}
