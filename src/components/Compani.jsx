import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Fade from '@mui/material/Fade';

export default function AccordionTransition() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpansion = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  return (
   <div className='flex flex-col sm:flex-row justify-between mt-[150px] p-[65px] bg-[#088269]'>
  <div className='mt-[110px] text-white text-3xl'>
    <h1>Информация о компании</h1>
  </div>
  <div className='w-[650px] h-[450px] mt-[110px] bg-[#088269] text-white'>
    <Accordion
      expanded={expanded}
      onChange={handleExpansion}
      slots={{ transition: Fade }}
      slotProps={{ transition: { timeout: 400 } }}
      sx={{ 
        '& .MuiAccordion-region': { height: expanded ? 'auto' : 0 },
        '& .MuiAccordionDetails-root': { display: expanded ? 'block' : 'none' },
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        <Typography sx={{ backgroundColor: 'red.300' }}>Custom transition using Fade</Typography>
      </AccordionSummary>
      <AccordionDetails className='bg-[#088269] text-white'>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </Typography>
      </AccordionDetails>
    </Accordion>
     <Accordion
  className="responsive-accordion"
  sx={{
    '@media (max-width: 600px)': {
      '& .MuiAccordionSummary-content': {
        fontSize: '14px',
      },
    },
  }}
>
  <AccordionSummary
    expandIcon={<ArrowDropDownIcon />}
    aria-controls="panel2-content"
    id="panel2-header"
  >
    <Typography>Accordion 2</Typography>
  </AccordionSummary>
  <AccordionDetails>
    <Typography>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
      malesuada lacus ex, sit amet blandit leo lobortis eget.
    </Typography>
  </AccordionDetails>
</Accordion>
      <Accordion
  className="responsive-accordion"
  sx={{
    '@media (max-width: 600px)': {
      '& .MuiAccordionSummary-root': {
        paddingLeft: '16px',
      },
      '& .MuiAccordionDetails-root': {
        paddingLeft: '16px',
      },
    },
  }}
>
  <AccordionSummary expandIcon={<ArrowDropDownIcon />} id="panel-header" aria-controls="panel-content">
    Header
  </AccordionSummary>
  <AccordionDetails>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  </AccordionDetails>
</Accordion>
   
  </div>
</div>
  );
}