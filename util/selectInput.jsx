/* eslint-disable react-hooks/rules-of-hooks */
import {useState} from 'react'
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';

const selectInput = ({label, minWidth, marginRight, marginTop, options, moneda = false}) => {
    const [value, setValue] = useState()
    return (
        <FormControl sx={{minWidth: minWidth}} style={{marginRight: marginRight}}>
            <InputLabel id="demo-simple-select-autowidth-label" style={{marginTop: marginTop}}>{label}</InputLabel>
            <Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                value={value}
                autoWidth
                label={label}
                onChange={(e) => setValue(e.target.value)}
                sx={{height:45, background: '#E4EBF0', verticalAlign:'middle'}}
            >
                <MenuItem value=''>
                    <em>Ninguno</em>
                </MenuItem>
                {options.map(opt => <MenuItem key={opt.value} value={opt.value}>{opt.label}</MenuItem> )}
            </Select>
        </FormControl>
    )
}

export default selectInput;