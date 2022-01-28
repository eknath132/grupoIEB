/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useEffect} from 'react';
import {
    Search,
    SearchIconWrapper,
    StyledInputBase
} from '../../util/search';
import Table from './tableTenencias';
import Icon from '@mui/material/Icon';
// import Filtros from './filtros';
import { filter} from 'lodash';
import Modal from '../../util/modal';
import {useQuery} from 'react-query';
import {TenenciasFetch} from '../../services/tenencias';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

const columns = [
    { 
        id: 'Cliente',
        label: 'Cliente',
        maxWidth: 100,
        align: 'left',            
    },
    { 
        id: 'Comitente',
        label: 'Comitente',
        maxWidth: 100,
        align: 'left',
    },
    {
        id: 'Productor',
        label: 'Productor',
        minWidth: 100,
        align: 'left'
    },
    {
        id: 'SubtotalCodigoEspecie',
        label: 'Cod Especie',
        minWidth: 100,
        align: 'left'
    },
    {
        id: 'SubtotalTicker',
        label: 'Ticker',
        minWidth: 100,
        align: 'left'
    },
    {
        id: 'SubtotalEspecie',
        label: 'Especie',
        minWidth: 100,
        align: 'left'
    },
    {
        id: 'SubtotalDetalle',
        label: 'Detalle',
        minWidth: 100,
        align: 'left'
    },
    {
        id: 'SubtotalMoneda',
        label: 'Moneda',
        minWidth: 100,
        align: 'left'
    },
    {
        id: 'SubtotalParticipacion',
        label: 'Participación',
        minWidth: 100,
        align: 'left'
    },
    {
        id: 'SubtotalCantidad',
        label: 'Cantidad',
        minWidth: 100,
        align: 'left'
    },
    {
        id: 'SubtotalPrecio',
        label: 'Precio',
        minWidth: 100,
        align: 'left'
    },
    {
        id: 'SubtotalImporte',
        label: 'Importe',
        minWidth: 100,
        align: 'left'
    },
    {
        id: 'SubtotalCosto',
        label: 'Costo',
        minWidth: 100,
        align: 'left'
    },
    {
        id: 'SubtotalVariacion',
        label: 'Variación',
        minWidth: 100,
        align: 'left'
    },
    {
        id: 'SubtotalResultado',
        label: 'Resultado',
        minWidth: 100,
        align: 'left'
    }
    ,
    {
        id: 'TipoCambio',
        label: 'Cambio',
        minWidth: 100,
        align: 'left'
    }

]
const index = () => {
    
    const [dataTabla, setDataTabla] = useState()
    const [valueCliente, setValueCliente] = useState('');
    const [valueProductor, setValueProductor] = useState('');
    const [valueMoneda, setValueMoneda] = useState('');
    const [modal, setModal] = useState(false);
    const [bodyModal, setBodyModal] = useState({
        title: '',
        message: ''
    })
    
    const { isLoading, error, isSuccess} = useQuery(['tenencias'], TenenciasFetch ,{
        refetchOnWindowFocus: false,
        onSuccess: ({Tenencias})=>{
            setDataTabla(Tenencias)
        }
    })

    const handdleMoneda = (e) => {
        setValueMoneda(e)
        const body = filter(data.Disponibles, dat =>{
            if(valueProductor){
               return dat.moneda === e && dat.comitente === valueProductor
            }
            return dat.moneda === e
        })
        setDataTabla(body)
    }

    const handdleCliente = (cliente) => {
        setValueCliente(cliente)
    }
    const handdleProductor = (productor) => {
        setValueProductor(productor)
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
                {/* <Filtros
                    valueCliente={valueCliente}
                    valueProductor={valueProductor}
                    valueMoneda={valueMoneda}
                    setValueCliente={setValueCliente}
                    setValueProductor={setValueProductor}
                    handdleMoneda={handdleMoneda}
                    handdleCliente={handdleCliente}
                    handdleProductor={handdleProductor}
                /> */}
                <Table 
                    columns={columns}
                    data={dataTabla}
                    handdleClickModal={handdleClickModal}
                />
                {
                    modal && <Modal title={bodyModal.title} handleClose={handleClose}/>
                }
            </div>
        )
    )
}

export default index;
