import React, { useRef } from 'react'
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import { Button, OutlinedInput } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import VisibilityOutlinedIcon from '@mui/icons-material/Visibility';

import RightDrawer from './RightDrawer'

export default function Dot(props) {

    const [age, setAge] = React.useState('');

    // const handleChange = (event) => {
    //   setAge(event.target.value);

    //   var temp=event.target.value;
    //   if(temp==="toggleDrawer"){
    //     handleButtonClick();
    //   }
    // };
//  console.log(props.props)

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
      {/* <Select
         IconComponent={MoreVertIcon} 
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={age}
          // onChange={handleChange}
          autoWidth
          label="Age"
          input={<OutlinedInput />}
        >
          <MenuItem value="">
           
          </MenuItem>
           <RightDrawer ref={ref2}/>
          <button onClick={handleButtonClick}value="toggleDrawer">View</button>
          <MenuItem value={21}>Grid</MenuItem>
          <MenuItem value={22}>List</MenuItem>
          <MenuItem value={22}>Download</MenuItem>
        </Select> */}


        {/* <select>
          
          <option onClick={handleButtonClick} value="toggleDrawer">view</option>
          <option value={22}>view</option>
          <option>view</option>
        </select> */}
        <RightDrawer ref={ref2} props={data3}/>
        <button  className='dot_view'  onClick={handleButtonClick}>view</button>
        {/* <Button className='dot_view' variant="contained" endIcon={<VisibilityOutlinedIcon />}>
  view
</Button> */}
   </>
  )
}
