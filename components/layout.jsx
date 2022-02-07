/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
import Head from "next/head";
import Router from 'next/router'
import Link from "next/link";
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Hidden from '@mui/material/Hidden';

import styles from "../styles/layout.module.css";
import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import Icon from '@mui/material/Icon';

export default function layout({children, title, description}) {

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

    return (
        <div className={`container-fluid`} style={{padding: '0 30px'}}>
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
            
            <div className="row">
                <nav className={`${styles.nav} col-md-12 col-lg-1`} >
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
                </nav>
                <div className="col-xs-12 col-sm-12 col-lg-11 col-xxl-11">
                    <main>
                        {children}
                    </main>
                </div>
            </div>
        </div>
    )
}
