import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';

export const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: '40px',
    boxShadow: '0px 1px 10px 1px rgba(0, 0, 0, 0.08)',
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto'
    },
  }));
  
export const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 1),
    height: '100%',
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.up('sm')]: {
      '&:hover': {
        zIndex: '2',
        cursor: 'default',
      },
    },
  }));

  export const SearchIconWrapperClose = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 1),
    height: '100%',
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2,
    cursor:'pointer',
    background:'#fff'
    
  }));
  
  export const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    // background:'#fff',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      // background:'#fff'
      zIndex:1,
      [theme.breakpoints.up('sm')]: {
        width: '0.1ch',
        cursor: 'default',
        zIndex:'4',
        '&:focus': {
          width: '20ch',
          cursor: 'auto',
          zIndex: -1,
        },
      },
    },
  }));