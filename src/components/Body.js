import React, { useState } from 'react'
import "./All.css"
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Poster from './Poster'
import Accodian from './Accordian'
import Grid from './Grid'
// import Grid from './Grid'
import Dummy from './Dummy';
import Planet from './Planet';
import Films from './Films';
import Species from './Species';
import Vehicles from './Vehicles';
import Starships from './Starships';
import { Button } from '@mui/material';
export default function Body() {


  const[whatTodisplay, setWhatToDisplay]=useState('');
  const [expanded, setExpanded] = React.useState(false);
  function changer(){
    setWhatToDisplay('Grid');
  }
  function changer2(){
    setWhatToDisplay('Planets');
  }
  function changer3(){
    setWhatToDisplay('Species');
  }
  function changer4(){
    setWhatToDisplay('Films');
  }
  function changer5(){
    setWhatToDisplay('Starships');
  }
  function changer6(){
    setWhatToDisplay('Vehicles');
  }

        

  const accordionStyle = {
    backgroundColor: '#03123D', 
    color: '#FFFFFF'
  }
  function renderer(){

    switch(whatTodisplay){
      case 'Grid':
        return <Grid/>;
       case 'Dummy':
        return <Dummy/>;
      case 'Planets':
          return <Planet/>;
      case 'Starships':
          return <Starships/>;
      case 'Vehicles':
          return <Vehicles/>;
      case 'Films':
          return <Films/>
      case 'Species':
          return <Species/>;
    
       default:
        return <Dummy/> 
    }
  }
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className='body_main'>

      <div className="accodian_main">
      
     
<Accordion  style={accordionStyle} expanded={expanded === 'panel1' }  onChange={handleChange('panel1')}>
        <AccordionSummary style={accordionStyle}
          expandIcon={<ExpandMoreIcon /> }
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
     
          <Typography >Film</Typography>
        </AccordionSummary>
        <AccordionDetails>
       <Typography onClick={changer4}>Film</Typography>
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
        <Typography onClick={changer}>People</Typography>
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
        <Typography onClick={changer2}>Planet</Typography>
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
        <Typography onClick={changer3}>Species</Typography>
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
        <Typography onClick={changer5}>Starships</Typography>
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
        <Typography onClick={changer6}>Vehicles</Typography>
        </AccordionDetails>
      </Accordion>
      
          </div>

      <div className='poster_main'>
   

{renderer()}

    </div>
    </div>
  )
}
