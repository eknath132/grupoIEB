/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';
import { createFilterOptions } from '@mui/material/Autocomplete';
import SelectInput from '../../util/selectInput'



const filtros = ({
    setValueProductor,
    setValueComitente,
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
        <div className='col-md-12' style={{height:'76px', display:'flex', marginTop:'20px', justifyContent:'space-around', flexWrap:'wrap', background: 'rgba(220, 234, 227, 0.35)'}}>
            <div className="col-md-2 ">
                <Stack component="form" noValidate sx={{m:1}}>
                    <TextField
                        id="date"
                        label="Fecha"
                        type="date"
                        defaultValue="2021-01-06"
                        sx={{height:55, background: '#E4EBF0'}}
                    />
                </Stack>
            </div>
             <div className="col-md-8 d-flex justify-content-between align-items-center">
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
                />
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
                />
                <FormControl sx={{minWidth: 120}}>
                    <InputLabel id="demo-simple-select-autowidth-label" style={{marginTop: '-5px'}}>Moneda</InputLabel>
                    <Select
                        labelId="demo-simple-select-autowidth-label"
                        id="demo-simple-select-autowidth"
                        value={valueMoneda ? valueMoneda : ''}
                        onChange={(e) => handdleMoneda(e.target.value)}
                        autoWidth
                        label="Moneda"
                        sx={{height:45, background: '#E4EBF0'}}

                    >
                    <MenuItem value=''>
                        <em>Ninguno</em>
                    </MenuItem>
                    <MenuItem value='PESOS'>PESOS</MenuItem>
                    <MenuItem value='USD'>USD</MenuItem>
                    <MenuItem value='DOLAR EXT.'>DOLAR EXT.</MenuItem>
                    </Select>
                </FormControl>
             </div>

        </div>
    )
}

export default filtros;
