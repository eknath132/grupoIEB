/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react-hooks/rules-of-hooks */
import React, {useState,useRef} from 'react'
import Avatar from '@mui/material/Avatar';
import style from '../../styles/informacion.module.css'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {Search, SearchIconWrapper, SearchIconWrapperClose, StyledInputBase} from '../../util/search';
import Icon from '@mui/material/Icon';
import Switch from '@mui/material/Switch';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import ButtonGroup from '@mui/material/ButtonGroup';
import { Divider } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

const informacion = ({title, name, subtitle, active, avatar, drawerShow}) => {

    const [anchorEl, setAnchorEl] = useState(false);
    const [close, setClose] = useState(false)
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };


    const handleClose = () => {
        setAnchorEl(null);
    };

    const handdleCambiarLight = () => {
        const lStorage = localStorage.getItem('darkMode');
        if(lStorage === 'dark-body') {
            document.querySelector('body').classList.remove('dark-body')
            document.querySelector('body').classList.toggle('light-body')
        }
        localStorage.setItem('darkMode', 'light-body' )
    }

    const handdleCambiarDark = () => {
        const lStorage = localStorage.getItem('darkMode');
        if(lStorage === 'light-body') {
            document.querySelector('body').classList.remove('light-body')
            document.querySelector('body').classList.toggle('dark-body')
        }
        localStorage.setItem('darkMode', 'dark-body' )
    }

    return (
        <div className='row'>
            <div className={'col-xs-12 col-md-6'} style={{background:'var(--theme-background)', zIndex:'2'}}>
                <h3 className={style.title}> {title} </h3>
                <p className={style.name}> {name} </p>
            </div>
            <div className='col-sm-12 col-md-6 d-flex justify-content-end align-items-center'>
                {/* <Search>
                    <SearchIconWrapper>
                        <Icon style={{root: {textAlign:'center'}, fontSize:'60px', padding:'4px 10px 10px 10px', marginTop:'10px', marginLeft:'-15px'}}>
                            <img style={{height:'50%', marginTop:'-55px', marginLeft:'2px'}} src="/lupa.svg"/>
                        </Icon>
                    </SearchIconWrapper>
                    <StyledInputBase onClick={()=> setClose(true)}/>
                </Search> */}
                {/* <Switch checked={false} onClick={() => handdleCambiar()}/> */}
                {/* <ButtonGroup variant="contained" aria-label="outlined primary button group">
                    <Button onClick={() => handdleCambiarDark()}>Dark</Button>
                    <Button onClick={() => handdleCambiarLight()}>Light</Button>
                </ButtonGroup> */}
                <CalendarTodayIcon sx={{cursor:'pointer'}} fontSize='large'/>
                <NotificationsIcon sx={{marginLeft:'10px', cursor:'pointer'}} fontSize='large' onClick={() => drawerShow()}/>
                <Avatar alt="Remy Sharp" src={avatar} sx={{margin:'0 10px'}}/>
                <div>
                    <p className={style.subtitle}> {subtitle} </p>
                    <p className={style.active}> {active} </p>
                </div>
                <KeyboardArrowDownIcon className={style.arrowDown} onClick={handleClick} sx={{cursor:'pointer'}}/>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                    'aria-labelledby': 'basic-button',
                    }}
                    style={{marginLeft:'-30px', marginTop:'12px'}}
                >
                    <MenuItem onClick={handleClose}>Mi cuenta</MenuItem>
                    <MenuItem onClick={handleClose}>Configuración</MenuItem>
                    <MenuItem onClick={handleClose}>Documentación</MenuItem>
                    <Divider/>
                    <MenuItem onClick={handleClose}>
                        Cerrar Sesión
                        <Icon style={{root: {textAlign:'center'}, fontSize:'20px', borderRadius:'13px', marginLeft:'20px', }}>
                            <img style={{height:'100%', marginTop:'-17px', marginLeft:'3px'}} src="/Out.svg"/>
                        </Icon>
                    </MenuItem>
                </Menu>
            </div>
        </div>
    )
}

export default informacion;