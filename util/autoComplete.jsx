import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import {styled } from '@mui/material/styles';

const CssSelectAuto = styled(Autocomplete)({
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
            borderColor: 'rgba(0,0,0,0.001)',
        },
        '&:hover fieldset': {
            borderColor: 'rgba(0,0,0,0.001)',
        },
        '&.Mui-focused fieldset': {
            borderColor: 'rgba(0,0,0,0.003)',
        },
    },
});

const CompleteAuto = ({label, options, change, checkFilter, handdleOnChange, conditional}) => {
    const filterOptions = createFilterOptions({
        matchFrom: 'start',
        limit:20,
        stringify: (option) => option.label,
    });

    return(
        <CssSelectAuto
            disablePortal
            id="combo-box-demo"
            options={options}
            onChange={(e, value) => change(value.id)}
            disableClearable
            getOptionLabel={(option) => option.label}
            isOptionEqualToValue={(option, value) => (option.id === value.id)}       
            filterOptions={filterOptions}
            sx={{ width: 120, background:'#E4EBF0', height:45, verticalAlign:'middle', borderRadius:'3px', marginRight:'10px'}}
            renderInput={(params) => {
                let filter = params                
                if (checkFilter) { // se crea condición para que se pueda limpiar el filtro, desde un boton externo
                    filter.inputProps.value = ''
                }
                return (
                    <TextField {...filter} label={label} style={{marginTop:'-5px'}} onChange={() => handdleOnChange(conditional) }/> 
                )
            }}
        />
    )
}

export default CompleteAuto