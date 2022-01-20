/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useEffect} from 'react';
import {
    Search,
    SearchIconWrapper,
    StyledInputBase
} from '../../util/search';
import Table from './tableDisponibles';
import SearchIcon from '@mui/icons-material/Search';
import Icon from '@mui/material/Icon';
import Filtros from './filtros';
import { filter, groupBy, set, toNumber } from 'lodash';
import Modal from '../../util/modal'

const columns = [
    { 
        id: 'comitente',
        label: 'Comitente',
        maxWidth: 80,
        align: 'left',            
    },
    { 
        id: 'nombre',
        label: 'Nombre',
        maxWidth: 80,
        align: 'left',
    },
    {
        id: 'moneda',
        label: 'Moneda',
        minWidth: 70,
        align: 'left'
    },
    {
        id: 'vencido',
        label: 'Vencido',
        minWidth: 70,
        align: 'left'
    },
    {
        id: '24horas',
        label: '24 Horas',
        minWidth: 70,
        align: 'left'
    },
    {
        id: '48horas',
        label: '48 Horas',
        minWidth: 70,
        align: 'left'
    },
    {
        id: '+48horas',
        label: '+ 48 Horas',
        minWidth: 100,
        align: 'left'
    },
    {
        id: 'Saldo Total',
        label: 'Saldo total',
        minWidth: 70,
        align: 'left'
    },
    {
        id: 'garantia',
        label: 'Garantia',
        minWidth: 70,
        align: 'left'
    },
    {
        id: 'Manager',
        label: 'Manager',
        minWidth: 70,
        align: 'left'
    }

]
const index = ({data}) => {
    // const [dataTabla, setDataTabla] = useState(data.Disponibles)
    const [valueProductor, setValueProductor] = useState('');
    const [valueComitente, setValueComitente] = useState('');
    const [valueMoneda, setValueMoneda] = useState('');
    const [modal, setModal] = useState(false);
    const [bodyModal, setBodyModal] = useState({
        title: '',
        message: ''
    })
    
    const handdleMoneda = (e) => {
        setValueMoneda(e)
        const body = filter(data.Disponibles, dat =>{
            if(valueComitente){
               return dat.moneda === e && dat.comitente === valueComitente
            }
            return dat.moneda === e
        })
        // setDataTabla(body)
    }

    const handdleClickModal = (comitente) => {
        console.log(comitente)
        setModal(true)
        setBodyModal({...bodyModal, title: comitente})
    }
    const handleClose = () => {
        setModal(false)
    }

    return (
        <div className="row mt-4" style={{paddingLeft:'30px'}}>
                <div className="col-md-4 d-flex justify-content-start align-items-center" style={{paddingLeft:0}}>
                    <Search>
                        <SearchIconWrapper>
                            <Icon style={{root: {textAlign:'center'}, fontSize:'40px', padding:'10px', marginTop:'10px', marginLeft:'auto'}}>
                                <img style={{height:'100%', marginTop:'-55px', marginLeft:'2px'}} src="/lupa.svg"/>
                            </Icon>
                        </SearchIconWrapper>
                        <StyledInputBase/>
                    </Search>
                </div>
                <div className="col-md-3">
                    <Icon style={{root: {textAlign:'center'}, fontSize:'40px', borderRadius:'13px', padding:'10px', marginLeft:'auto', cursor:'pointer'}}>
                        <img style={{height:'100%', marginTop:'-52px', marginLeft:'-3px'}} src="/tab.svg"/>
                    </Icon>
                </div>
                <Filtros
                    valueProductor={valueProductor}
                    valueComitente={valueComitente}
                    valueMoneda={valueMoneda}
                    setValueProductor={setValueProductor}
                    setValueComitente={setValueComitente}
                    handdleMoneda={handdleMoneda}
                />
                <Table 
                    columns={columns}
                    // data={dataTabla}
                    handdleClickModal={handdleClickModal}
                />
                {
                    modal && <Modal title={bodyModal.title} handleClose={handleClose}/>
                }
        </div>
    )
}

export default index;
