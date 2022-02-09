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
import Icon from '@mui/material/Icon';
import Filtros from './filtros';
import { filter} from 'lodash';
import Modal from '../../util/modalDisponibles';
import {useQuery} from 'react-query';
import {DisponiblesFetch, ProductoresFetch, ComitentesFetch} from '../../services/disponibles';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

const columns = [
    { 
        id: 'comitente',
        label: 'Comitente',
        maxWidth: 100,
        align: 'left',            
    },
    { 
        id: 'nombre',
        label: 'Nombre',
        maxWidth: 100,
        align: 'left',
    },
    {
        id: 'moneda',
        label: 'Moneda',
        minWidth: 100,
        align: 'left'
    },
    {
        id: 'vencido',
        label: 'Vencido',
        minWidth: 100,
        align: 'left'
    },
    {
        id: '24horas',
        label: '24 Horas',
        minWidth: 100,
        align: 'left'
    },
    {
        id: '48horas',
        label: '48 Horas',
        minWidth: 100,
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
        minWidth: 100,
        align: 'left'
    },
    {
        id: 'garantia',
        label: 'Garantia',
        minWidth: 100,
        align: 'left'
    },
    {
        id: 'Manager',
        label: 'Manager',
        minWidth: 100,
        align: 'left'
    }

]
const index = () => {
    
    const [dataTabla, setDataTabla] = useState([])
    const [dataProductores, setDataProductores] = useState([])
    const [dataComitentes, setDataComitentes] = useState([])
    const [filters, setFilters] = useState()
    const [valueProductor, setValueProductor] = useState('');
    const [valueComitente, setValueComitente] = useState('');
    const [valueMoneda, setValueMoneda] = useState('');
    const [valueInmediato, setValueInmediato] = useState('Inmediato')
    const [modal, setModal] = useState(false);
    const [checkFilter, setCheckFilter] = useState({
        productor: false,
        comitente: false,
        moneda: false
    });
    const [bodyModal, setBodyModal] = useState({
        title: '',
        message: ''
    })
    
    const { isLoading, error, isSuccess} = useQuery(['disponibles'], DisponiblesFetch ,{
        refetchOnWindowFocus: false,
        onSuccess: ({Disponibles})=>{
            setDataTabla(Disponibles)
        }
    })

    const {error: errorProductores} = useQuery(['productores'], ProductoresFetch ,{
        refetchOnWindowFocus: false,
        onSuccess: ({Productores})=>{
            setDataProductores(Productores.map(productor => ({id: productor.nombre, label: productor.nombre})))
        }
    })

    const {error: errorComitente} = useQuery(['comitentes'], ComitentesFetch ,{
        refetchOnWindowFocus: false,
        onSuccess: ({Clientes})=> {
            setDataComitentes(Clientes.map(comitente => ({id: comitente.Comitente, label: comitente.Nombre}) ))
        }
    })

    const handdleMoneda = (moneda) => {
        if(moneda){
            setValueMoneda(moneda)
            setCheckFilter({...checkFilter, moneda: false})
            const body = filter(dataTabla, dat =>{
                if(valueComitente && valueProductor){
                   return dat.moneda === moneda && dat.comitente === valueComitente && dat.Manager === valueProductor
                }
                if(valueComitente) {
                    return dat.moneda === moneda && dat.comitente === valueComitente
                }
                if(valueProductor) {
                    return dat.moneda === moneda && dat.Manager === valueProductor
                }
                return dat.moneda === moneda
            })
            return setFilters(body)
        }
    }

    const handdleProductor = (productor) => {
        if(productor){
            setValueProductor(productor)
            setCheckFilter({...checkFilter, productor: false})
            const body = filter(dataTabla, dat =>{
                if(valueComitente && valueMoneda){
                   return dat.Manager===productor && dat.comitente === valueComitente && dat.moneda === valueMoneda
                }
                if(valueComitente) {
                    return dat.Manager===productor && dat.comitente === valueComitente
                }
                if(valueMoneda) {
                    return dat.Manager===productor && dat.moneda === valueMoneda
                }
                return dat.Manager === productor
            })
            return setFilters(body)
        }
    }
    const handdleComitente = (comitente) => {
        if(comitente){
            setValueComitente(comitente)
            setCheckFilter({...checkFilter, comitente: false})
            const body = filter(dataTabla, dat =>{
                if(valueProductor && valueMoneda){
                   return dat.comitente === comitente && dat.Manager === valueProductor && dat.moneda === valueMoneda
                }
                if(valueProductor) {
                    return dat.comitente === comitente && dat.Manager === valueProductor
                }
                if(valueMoneda) {
                    return dat.comitente === comitente && dat.moneda === valueMoneda
                }
                return dat.comitente === comitente
            })
            return setFilters(body)
        }
    }

    const handdleFiltros = () => {
        setValueMoneda('')
        setValueProductor('')
        setValueComitente('')
        setCheckFilter({...checkFilter, productor:true, comitente: true, moneda:true})
        setFilters('')
    }

    const handdleOnChange = (conditional) => {
        if(conditional === 'productor'){
            return setCheckFilter({...checkFilter, productor: false})
        }
        if(conditional === 'comitente') {
            return setCheckFilter({...checkFilter, comitente: false})
        }
        return setCheckFilter({...checkFilter, moneda: false})

    }

    const handdleInmediato = (inmediato) => {
        setValueInmediato(inmediato)
    }

    const handdleClickModal = (comitente) => {
        setModal(true)
        setBodyModal({...bodyModal, title: comitente})
    }
    const handleClose = () => {
        setModal(false)
    }

    return (
        isLoading ? (
                <Backdrop
                    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                    open={true}
                    onClick={handleClose}
                >
                    <CircularProgress color="inherit" />
                </Backdrop>
            ): (
            <div className="row mt-4" style={{paddingLeft:'30px'}}>
                <div className="col-md-4 d-flex justify-content-start align-items-center" style={{paddingLeft:0}}>
                    <Search>
                        <SearchIconWrapper>
                            <Icon style={{root: {textAlign:'center'}, fontSize:'40px', padding:'10px', marginTop:'10px', marginLeft:'auto'}}>
                                <img style={{height:'100%', marginTop:'-55px', marginLeft:'2px'}} src="/lupa.svg"/>
                            </Icon>
                        </SearchIconWrapper>
                        <StyledInputBase placeholder='Ingrese búsqueda'/>
                    </Search>
                    <div className="col-md-3" style={{paddingTop: '15px'}}>
                        <Icon style={{root: {textAlign:'center'}, fontSize:'40px', borderRadius:'13px', padding:'10px', marginLeft:'auto', cursor:'pointer'}}>
                            <img style={{height:'100%', marginTop:'-52px', marginLeft:'-3px'}} src="/tab.svg"/>
                        </Icon>
                    </div>
                </div>
                <Filtros
                    valueProductor={valueProductor}
                    valueComitente={valueComitente}
                    valueMoneda={valueMoneda}
                    handdleMoneda={handdleMoneda}
                    handdleProductor={handdleProductor}
                    handdleComitente={handdleComitente}
                    handdleFiltros={handdleFiltros}
                    handdleOnChange={handdleOnChange}
                    data={filters ? filters : dataTabla}
                    productores={dataProductores}
                    comitentes={dataComitentes}
                    checkFilter={checkFilter}
                />
                <Table 
                    columns={columns}
                    data={filters ? filters :dataTabla}
                    handdleClickModal={handdleClickModal}
                />
                {
                    modal && 
                    <Modal 
                        title={bodyModal.title} 
                        handleClose={handleClose}
                        valueInmediato={valueInmediato}
                        handdleInmediato={handdleInmediato}
                        orderOne={1}
                        orderTwo={2}
                    />
                }
            </div>
        )
    )
}

export default index;
