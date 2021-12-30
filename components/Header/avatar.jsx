/* eslint-disable react-hooks/rules-of-hooks */
import React, {useState} from 'react'
import Image from 'next/image';
import Avatar from '@mui/material/Avatar';
import Styles from '../../styles/about.module.css'
import { Button } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {
  Search,
  SearchIconWrapper,
  StyledInputBase
} from '../../util/search';

export default function avatar({title, subtitle, avatar}) {

    const [anchorEl, setAnchorEl] = useState(false);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        console.log('event', Boolean(anchorEl))
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <div className={Styles.avatar}>
            <Search>
                <SearchIconWrapper>
                    <Image 
                        alt="imagen"
                        src={"/buscar.png"}
                        width={20}
                        height={20}
                        className={Styles.busc}
                    />
                </SearchIconWrapper>
                <StyledInputBase/>
            </Search>
            <Avatar alt="Remy Sharp" src={avatar}/>
            <div className={Styles.avatarInformation}>
                <p> {title} </p>
                <p> {subtitle} </p>
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
    )
}