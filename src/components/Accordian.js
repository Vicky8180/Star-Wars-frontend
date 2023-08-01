import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Poster from './Poster';
import Grid from './Grid'
import Dummy from './Dummy';
import Planet from './Planet';
import Films from './Films';
import Species from './Species';
import Vehicles from './Vehicles';
import Starships from './Starships';

export default function Accodian() {

  const [expanded, setExpanded] = React.useState(false);

 
        const childreftemp08=React.useRef();


        function changerParents(){

          childreftemp08.current.changer();
          
        }
       

    
    



       

  const accordionStyle = {
    backgroundColor: '#03123D', 
    color: '#FFFFFF'
  }
  return (
   
    <div className="accodian_main">
      
     


{/* <Poster ref={childreftemp08}/> */}
<button onClick={changerParents}>clicokl</button>

    </div>

  );
}











{/* <Accordion  style={accordionStyle} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary style={accordionStyle}
          expandIcon={<ExpandMoreIcon /> }
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
     
          <Typography >Film</Typography>
        </AccordionSummary>
        <AccordionDetails>
       
        </AccordionDetails>
      </Accordion>
      <Accordion style={accordionStyle} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
      
          <Typography onClick={changerParents2}>People</Typography>
        </AccordionSummary>
        <AccordionDetails>
        
        </AccordionDetails>
      </Accordion> 
      <Accordion  style={accordionStyle} expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Planets</Typography>
        </AccordionSummary>
        <AccordionDetails>
        
        </AccordionDetails>
      </Accordion> 
      <Accordion style={accordionStyle} expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Species</Typography>
        </AccordionSummary>
        <AccordionDetails>
      
        </AccordionDetails>
      </Accordion>
       <Accordion style={accordionStyle}  expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Starships</Typography>
        </AccordionSummary>
        <AccordionDetails>
    
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
      
        </AccordionDetails>
      </Accordion> */}






