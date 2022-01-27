/* eslint-disable react-hooks/rules-of-hooks */
import { createFilterOptions } from '@mui/material/Autocomplete';
import SelectInput from '../../util/selectInput'
import { makeStyles } from '@mui/styles';
import TextFieldInput from '../../util/textField'

const filtros = ({
    handdleProductor,
    handdleComitente,
    handdleMoneda,
    valueProductor,
    valueComitente,
    valueMoneda
}) => {
    
    const defaultFilterOptions = createFilterOptions();
    const filterOptions = (options, state) => {
        return defaultFilterOptions(options, state).slice(0, 2);
    };

    return (
        <div className='col-md-12' style={{height:'76px', display:'flex', marginTop:'20px', flexWrap:'wrap', background: 'rgba(220, 234, 227, 0.35)'}}>
            <div className="col-md-3" style={{marginRight:'10px'}}>
                {/* <Stack component="form" noValidate sx={{m:1}}> */}
                    <TextFieldInput />
                {/* </Stack> */}
            </div>
             <div className="col-md-8 d-flex align-items-center">
                {/* <div style={{display:'flex'}}>
                <div style={{marginTop:'11px', fontWeight: '500', fontSize: '14px', color:'#3D5A6C', marginRight:'10px'}}>Productor</div> */}
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
                                label:'Comitente1'
                            },
                            {
                                value: 'Comitente2',
                                label:'Comitente2'
                            },
                            {
                                value: 'Comitente3',
                                label:'Comitente3'
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
                                label:'Pesos'
                            },
                            {
                                value: 'USD',
                                label:'Usd'
                            },
                            {
                                value: 'DOLAR EXT.',
                                label:'Dolar ext.'
                            },

                        ]}
                        value={valueMoneda}
                        change={handdleMoneda}
                    />
                {/* </div> */}
             </div>
        </div>
    )
}

export default filtros;
