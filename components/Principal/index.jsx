/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { useState } from 'react';
import Router from 'next/router';
import style from '../../styles/principal.module.css';
import Image from 'next/image';
import Tenencia from './tenencia';
import Cuentas from './cuentas';
import Cauciones from './cauciones';
import Apalancamiento from './apalancamiento';
import Compliance from './compliance';
import Info from './info';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Icon from '@mui/material/Icon';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { CSSTransition } from "react-transition-group";
import { urlObjectKeys } from 'next/dist/shared/lib/utils';

const index = ({precio}) => {

    const [showList, setShowList] = useState(true)
    const [highlightedHobby, setHighlightedHobby] = useState(false)


    const sswitch = () => {
        setShowList(showList ? false : true);
      };
    
     const listSwitch = () => {
        setHighlightedHobby(state => ({
          highlightedHobby: !state.highlightedHobby
        }));
      };

    return (
        <>
            <div className="row" style={{paddingLeft: '30px', marginBottom: '20px'}}>
                <div className='col-md-5' style={{marginRight:'55px'}}>
                    <div className={`${style.header} row`}>
                        <div className="col-md-12 col-lg-4 p-2">
                            <div className={`${style.disponibleH5} col-xs-12`}>
                                Listado
                            </div>
                            <div className={`${style.disponibleH4} col-xs-12`}>
                                Disponibles
                            </div>
                        </div>
                        <div className={`${style.contenedorSigno} col-md-12 col-lg-6 col-xl-6 p-2`}>
                            <div className={`${style.signoFlex} col`}>
                                <Icon style={{root: {textAlign:'center'}, fontSize:'40px', background:'#fff', borderRadius:'70px', padding:'10px', marginTop:'5px', marginLeft:'auto'}}>
                                    <img style={{height:'300%', marginTop:'-3px', marginLeft:'2px'}} src="/dolar.svg"/>
                                </Icon>
                                <p>
                                    75Bil
                                </p>
                                {
                                    showList 
                                    ? <KeyboardArrowUpIcon className={style.arrowUpDisponible} onClick={sswitch} sx={{cursor:'pointer'}} />
                                    : <KeyboardArrowDownIcon className={style.arrowUpDisponible} onClick={sswitch} sx={{cursor:'pointer'}} />
                                }
                            </div>
                        </div>
                    </div>
                    <CSSTransition
                        in={showList}
                        timeout={400}
                        classNames="list-transition"
                        unmountOnExit
                        appear
                    >
                        <div>
                            <div className='row box-transition'>
                                <div className='col-md-12 col-lg-6 p-3'>
                                    <Tenencia monto='75.000'/>
                                </div>
                                <div className='col-md-12 col-lg-6 p-3'>
                                    <Tenencia monto='6 Bil'/>
                                </div> 
                            </div>
                            <div className='row'>
                                <div className={`${style.tenenciaSee} col-sm-12`} onClick={e => Router.push('disponibles', '/disponibles')}>
                                    Ver más
                                    <ArrowForwardIcon sx={{color:'#323232', cursor:'pointer'}}/>
                                </div>
                            </div>
                        </div>
                    </CSSTransition>
                </div>
                <div className='col'>
                    <div className='col-sm-12'>
                        <Cuentas value="46" mesActual="25" mesAnterior="100" /> 
                    </div>
                </div>
            </div>
            <div className="row" style={{paddingLeft: '30px'}}>
                <Cauciones/>
                <Apalancamiento/>
                <Compliance/>
                <Info/>
            </div>
        </>
    )
}

export default index;
