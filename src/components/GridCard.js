import React from 'react'
import Dot from './Dot';
export default function GridCard(props) {

  const data=props.props
  const [age, setAge] = React.useState('');
console.log(data);
  const handleChange = (event) => {
    setAge(event.target.value);
  };



  return (
    <>
<div className='gridcard_main'>
<div className='gridcard_poster'>
<img alt={data.name} className='gridcard_img' src={data.images}/>
</div>
<div className='gridcard_name'>
    <div className='gridcard_name_left'>{data.name}</div>
    <div className='gridcard_name_dropdown'>
   <Dot   props={data}/>
      
       
    </div>
    </div>
</div>




    </>
  )
}




// export default function SelectAutoWidth() {
//   const [age, setAge] = React.useState('');

//   const handleChange = (event) => {
//     setAge(event.target.value);
//   };

//   return (
//     <div>
//       <FormControl sx={{ m: 1, minWidth: 80 }}>
//         <InputLabel id="demo-simple-select-autowidth-label">Age</InputLabel>
//         <Select
//           labelId="demo-simple-select-autowidth-label"
//           id="demo-simple-select-autowidth"
//           value={age}
//           onChange={handleChange}
//           autoWidth
//           label="Age"
//         >
//           <MenuItem value="">
//             <em>None</em>
//           </MenuItem>
//           <MenuItem value={10}>Twenty</MenuItem>
//           <MenuItem value={21}>Twenty one</MenuItem>
//           <MenuItem value={22}>Twenty one and a half</MenuItem>
//         </Select>
//       </FormControl>
//     </div>
//   );
// }