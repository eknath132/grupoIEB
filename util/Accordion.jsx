import {useState} from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import {styled } from '@mui/material/styles';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const CssAccordion = styled(Accordion)({
    boxShadow:'none',
    marginTop: '-10px !important',
    '&:: before':{
        background:'none'
    }
});
const style = {
    top: '50%',
    left: '50%',
    overflowY:'scroll',
    '&:: -webkit-scrollbar': {
        width: '10px',
        color: 'black'
    },
    '&:: -webkit-scrollbar-thumb': {
        background:'#D2CBCF',
        borderRadius: '10px'
    },
    transform: 'translate(-50%, -50%)',
    width: 500,
    maxHeight: '90%',
    bgcolor: 'background.paper',
    borderRadius: 2,
    boxShadow: 24,
    p: 4,
};

const AccordionNew = ({title, subtitle}) => {

    const [showList, setShowList] = useState(true);
    const [showDocumentation, setShowDocumentation] = useState(true);

    const sswitch = () => {
        setShowList(showList ? false : true);
    };
    const handdleShowDocumentation = () => {
        setShowDocumentation(showDocumentation ? false : true);
    }

    return (
        <CssAccordion style={{boxShadow:'none', width:'100%'}}>
            <AccordionSummary
                style={{cursor:'default', paddingLeft:'0'}}
                onClick={handdleShowDocumentation}
            >
                <div onClick={handdleShowDocumentation}  style={{cursor:'pointer'}}>
                    Documentación
                </div>
                {
                    showDocumentation 
                    ? <KeyboardArrowUpIcon className={style.arrowUpDisponible} onClick={handdleShowDocumentation} sx={{cursor:'pointer'}} />
                    : <KeyboardArrowDownIcon className={style.arrowUpDisponible} onClick={handdleShowDocumentation} sx={{cursor:'pointer'}} />
                }
            </AccordionSummary>
            <AccordionDetails style={{paddingLeft:'0'}}>
                <div className='row'>
                    <div className='col-md-6'>
                        Documentación
                    </div>
                </div>
            </AccordionDetails>
        </CssAccordion>
    )
}

export default AccordionNew