import React, { useEffect, useState } from 'react';import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import '../style/ReadMore.css'; // Importieren Sie einen CSS-Style

function ReadMore() {



    return (


        <Accordion className='klappmenu'>

            <AccordionSummary

                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                className="klappmenu_head"
            >
                <h5>延伸閱讀</h5>

            </AccordionSummary>

            <AccordionDetails className='klappmenu_inhalte'>

            </AccordionDetails>

        </Accordion>



    );



}

export default ReadMore;


