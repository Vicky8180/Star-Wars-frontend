import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';

  const DDrawer=React.forwardRef((props,ref)=>{

  const [state, setState] = React.useState(false);
  const [state2, setState2] = React.useState(false);



  React.useImperativeHandle(ref, ()=>({
  
    toggleDrawer,
    temp,
  }))
  function temp(){
    setState(true);

  }
  function tempClose(){
    setState(true);

  }
  const toggleDrawer = () => (event) => {
    // if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
    //   return;
    // }
    setState(true);
  };




  
  

  const list = (anchor) => (
    <Box className="dd"
      sx={{ width:anchor === 'top' || anchor === 'bottom' ? 'auto' :  300}}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >

    <div><button onClick={tempClose}> Cancel</button></div>
     
    </Box>
  );

  return (
    <div className='drawer_main'>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          {/* <Button onClick={toggleDrawer()}>{anchor}</Button> */}
          <Drawer 
            anchor={anchor}
            open={state}
            onClose={state2}
          
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
})

export default DDrawer