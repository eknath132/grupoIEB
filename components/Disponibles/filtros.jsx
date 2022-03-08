/* eslint-disable react-hooks/rules-of-hooks */
import {useState} from 'react';
import TextFieldInput from '../../util/textField';
import { CSVLink } from "react-csv";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import AutoComplete from '../../util/autoComplete';
import ButtonUnstyled, { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import { styled } from '@mui/system';

const filtros = ({
    handdleProductor,
    handdleComitente,
    handdleMoneda,
    handdleFiltros,
    handdleOnChange,
    valueComitente,
    valueProductor,
    valueMoneda,
    productores,
    comitentes,
    checkFilter,
    data
}) => {

    const CustomButtonRoot = styled('button')`
        background-color: #E4EBF0;
        height:45px;
        width: 120px;
        border-radius: 20px;
        border-color: rgba(0,0,0,0.001);
        color: rgba(0,0,0,0.6);
        transition: all 150ms ease;
        cursor: pointer;
        &:hover {
            background-color: #dce3e8;
        }
        &.${buttonUnstyledClasses.active} {
            background-color: #d0d7db;
        }

        &.${buttonUnstyledClasses.focusVisible} {
            background-color: #d0d7db;
        }

        &.${buttonUnstyledClasses.disabled} {
            opacity: 0.5;
            cursor: not-allowed;
        }
    `;
        
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
                <AutoComplete checkFilter={checkFilter.productor} conditional={'productor'} handdleOnChange={handdleOnChange} valueOption={valueProductor} label={'Productor'} options= {productores} change={handdleProductor}/>
                <AutoComplete checkFilter={checkFilter.comitente} conditional={'comitente'} handdleOnChange={handdleOnChange} valueOption={valueComitente} label={'Comitente'} options= {comitentes}  change={handdleComitente}/>
                <AutoComplete
                    checkFilter={checkFilter.moneda}
                    conditional={'moneda'}
                    handdleOnChange={handdleOnChange}
                    valueOption={valueMoneda}
                    label={'Moneda'}
                    options={[ 
                        {
                            id: 'PESOS',
                            label:'Pesos'
                        },
                        {
                            id: 'USD',
                            label:'Usd'
                        },
                        {
                            id: 'DOLAR EXT.',
                            label:'Dolar ext.'
                        },
                    
                    ]}
                    change={handdleMoneda}/>
                <CSVLink data={data? data : []} headers={columns} style={{color:'black'}}>
                    <ArrowDownwardIcon/>
                </CSVLink>
                <CustomButtonRoot
                    onClick={()=> handdleFiltros()}
                >
                    Limpiar filtro
                </CustomButtonRoot>
             </div>
        </div>
    )
}

export default filtros;
