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
import { Collapse } from '@mui/material';

const index = ({precio}) => {
    const [showList, setShowList] = useState(true)
    const [check, setCheck] = useState('peso')

    const sswitch = () => {
        setShowList(showList ? false : true);
    };

    const handleCheck = (e) => {
        setCheck(e)
    }

    
    return (
        <> 
            <div className={`row`} style={{paddingLeft: '30px', marginBottom: '20px'}}>
                <div className='col-md-3 col-lg-4' style={{background:'#fff', borderRadius:'20px 20px 0 0'}} >
                    <div className={`${style.header} row`}>
                        <div className="col-sm-3 col-md-3 col-lg-4 p-2">
                            <div className={`${style.disponibleH5}`}>
                                Listado
                            </div>
                            <div className={`${style.disponibleH4}`}>
                                Disponibles
                            </div>
                        </div>
                        <div className={`${style.contenedorSigno} col-sm-6 col-md-6 col-lg-8 col-xl-6 p-2`}>
                            <div className={`${style.signoFlex} col`}>
                                <Icon style={{root: {textAlign:'center'}, fontSize:'30px', background:'#fff', borderRadius:'70px', padding:'10px', marginTop:'10px', marginLeft:'auto'}}>
                                    <img style={{height:'450%', marginTop:'-18px', marginLeft:'-1px'}} src="/dolar.svg"/>
                                </Icon>
                                <p>
                                    75Bil
                                </p>
                                {
                                    showList 
                                    ? <KeyboardArrowUpIcon className={style.arrowUpDisponible} onClick={sswitch} sx={{cursor:'pointer', fontSize:'21px'}} />
                                    : <KeyboardArrowDownIcon className={style.arrowUpDisponible} onClick={sswitch} sx={{cursor:'pointer', fontSize:'21px'}} />
                                }
                            </div>
                        </div>
                    </div>
                    <Collapse in={showList}>
                        <div style={{padding: '0 10px'}}>
                            <div style={{display:'flex', fontSize:'15px', marginBottom:'10px'}} >
                                <div style={{cursor:'pointer', textDecoration: check === 'peso' ? 'underline' : 'none'}}  onClick={() => handleCheck('peso')}>
                                    Pesos
                                </div>
                                <div style={{marginLeft:'10px', cursor:'pointer', textDecoration: check === 'dolar' ? 'underline' : 'none'}} onClick={() => handleCheck('dolar')}>
                                    Dolares
                                </div>
                                <div style={{marginLeft:'10px', cursor:'pointer', textDecoration: check === 'dolarExt' ? 'underline' : 'none'}} onClick={() => handleCheck('dolarExt')}>
                                    Dolares ext.
                                </div>
                            </div>
                            <div style={{marginBottom:'10px'}}>
                                <div style={{display:'flex', justifyContent:'space-between', borderBottom:'1px solid rgba(0,0,0, 0.3)', fontSize: '11px'}}>
                                    <div>
                                        Total posición
                                    </div>
                                    <div>
                                        $400.000
                                    </div>
                                </div>
                                <div style={{display:'flex', justifyContent:'space-between', borderBottom:'1px solid rgba(0,0,0, 0.3)', fontSize: '11px'}}>
                                    <div>
                                        Portafolio disponible
                                    </div>
                                    <div>
                                        $400.000
                                    </div>
                                </div>
                                <div style={{display:'flex', justifyContent:'space-between', borderBottom:'1px solid rgba(0,0,0, 0.3)', fontSize: '11px'}}>
                                    <div>
                                        Portafolio en garantía
                                    </div>
                                    <div>
                                        $400.000
                                    </div>
                                </div>
                                <div style={{display:'flex', justifyContent:'space-between', borderBottom:'1px solid rgba(0,0,0, 0.3)', fontSize: '11px'}}>
                                    <div>
                                        Cuenta corriente
                                    </div>
                                    <div>
                                        $400.000
                                    </div>
                                </div>
                            </div>
                            <div style={{display:'flex', justifyContent:'center'}}>
                                <div style={{border:'1px solid black', padding:'5px 30px', borderRadius:'15px'}}>
                                    Ver todo
                                </div>
                            </div>
                        </div>
                    </Collapse>
                </div>
                <div className='col-md-9 col-lg-8'>
                    <Cuentas value="46" mesActual="25" mesAnterior="100" /> 
                </div>
            </div>
            <div className={`row`} style={{paddingLeft: '20px'}}>
                <div className='col-md-3'>
                    <Cauciones/>
                </div>
                <div className='col-md-3'>
                    <Cauciones/>
                </div>
                <div className='col-md-3'>
                    <Cauciones/>
                </div>
                <div className='col-md-3'>
                    <Cauciones/>
                </div>
                {/* <Apalancamiento/>
                <Compliance/>
                <Info/> */}
            </div>
        </>
    )
}

export default index;
