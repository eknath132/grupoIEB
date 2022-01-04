/* eslint-disable react-hooks/rules-of-hooks */
import React, {useState} from 'react'
import Image from 'next/image';
import Avatar from '@mui/material/Avatar';
import style from '../../styles/informacion.module.css'
import { Button } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {Search, SearchIconWrapper, StyledInputBase} from '../../util/search';
import SearchIcon from '@mui/icons-material/Search';

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
                <Search>
                    <SearchIconWrapper>
                        <SearchIcon/>
                    </SearchIconWrapper>
                    <StyledInputBase/>
                </Search>
                <Avatar alt="Remy Sharp" src={avatar}/>
                <div>
                    <p className={style.subtitle}> {subtitle} </p>
                    <p className={style.active}> {active} </p>
                </div>
                <Button 
                    id="basic-button"
                    aria-controls="basic-menu"
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                > 
                    <Image src={'/flecha.png'} alt="flecha" width={20} height={20}/> 
                </Button>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                    'aria-labelledby': 'basic-button',
                    }}
                >
                    <MenuItem onClick={handleClose}>Perfil</MenuItem>
                    <MenuItem onClick={handleClose}>Cerrar Sesión</MenuItem>
                </Menu>
            </div>
        </div>
    )
}

export default informacion;