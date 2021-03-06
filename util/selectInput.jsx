/* eslint-disable react-hooks/rules-of-hooks */
import {useState} from 'react'
import {styled } from '@mui/material/styles';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';

const CssSelect = styled(FormControl)({
    '& label': {
        fontFamily: 'DM Sans, sans-serif',
    },
    '& label.Mui-focused': {
      color: 'rgba(0,0,0,0.5)',
      marginTop: '-2px !important'
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'rgba(0,0,0,0.5)',
    },
    '& .MuiOutlinedInput-root': {
        fontFamily: 'DM Sans, sans-serif',
        '& fieldset': {
            borderColor: 'rgba(0,0,0,0.01)',
        },
        '&:hover fieldset': {
            borderColor: 'rgba(0,0,0,0.01)',
        },
        '&.Mui-focused fieldset': {
            borderColor: 'rgba(0,0,0,0.03)',
        },
    },
});

const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: 200,
        // width: 140,
      },
    },
  };

const selectInput = ({label, minWidth, marginTop, options, change, value, modal=false}) => {
    return (
        modal !== true ? (
        <CssSelect sx={{minWidth: minWidth, borderRadius:'8px', marginRight:'10px'}}>
            <InputLabel id="demo-simple-select-autowidth-label" style={{marginTop: marginTop}}>{label}</InputLabel>
            <Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                value={value}
                autoWidth
                label={label}
                onChange={(e) => change(e.target.value)}
                sx={{height:45, background: '#E4EBF0', verticalAlign:'middle'}}
                MenuProps={MenuProps}
            >
                <MenuItem value=''>
                    <em>Ninguno</em>
                </MenuItem>
                {options?.map(opt => <MenuItem key={opt.id} value={opt.id}>{opt.label}</MenuItem> )}
            </Select>
        </CssSelect>
        ):(
            <CssSelect sx={{minWidth: minWidth, borderRadius:'8px', marginRight:'10px'}}>
            {/* <InputLabel id="demo-simple-select-autowidth-label">{label}</InputLabel> */}
            <Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                value={value}
                defaultValue='elija'
                autoWidth
                label={label}
                onChange={(e) => change(e.target.value)}
                sx={{height:30, background: '#E4EBF0'}}
            >
                <MenuItem value='Inmediato'>
                    Inmediato
                </MenuItem>
                {options.map(opt => <MenuItem key={opt.value} value={opt.value}>{opt.label}</MenuItem> )}
            </Select>
        </CssSelect>
        )
    )
}

export default selectInput;