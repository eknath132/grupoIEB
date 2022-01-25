import * as React from 'react';
import {styled } from '@mui/material/styles';
import MobileDatePicker from '@mui/lab/MobileDatePicker';


import TextField from '@mui/material/TextField';

const CssTextField = styled(TextField)({
    '& label': {
        fontFamily: 'DM Sans, sans-serif',
    },
    '& label.Mui-focused': {
        color: 'rgba(0,0,0,0.5)',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: 'rgba(0,0,0,0.5)',
    },
    '& .MuiOutlinedInput-input': {
        padding:'12px 14px',
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
            borderColor: 'rgba(0,0,0,0.01)',
        },
    },
});

const TextFieldInput = () => {
  return (
      <CssTextField
        id="date"
        label="Fecha"
        type="date"
        defaultValue="2021-01-06"
        sx={{background:'#E4EBF0', borderRadius:'8px', display:'flex', marginTop:'14px'}}
    />
  );
}

export default TextFieldInput
