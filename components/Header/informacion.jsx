/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react-hooks/rules-of-hooks */
import React, {useState} from 'react'
import Image from 'next/image';
import Avatar from '@mui/material/Avatar';
import style from '../../styles/informacion.module.css'
import { Button } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {Search, SearchIconWrapper, StyledInputBase} from '../../util/search';
import Icon from '@mui/material/Icon';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const informacion = ({title, name, subtitle, active, avatar}) => {
    const [anchorEl, setAnchorEl] = useState(false);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <div className='row'>
            <div className={'col-xs-12 col-md-6'}>
                <h3 className={style.title}> {title} </h3>
                <p className={style.name}> {name} </p>
            </div>
            <div className='col-sm-12 col-md-6 d-flex justify-content-end align-items-center'>
                <Search >
                    <SearchIconWrapper>
                        <Icon style={{root: {textAlign:'center'}, fontSize:'40px', padding:'10px', marginTop:'10px', marginLeft:'auto'}}>
                            <img style={{height:'100%', marginTop:'-55px', marginLeft:'2px'}} src="/lupa.svg"/>
                        </Icon>
                    </SearchIconWrapper>
                    <StyledInputBase/>
                </Search>
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
                    style={{marginLeft:'-85px', marginTop:'10px'}}
                >
                    <MenuItem onClick={handleClose}>Perfil</MenuItem>
                    <MenuItem onClick={handleClose}>Cerrar Sesión</MenuItem>
                </Menu>
            </div>
        </div>
    )
}

export default informacion;