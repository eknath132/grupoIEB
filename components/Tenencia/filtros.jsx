/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react-hooks/rules-of-hooks */
import SelectInput from '../../util/selectInput';
import { CSVLink } from "react-csv";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { Icon } from '@mui/material';

const filtros = ({
    handdleProductor,
    handdleComitente,
    handdleMoneda,
    valueProductor,
    valueComitente,
    valueMoneda,
    data,
    refetch
}) => {
    const columns = [
        { 
            key: 'Cliente',
            label: 'Cliente',
        },
        { 
            key: 'Comitente',
            label: 'Comitente',
        },
        {
            key: 'Productor',
            label: 'Productor',
        },
        {
            key: 'SubtotalCodigoEspecie',
            label: 'Cod Especie',
        },
        {
            key: 'SubtotalTicker',
            label: 'Ticker',
        },
        {
            key: 'SubtotalEspecie',
            label: 'Especie',
        },
        {
            key: 'SubtotalDetalle',
            label: 'Detalle',
        },
        {
            key: 'SubtotalMoneda',
            label: 'Moneda',
        },
        {
            key: 'SubtotalParticipacion',
            label: 'Participación',
        },
        {
            key: 'SubtotalCantidad',
            label: 'Cantidad',
        },
        {
            key: 'SubtotalPrecio',
            label: 'Precio',
        },
        {
            key: 'SubtotalImporte',
            label: 'Importe',
        },
        {
            key: 'SubtotalCosto',
            label: 'Costo',
        },
        {
            key: 'SubtotalVariacion',
            label: 'Variación',
        },
        {
            key: 'SubtotalResultado',
            label: 'Resultado',
        }
        ,
        {
            key: 'TipoCambio',
            label: 'Cambio',
        }
    
    ]
    
    return (
        <div className='col-md-12' style={{height:'76px', display:'flex', marginTop:'20px', flexWrap:'wrap', background: 'rgba(220, 234, 227, 0.35)'}}>
            <div className="col-md-12 d-flex align-items-center justify-content-between">
                <div>
                    <SelectInput
                        minWidth= {120} 
                        marginTop= {'-5px'}
                        label= "Productor"
                        options= {[ 
                            {
                                value: 'Productor1',
                                label:'Productor1'
                            },
                            {
                                value: 'Productor2',
                                label:'Productor2'
                            },
                            {
                                value: 'Productor3',
                                label:'Productor3'
                            },

                        ]}
                        value={valueProductor}
                        change={handdleProductor}
                    />
                    <SelectInput
                        minWidth= {120} 
                        marginTop= {'-5px'}
                        label= "Cliente"
                        options= {[ 
                            {
                                value: 'Cliente1',
                                label:'Cliente1'
                            },
                            {
                                value: 'Cliente2',
                                label:'Cliente2'
                            },
                            {
                                value: 'Cliente3',
                                label:'Cliente3'
                            },

                        ]}
                        value={valueComitente}
                        change={handdleComitente}
                    />
                </div>
                <div>
                    {/* <button className="btn btn-primary" onClick={refetch}> Refrescar </button> */}
                    <Icon onClick={refetch} style={{root: {textAlign:'center'}, fontSize:'30px', padding:'10px', marginLeft:'auto', cursor:'pointer'}}>
                        <img style={{height:'250%', marginTop:'-43px', marginLeft: '-8px'}} src="/refresh.svg"/>
                    </Icon>
                    {/* <Icon style={{root: {textAlign:'center'}, fontSize:'30px', padding:'10px', marginLeft:'auto', cursor:'pointer'}}>
                        <img style={{height:'250%', marginTop:'-43px', marginLeft: '-8px'}} src="/arrowDown.svg"/>
                    </Icon> */}
                    <CSVLink data={data ? data : 0} headers={columns} style={{color:'#484964'}}>
                        <ArrowDownwardIcon style={{fontSize:'medium', marginTop:'-23px'}}/>
                    </CSVLink>
                </div>
            </div>
        </div>
    )
}

export default filtros;
