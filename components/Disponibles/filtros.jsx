/* eslint-disable react-hooks/rules-of-hooks */
import SelectInput from '../../util/selectInput';
import TextFieldInput from '../../util/textField';
import { CSVLink } from "react-csv";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const filtros = ({
    handdleProductor,
    handdleComitente,
    handdleMoneda,
    valueProductor,
    valueComitente,
    valueMoneda,
    data,
    productores
}) => {
    const columns = [
        { 
            key: 'comitente',
            label: 'Comitente',
        },
        { 
            key: 'nombre',
            label: 'Nombre',
        },
        {
            key: 'moneda',
            label: 'Moneda',
        },
        {
            key: 'vencido',
            label: 'Vencido',
        },
        {
            key: '24horas',
            label: '24 Horas',
        },
        {
            key: '48horas',
            label: '48 Horas',
        },
        {
            key: '+48horas',
            label: '+ 48 Horas',
        },
        {
            key: 'Saldo Total',
            label: 'Saldo total',
        },
        {
            key: 'garantia',
            label: 'Garantia',
        },
        {
            key: 'Manager',
            label: 'Manager',
        }
    
    ]
    
    return (
        <div className='col-md-12' style={{height:'76px', display:'flex', marginTop:'20px', flexWrap:'wrap', background: 'var(--theme-disponibles-filtros)'}}>
            <div className="col-md-3" style={{marginRight:'10px'}}>
                <TextFieldInput />
            </div>
             <div className="col-md-8 d-flex align-items-center">
                {/* <div style={{display:'flex'}}>
                <div style={{marginTop:'11px', fontWeight: '500', fontSize: '14px', color:'#3D5A6C', marginRight:'10px'}}>Productor</div> */}
                <SelectInput
                    minWidth= {120} 
                    marginTop= {'-5px'}
                    label= "Productor"
                    options= {productores}
                    value={valueProductor}
                    change={handdleProductor}
                />
                {/* </div>
                <div style={{display:'flex'}}>
                    <div style={{marginTop:'11px', fontWeight: '500', fontSize: '14px', color:'#3D5A6C', marginRight:'10px'}}>Comitente</div> */}
                    <SelectInput
                        minWidth= {120} 
                        marginTop= {'-5px'}
                        label= "Comitente"
                        options= {[ 
                            {
                                value: 'Comitente1',
                                nombre:'Comitente1'
                            },
                            {
                                value: 'Comitente2',
                                nombre:'Comitente2'
                            },
                            {
                                value: 'Comitente3',
                                nombre:'Comitente3'
                            },

                        ]}
                        value={valueComitente}
                        change={handdleComitente}
                    />
                {/* </div>
                <div style={{display:'flex'}}>
                <div style={{marginTop:'11px', fontWeight: '500', fontSize: '14px', color:'#3D5A6C', marginRight:'10px'}}>Moneda</div> */}
                    <SelectInput
                        minWidth= {120} 
                        marginTop= {'-5px'}
                        label= "Moneda"
                        options= {[ 
                            {
                                value: 'PESOS',
                                nombre:'Pesos'
                            },
                            {
                                value: 'USD',
                                nombre:'Usd'
                            },
                            {
                                value: 'DOLAR EXT.',
                                nombre:'Dolar ext.'
                            },

                        ]}
                        value={valueMoneda}
                        change={handdleMoneda}
                    />
                    <CSVLink data={data? data : []} headers={columns} style={{color:'black'}}>
                        <ArrowDownwardIcon/>
                    </CSVLink>
                {/* </div> */}
             </div>
        </div>
    )
}

export default filtros;
