/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
import { useState} from 'react';

import Table from './tableTenencias';
import { filter} from 'lodash';
import Modal from '../../util/modal';
import {useQuery} from 'react-query';
import {TenenciasFetch} from '../../services/tenencias';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Filtros from './filtros';
import style from '../../styles/tenencia.module.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

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
    
    const { isLoading, error, isSuccess, refetch, isFetching} = useQuery(['tenencias'], TenenciasFetch ,{
        refetchOnWindowFocus: false,
        onSuccess: ({Tenencias}) => {
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
                <div className="col-md-3 d-flex justify-content-start align-items-center">
                    <div className={`${style.cuentaBoxFirst} col-md-12`}>
                        <div> 
                            <h3>
                                Tenencia
                            </h3>
                            <h4>
                                total
                            </h4>
                        </div>
                        <div className={style.cuentaBoxRight}> 
                            <KeyboardArrowDownIcon className={style.arrowDown} sx={{cursor:'pointer'}}/>
                        </div>
                    </div>
                </div>

                <div className="col-md-3 d-flex justify-content-start align-items-center" >
                    <div className={`${style.cuentaBoxSecond} col-md-12`}>
                        <div> 
                            <h3>
                                Tenencia por
                            </h3>
                            <h4>
                                cliente
                            </h4>
                        </div>
                        <div className={style.cuentaBoxRight}> 
                            <KeyboardArrowDownIcon className={style.arrowDown} sx={{cursor:'pointer'}}/>
                        </div>
                    </div>
                </div>

                <div className="col-md-3 d-flex justify-content-start align-items-center">
                    <div className={`${style.cuentaBoxThree} col-md-12`}>
                        <div> 
                            <h3>
                                Tenencia por
                            </h3>
                            <h4>
                                instrumento
                            </h4>
                        </div>
                        <div className={style.cuentaBoxRight}> 
                            <KeyboardArrowDownIcon className={style.arrowDown} sx={{cursor:'pointer'}}/>
                        </div>
                    </div>
                </div>

                <div className="col-md-3 d-flex justify-content-start align-items-center">
                    <div className={`${style.cuentaBoxThree} col-md-12`}>
                        <div>
                            <h3>
                                Tenencia por
                            </h3>
                            <h4>
                                cliente
                            </h4>
                        </div>
                        <div className={style.cuentaBoxRight}> 
                            <KeyboardArrowDownIcon className={style.arrowDown} sx={{cursor:'pointer'}}/>
                        </div>
                    </div>
                </div>
                <Filtros
                    valueCliente={valueCliente}
                    valueProductor={valueProductor}
                    valueMoneda={valueMoneda}
                    setValueCliente={setValueCliente}
                    setValueProductor={setValueProductor}
                    handdleMoneda={handdleMoneda}
                    handdleCliente={handdleCliente}
                    handdleProductor={handdleProductor}
                    data={dataTabla}
                    refetch={refetch}
                />
                <Table 
                    columns={columns}
                    data={dataTabla}
                    handdleClickModal={handdleClickModal}
                    isFetching={isFetching}
                />
                {
                    modal && <Modal title={bodyModal.title} handleClose={handleClose}/>
                }
            </div>
        )
    )
}

export default index;
