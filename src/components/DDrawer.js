import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Accodian from './Accordian';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

  const DDrawer=React.forwardRef((props,ref)=>{

  // const [state, setState] = React.useState(false);
  const [state2, setState2] = React.useState(false);
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });


  React.useImperativeHandle(ref, ()=>({
  
    toggleDrawer,
    temp,
  }))
  function temp(){
    setState2(true);

  }
  function tempClose(){
    setState2(false);

  }
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const accordionStyle = {
    backgroundColor: '#03123D', 
    color: '#FFFFFF'
  }
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  
  

  const list = (anchor) => (
    <Box className="dd"
      sx={{ width:anchor === 'top' || anchor === 'bottom' ? 'auto' :  300}}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >

    <div><button onClick={tempClose}> Cancel</button>



  <div className="accodian_main">
      
     
      <Accordion  style={accordionStyle} expanded={expanded === 'panel1' }  onChange={handleChange('panel1')}>
              <AccordionSummary style={accordionStyle}
                expandIcon={<ExpandMoreIcon /> }
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
           {/* <Icon><FolderOpenIcon/></Icon> */}
                <Typography >   Film</Typography>
              </AccordionSummary>
              <AccordionDetails>
             {/* <Typography onClick={changer4}>Film</Typography> */}
              </AccordionDetails>
            </Accordion>
            <Accordion style={accordionStyle} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
            
                <Typography>People</Typography>
              </AccordionSummary>
              <AccordionDetails>
              {/* <Typography onClick={changer}>People</Typography> */}
              </AccordionDetails>
            </Accordion> 
            <Accordion  style={accordionStyle} expanded={expanded === 'panel3'} onChange={handleChange('panel3')} >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Planets</Typography>
              </AccordionSummary>
              <AccordionDetails>
              {/* <Typography onClick={changer2}>Planet</Typography> */}
              </AccordionDetails>
            </Accordion> 
            <Accordion style={accordionStyle} expanded={expanded === 'panel4'}  onChange={handleChange('panel4')}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Species</Typography>
              </AccordionSummary>
              <AccordionDetails>
              {/* <Typography onClick={changer3}>Species</Typography> */}
              </AccordionDetails>
            </Accordion>
             <Accordion style={accordionStyle}  expanded={expanded === 'panel5'} onChange={handleChange('panel5')} >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Starships</Typography>
              </AccordionSummary>
              <AccordionDetails>
              {/* <Typography onClick={changer5}>Starships</Typography> */}
              </AccordionDetails>
            </Accordion>
            <Accordion style={accordionStyle} expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>Vehicles</Typography>
              </AccordionSummary>
              <AccordionDetails>
              {/* <Typography onClick={changer6}>Vehicles</Typography> */}
              </AccordionDetails>
            </Accordion>
            
                </div>


  </div>
  
     
    </Box>
  );

  return (
    <div className='drawer_main'>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          {/* <Button onClick={toggleDrawer()}>{anchor}</Button> */}
          <Drawer 
            anchor={anchor}
            open={state2}
            onClose={toggleDrawer(anchor, false)}
          
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
})

export default DDrawer