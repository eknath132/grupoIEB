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
             <Stack component="form" noValidate sx={{m:1, height:20}}>
                <TextField
                    id="date"
                    label="Fecha"
                    type="date"
                    defaultValue="2021-01-06"
                    sx={{minWidth:'200px',height:55, background: '#E4EBF0' }}
                />
             </Stack>
            <FormControl sx={{ marginTop: 3, minWidth: 120,}}>
                <InputLabel id="demo-simple-select-autowidth-label">Productor</InputLabel>
                <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    value={valueProductor ? valueProductor : ''}
                    onChange={(e) => setValueProductor(e.target.value)}
                    autoWidth
                    label="Productor"
                    sx={{height:40, background: '#E4EBF0'}}
                >
                <MenuItem value=''>
                    <em>Ninguno</em>
                </MenuItem>
                <MenuItem value='Productor1'>Productor 1</MenuItem>
                <MenuItem value='Productor2'>Productor 2</MenuItem>
                <MenuItem value='Productor3'>Productor 3</MenuItem>
                </Select>
            </FormControl>
            <FormControl sx={{ marginTop: 3, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-autowidth-label">Comitente</InputLabel>
                <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    value={valueComitente ? valueComitente : ''}
                    onChange={(e) => setValueComitente(e.target.value)}
                    autoWidth
                    label="Comitente"
                    sx={{height:40, background: '#E4EBF0'}}
                >
                <MenuItem value=''>
                    <em>Ninguno</em>
                </MenuItem>
                <MenuItem value='Comitente1'>Comitente 1</MenuItem>
                <MenuItem value='Comitente2'>Comitente 2</MenuItem>
                <MenuItem value='Comitente3'>Comitente 3</MenuItem>
                </Select>
            </FormControl>
            {/* <Autocomplete
                onInputChange={e => handdleAutoComplete(e.target.value)}
                filterOptions={filterOptions}
                disablePortal
                id="combo-box-demo"
                options={comitente}
                sx={{ width: 0 }}
                renderInput={(params) => <TextField {...params} label="Comitente" />}
            /> */}
            <FormControl sx={{ marginTop: 3, minWidth: 120}}>
                <InputLabel id="demo-simple-select-autowidth-label">Moneda</InputLabel>
                <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    value={valueMoneda ? valueMoneda : ''}
                    onChange={(e) => handdleMoneda(e.target.value)}
                    autoWidth
                    label="Moneda"
                    sx={{height:40, background: '#E4EBF0'}}

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
    )
}

export default filtros;
