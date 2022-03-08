/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
import {useEffect} from 'react'
import Head from "next/head";
import Router from 'next/router'
import Link from "next/link";
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Hidden from '@mui/material/Hidden';
import Button from '@mui/material/Button';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Collapse from '@mui/material/Collapse';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Informacion from '../components/Header/informacion'
import Styles from '../styles/Home.module.css';
import ComponentALert from '../components/Principal/componentAlert'
import Avatar from '@mui/material/Avatar';
import Switch from '@mui/material/Switch';


import { styled, useTheme } from '@mui/material/styles';
import { useState } from "react";
import HomeIcon from '@mui/icons-material/Home';
import Icon from '@mui/material/Icon';

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

const drawerWidth = 190;
const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
      width: 150,
      flexShrink: 0,
      whiteSpace: 'nowrap',
      boxSizing: 'border-box',
      ...(open && {
        borderRadius:'0 0 50px 0',
        transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
        }),
    overflowX: 'hidden',
        '& .MuiDrawer-paper': openedMixin(theme),
      }),
      ...(!open && {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: `calc(${theme.spacing(4)} + 1px)`,
        borderRadius:'0 0 120px 0',
        [theme.breakpoints.up('sm')]: {
        },
        '& .MuiDrawer-paper': closedMixin(theme),
      }),
    }),
  );
  const openedMixin = (theme) => ({
    width: drawerWidth,
    background:'linear-gradient(153.08deg, rgba(114, 169, 143) 14.3%, rgba(67, 58, 63) 87.79%)',
    borderRadius:'0 0 50px 0',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
  });
  
  const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    background:'linear-gradient(153.08deg, rgba(114, 169, 143, 0.9) 14.3%, rgba(67, 58, 63, 0.9 ) 87.79%)',
    borderRadius:'0 0 50px 0',
    [theme.breakpoints.up('sm')]: {
      width: `calc(${theme.spacing(9)} + 1px)`,
    },
  });
  
  const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    // position:'absolute',
    // top:'0',

    justifyContent: 'flex-center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));

  const DrawerFooter = styled('div')(({ theme }) => ({
    display: 'flex',
    width:'100%',
    flexWrap:'wrap',
    alignItems: 'center',
    position:'absolute',
    bottom:'0',
    justifyContent: 'space-between',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));

//   const MenuAlert = styled(SwipeableDrawer)({
//     '& root':{
//         backgroundColor:' rgba(0,0,0,0.0)'
//     }
//   })
export default function layout({children, title, description}) {

    const theme = useTheme();
    const [open, setOpen] = useState(false);
    const [aparece, setAparece] = useState(false);
    const [stateDrawer, setStateDrawer]= useState(false);
    const [cursor, setCursor] = useState('default')
    const [dark, setDark] = useState('light-body')
    const [luz, setLuz] = useState(false)

    useEffect(() => {
    const storage = localStorage.getItem('darkMode');

        if(!storage) {
           return setDark('light-body')
        }
        if(storage){
            return setDark(storage === 'light-body' ? 'light-body' : 'dark-body')
        }

    }, [luz])

    console.log('dark', dark)
    
    const [hidden, setHidden] = useState(false)

    const toggleDrawer = (open) => (event) => {
        if (
          event &&
          event.type === 'keydown' &&
          (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        setHidden(open);

    }
    const handleDrawerOpen = () => {
        setOpen(true);
        setCursor('default')
    };
    const handleDrawerClose = (show) => {
        if(!show){
            return;
        }
        setOpen(false)
        setCursor('pointer')
    };
    const aparecer = () => {
        setAparece(aparece ? false : true)
    }

    const drawerShow = () => {
        setStateDrawer(stateDrawer ? false : true)
    }

    const handdleCambiarDark = () => {
        const lStorage = localStorage.getItem('darkMode');
        setLuz(luz ? false : true)
        if(lStorage === 'light-body' || !lStorage) {
            document.querySelector('body').classList.remove('light-body')
            document.querySelector('body').classList.toggle('dark-body')
            localStorage.setItem('darkMode', 'dark-body' )
        }
        if(lStorage === 'dark-body') {
            document.querySelector('body').classList.remove('dark-body')
            document.querySelector('body').classList.toggle('light-body')
            localStorage.setItem('darkMode', 'light-body' )
        }
    }

    return (
        <div className={`container-fluid`} style={{padding: '0 30px', height:'100%'}}>
            <Head>
                <title> {title} </title>
                <meta name="description" content={description}/>
            </Head>
            <Hidden mdUp={true}>
                <SwipeableDrawer
                    anchor={'left'}
                    open={hidden}
                    onClose={toggleDrawer(false)}
                    onOpen={toggleDrawer(true)}
                >
                    <ul>
                        
                        <li>
                            <HomeIcon/>
                        </li>
                        <li>
                            3
                        </li>
                        <li>
                            4
                        </li>
                        <li>
                            5
                        </li>
                    </ul>
                </SwipeableDrawer>
            </Hidden>
            
            <div className="row" style={{height:'100%'}}>
            {/* <nav className={`${styles.nav} col-md-12 col-lg-1`} >
                    <div className={styles.isMobileHeader}>
                        <div className={`${styles.logo} col-12`}> 
                            <Icon style={{root: {textAlign:'center'}, fontSize:'60px', background:'#FFF', borderRadius:'70px', padding:'10px', marginTop:'10px', marginLeft:'auto'}}>
                                <img style={{height:'100%', marginTop:'-55px', marginLeft:'2px'}} src="/principal.svg"/>
                            </Icon>
                        </div>
                        <div className={styles.cerrar} onClick={()=>setHidden(true)}> 
                            <MenuIcon/>
                        </div>
                    </div>
                    <div className={styles.isMobileBody}>
                        <ul className={ `${styles.ul} col-12`}>
                            <li className={styles.li}>
                                <Link href={"/productor/1"}>
                                    <a>
                                        <Icon style={{root: {textAlign:'center'}, fontSize:'45px', border:'2px solid #A7C9B9', borderRadius:'10px', padding:'10px', marginTop:'10px', marginLeft:'auto'}}>
                                            <img style={{height:'150%', marginTop:'-54px', marginLeft:'-2px'}} src="/campana.svg"/>
                                        </Icon>
                                    </a>
                                </Link>
                            </li>
                            <div style={{borderTop:'2px solid #FFF', marginTop:'5px'}}/>
                            <li className={styles.li}> 
                                <Link href={"/"}>
                                    <a>
                                        <Icon style={{root: {textAlign:'center'}, fontSize:'45px', background:'#646363', borderRadius:'13px', padding:'10px', marginTop:'10px', marginLeft:'auto'}}>
                                            <img style={{height:'100%', marginTop:'-52px', marginLeft:'-3px'}} src="/home.svg"/>
                                        </Icon>
                                        <p className={styles.nameNav}>
                                            Inicio
                                        </p>
                                    </a>
                                </Link> 
                            </li>
                            <li className={styles.li}> 
                                <Link href={"/tenencias"}>
                                    <a>
                                        <Icon style={{root: {textAlign:'center'}, fontSize:'45px', borderRadius:'13px', padding:'10px', marginLeft:'auto'}}>
                                            <img style={{height:'100%', marginTop:'-52px', marginLeft:'-3px'}} src="/tenencias.svg"/>
                                        </Icon>
                                        <p className={styles.nameNav}>
                                            Tenencias
                                        </p>
                                    </a>
                                </Link> 
                            </li>
                            <li className={styles.li}> 
                                <Link href={"/"}>
                                    <a>
                                        <Icon style={{root: {textAlign:'center'}, fontSize:'45px', borderRadius:'13px', padding:'10px', marginLeft:'auto'}}>
                                            <img style={{height:'100%', marginTop:'-52px', marginLeft:'-3px'}} src="/tenencias.svg"/>
                                        </Icon>
                                        <p className={styles.nameNav}>
                                            Mercados
                                        </p>
                                    </a>
                                </Link> 
                            </li>
                            <li className={styles.li}> 
                                <Link href={"/"}>
                                    <a>
                                        <Icon style={{root: {textAlign:'center'}, fontSize:'45px', borderRadius:'13px', padding:'10px', marginLeft:'auto'}}>
                                            <img style={{height:'100%', marginTop:'-52px', marginLeft:'-3px'}} src="/procesos.svg"/>
                                        </Icon>
                                        <p className={styles.nameNav}>
                                            Procesos
                                        </p>
                                    </a>
                                </Link> 
                            </li>
                            <li className={styles.li}> 
                                <Link href={"/"}>
                                    <a>
                                        <Icon style={{root: {textAlign:'center'}, fontSize:'45px', borderRadius:'13px', padding:'10px', marginLeft:'auto'}}>
                                            <img style={{height:'100%', marginTop:'-52px', marginLeft:'-3px'}} src="/reportes.svg"/>
                                        </Icon>
                                        <p className={styles.nameNav}>
                                            Reportes
                                        </p>
                                    </a>
                                </Link> 
                            </li>
                        </ul>
                        <div style={{marginTop: 'auto', width:'100%'}} className="d-flex justify-content-center">
                            <div className={styles.menuHelp} onClick={e => Router.push(item.url, item.url)}>
                                <Icon style={{root: {textAlign:'center'}, fontSize:'45px', borderRadius:'13px', padding:'10px', marginLeft:'auto'}}>
                                    <img style={{height:'100%', marginTop:'-52px', marginLeft:'-3px'}} src="/help.svg"/>
                                </Icon>
                            </div>
                        </div>
                    </div>
                </nav> */}
                <div className="col-sm-12 d-flex">
                    <Drawer variant="permanent" open={open} >
                        <div className='d-flex justify-content-center' style={{margin:'10px 0'}}>
                            <DrawerHeader>
                                <Avatar alt="Remy Sharp" src={''} sx={{margin:'0 10px', width:'60px', height:'60px'}}/>
                            </DrawerHeader>
                        </div>
                        <div className='d-flex justify-content-center'>
                            <Divider style={{width:'80%', color:'black'}}/> 
                        </div>
                        <List>
                            <ListItem button key={'1'} style={{borderRadius:'0 0 20px 0', background:'rgba(0,0,0,0.5)', padding:'0 20px'}}>
                                <ListItemIcon onClick={handleDrawerOpen}>
                                    <Icon style={{root: {textAlign:'center'}, fontSize:'40px', borderRadius:'13px', padding:'10px', marginTop:'10px'}}>
                                        <img style={{height:'100%', marginTop:'-50px', marginLeft:'-7px'}} src="/home.svg"/>
                                    </Icon>
                                </ListItemIcon>
                                <ListItemText onClick={aparecer} style={{paddingTop:'10px'}} >
                                    Home
                                </ListItemText>
                            </ListItem>
                        </List>
                        <List>
                            <ListItem button key={'1'} style={{ borderRadius:'0 0 20px 0', background:'rgba(0,0,0,0.5)', padding:'0 20px'}}>
                                <ListItemIcon onClick={handleDrawerOpen}>
                                    <Icon style={{root: {textAlign:'center'}, fontSize:'43px', borderRadius:'13px', padding:'10px' ,marginTop:'10px'}}>
                                        <img style={{height:'100%', marginTop:'-52px', marginLeft:'-7px'}} src="/tenencias.svg"/>
                                    </Icon>
                                </ListItemIcon>
                                <ListItemText onClick={aparecer} style={{paddingTop:'10px'}} >
                                    Mercado
                                    <span style={{background:'#fff',padding:'0 3px', borderRadius:'0 0 0 10px', marginLeft:'10px', boxShadow: '0 1px 4px rgba(0,0,0,0.25)'}}>
                                        {
                                            aparece 
                                            ? <KeyboardArrowUpIcon className={style.arrowUpDisponible} onClick={aparecer} sx={{cursor:'pointer', fontSize:'14px'}} />
                                            : <KeyboardArrowDownIcon className={style.arrowUpDisponible} onClick={aparecer} sx={{cursor:'pointer', fontSize:'14px'}} />
                                        }
                                    </span>
                                </ListItemText>
                            </ListItem>
                            <ListItem style={{padding:'0'}}>
                                <Collapse in={aparece} style={{marginLeft:'55px'}}>
                                    Opcion1
                                </Collapse>
                            </ListItem>
                        </List>
                        <List>
                            <ListItem button key={'1'} style={{borderRadius:'0 0 20px 0', background:'rgba(0,0,0,0.5)', padding:'0 20px'}}>
                                <ListItemIcon onClick={handleDrawerOpen}>
                                    <Icon style={{root: {textAlign:'center'}, fontSize:'40px', borderRadius:'13px', padding:'10px', marginTop:'10px'}}>
                                        <img style={{height:'100%', marginTop:'-50px', marginLeft:'-7px'}} src="/comitente.svg"/>
                                    </Icon>
                                </ListItemIcon>
                                <ListItemText onClick={aparecer} style={{paddingTop:'10px'}} >
                                    Comitente
                                </ListItemText>
                            </ListItem>
                        </List>
                        <List>
                            <ListItem button key={'1'} style={{borderRadius:'0 0 20px 0', background:'rgba(0,0,0,0.5)', padding:'0 20px'}}>
                                <ListItemIcon onClick={handleDrawerOpen}>
                                    <Icon style={{root: {textAlign:'center'}, fontSize:'40px', borderRadius:'13px', padding:'10px', marginTop:'10px'}}>
                                        <img style={{height:'100%', marginTop:'-50px', marginLeft:'-7px'}} src="/research.svg"/>
                                    </Icon>
                                </ListItemIcon>
                                <ListItemText onClick={aparecer} style={{paddingTop:'10px'}} >
                                    Research
                                </ListItemText>
                            </ListItem>
                        </List>
                        <DrawerFooter>
                            <div style={{display:'flex', flexWrap:'wrap'}}>
                                <Icon style={{root: {textAlign:'center'}, fontSize:'40px', borderRadius:'13px', padding:'10px', marginTop:'-5px'}}>
                                    <img style={{height:'100%', marginTop:'-50px', marginLeft:'-7px'}} src="/luz.svg"/>
                                </Icon>
                                <Switch size="small" onClick={()=> handdleCambiarDark()} checked={dark === 'light-body' ? true: false}/>
                            </div>
                            <div>
                                <IconButton onClick={() => handleDrawerOpen()}>
                                    {theme.direction === 'rtl' ? <ChevronRightIcon style={{marginTop:'-5px'}} /> : <ChevronLeftIcon style={{marginTop:'-5px'}}/>}
                                </IconButton>
                            </div>
                        </DrawerFooter>
                    </Drawer>

                    <main style={{width:'100%'}} onClick={open ? () => handleDrawerClose(open): () => handleDrawerClose(open)}>
                    <header className={Styles.container}>
                        <Informacion
                            title={'Inicio | Panel principal'}
                            name={'Productor 1'}
                            subtitle={'IEB'}
                            active={'Activo'}
                            drawerShow={drawerShow}
                        />
                    </header>
                        {children}
                    </main>
                    <SwipeableDrawer
                        sx={{width: '200px'}}
                        anchor='right'
                        open={stateDrawer}
                        onClose={() => drawerShow()}
                        onOpen={() => drawerShow()}
                        transitionDuration= {700}
                    >
                        <ComponentALert/>
                    </SwipeableDrawer>
                </div>
            </div>
        </div>
    )
}
