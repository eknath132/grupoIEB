/* eslint-disable react-hooks/rules-of-hooks */
import React, {useState} from 'react'
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Image from 'next/image';
import Avatar from '@mui/material/Avatar';
import Styles from '../../styles/about.module.css'
import informacion from './informacion';
import { Button } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: '#fff3f3',
  '&:hover': {
    backgroundColor: '#fff3f3',
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '0.5ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

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