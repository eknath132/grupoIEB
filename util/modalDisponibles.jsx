/* eslint-disable react-hooks/rules-of-hooks */
import {useState} from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Avatar from '@mui/material/Avatar';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import SelectInput from './selectInput';
import Table from '../components/Disponibles/tableModal';
import TableTenencia from '../components/Tenencia/tableModal';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import {styled } from '@mui/material/styles';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import ContactPageOutlinedIcon from '@mui/icons-material/ContactPageOutlined';

const CssAccordion = styled(Accordion)({
    boxShadow:'none',
    marginTop: '-10px !important',
    '&:: before':{
        background:'none'
    }
});

const style = {
    position: 'absolute',
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

const modal = ({
    title,
    handleClose,
    valueInmediato,
    handdleInmediato,
    orderOne,
    orderTwo
}) => {
    const [showList, setShowList] = useState(true);
    const [showDocumentation, setShowDocumentation] = useState(true);
    const [anchorEl, setAnchorEl] = useState(false);
    const [close, setClose] = useState(false)
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const sswitch = () => {
        setShowList(showList ? false : true);
    };

    const handdleShowDocumentation = () => {
        setShowDocumentation(showDocumentation ? false : true);
    }

    const handdleCloseMenu = () => {
        setAnchorEl(null);
    }
    return (
        <Modal
            open={true}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <div className='row' >
                    <div className='col-md-6'>
                        <div className="d-flex" style={{zIndex:'3'}}>
                            <Avatar alt="Remy Sharp" src={''} sx={{margin:'0 10px', width:'90px', height:'90px'}}/>
                            <div className='d-flex align-items-center'>
                                <div className=''>
                                    <p style={{margin:0, fontSize:'14px', fontWeight:'bold'}}> Cliente 1 </p>
                                    <p style={{margin:0, fontSize:'12px'}}> Comitente </p>
                                    <p style={{margin:0, fontSize:'12px'}}> Tipo de Perfil </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6 d-flex justify-content-end align-items-end' style={{zIndex:'3'}}>
                        <PrintIcon sx={{cursor:'pointer'}}/>
                        <ShareIcon onClick={handleClick} sx={{cursor:'pointer'}}/>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handdleCloseMenu}
                            MenuListProps={{
                            'aria-labelledby': 'basic-button',
                            }}
                            style={{marginTop:'12px', width:'80px', marginLeft:'-10px'}}
                        >
                            <MenuItem onClick={handdleCloseMenu} style={{paddingLeft:'12px'}}>
                                <EmailOutlinedIcon/>
                            </MenuItem>
                            <MenuItem onClick={handdleCloseMenu} style={{paddingLeft:'12px'}}>
                                <ContactPageOutlinedIcon/>
                            </MenuItem>
                        </Menu>
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <div style={{width:'100%', borderTop: '1px solid black', marginTop:'20px'}}/>
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <div className='d-flex' style={{margin:'10px 0', background:'#fff'}}>
                            <p style={{marginRight:'10px'}}>DISPONIBLE</p>
                            <SelectInput
                                minWidth= {120} 
                                marginTop= {'-5px'}
                                label= "Productor"
                                options= {[ 
                                    {
                                        value: 'Productor1',
                                        label:'Productor1'
                                    },
                                    {
                                        value: 'Productor2',
                                        label:'Productor2'
                                    },
                                    {
                                        value: 'Productor3',
                                        label:'Productor3'
                                    },

                                ]}
                                modal
                                value={valueInmediato}
                                change={handdleInmediato}
                            />
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className='d-flex' style={{marginBottom:'20px', background:'#fff'}}>
                            <div  className='d-flex align-items-center justify-content-between' style={{border:'1px solid black', height:'40px',width:'100px', borderRadius:'10px', padding:'10px', marginRight:'5px', background:'#fff'}}>
                                <div> 
                                    <div style={{fontSize:'12px'}}>
                                        Peso
                                    </div>
                                </div>
                                <div style={{fontSize:'12px'}}> 
                                    232
                                </div>
                            </div>
                            <div  className='d-flex align-items-center justify-content-between' style={{border:'1px solid black', height:'40px',width:'100px', borderRadius:'10px', padding:'10px', marginRight:'5px', background:'#fff'}}>
                                <div> 
                                    <div style={{fontSize:'12px'}}>
                                        Peso
                                    </div>
                                </div>
                                <div style={{fontSize:'12px'}}> 
                                    232
                                </div>
                            </div>
                            <div  className='d-flex align-items-center justify-content-between' style={{border:'1px solid black', height:'40px',width:'100px', borderRadius:'10px', padding:'10px', marginRight:'5px', background:'#fff'}}>
                                <div> 
                                    <div style={{fontSize:'12px'}}>
                                        Peso
                                    </div>
                                </div>
                                <div style={{fontSize:'12px'}}> 
                                    232
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{display:'flex', flexFlow:'row wrap'}}>
                        <CssAccordion style={{boxShadow:'none', order:orderOne, width:'100%'}}>
                            <AccordionSummary
                                style={{cursor:'default', paddingLeft:'0'}}
                                onClick={sswitch}
                            >
                                <div onClick={sswitch} style={{cursor:'pointer'}}>
                                    Ultimas operaciones
                                </div>
                                {
                                    showList 
                                    ? <KeyboardArrowUpIcon className={style.arrowUpDisponible} onClick={sswitch} sx={{cursor:'pointer'}} />
                                    : <KeyboardArrowDownIcon className={style.arrowUpDisponible} onClick={sswitch} sx={{cursor:'pointer'}} />
                                }
                            </AccordionSummary>
                            <AccordionDetails style={{paddingLeft:'0'}}>
                                <div className='d-flex' style={{marginBottom:'20px'}}>
                                    <div  className='d-flex align-items-center justify-content-between' style={{border:'1px solid black', height:'30px',width:'100px', borderRadius:'10px', padding:'10px', marginRight:'5px'}}>
                                        <div> 
                                            <div style={{fontSize:'12px', lineHeight:'10px'}}>
                                                Todos los instrumentos
                                            </div>
                                        </div>
                                    </div>
                                    <div  className='d-flex align-items-center justify-content-between' style={{border:'1px solid black', height:'30px', borderRadius:'10px', padding:'10px', marginRight:'5px'}}>
                                        <div> 
                                            <div style={{fontSize:'12px'}}>
                                                Bonos
                                            </div>
                                        </div>
                                    </div>
                                    <div  className='d-flex align-items-center justify-content-between' style={{border:'1px solid black', height:'30px', borderRadius:'10px', padding:'10px', marginRight:'5px'}}>
                                        <div> 
                                            <div style={{fontSize:'12px'}}>
                                                Acciones
                                            </div>
                                        </div>
                                    </div>
                                    <div  className='d-flex align-items-center justify-content-between' style={{border:'1px solid black', height:'30px', borderRadius:'10px', padding:'10px', marginRight:'5px'}}>
                                        <div> 
                                            <div style={{fontSize:'12px'}}>
                                                Cauciones
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <Table/>
                                </div>
                            </AccordionDetails>
                        </CssAccordion>
                        <CssAccordion style={{boxShadow:'none', order:orderTwo, width:'100%'}}>
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
                                    <div className='col-md-6'>
                                        Estado
                                    </div>
                                </div>
                                <TableTenencia/>
                            </AccordionDetails>
                        </CssAccordion>
                    </div>
                    <div className='row'>
                        <div className='col-md-12 d-flex justify-content-end'>
                            <Button style={{color:'black', border:'1px solid black', borderRadius:'10px', fontSize:'10px', width:'100px'}}>
                                Ver más
                            </Button>
                        </div>
                    </div>
                </div>
            </Box>
        </Modal>
    )
}

export default modal;