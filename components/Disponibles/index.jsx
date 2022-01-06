/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import {
    Search,
    SearchIconWrapper,
    StyledInputBase
} from '../../util/search';
import Table from './tableDisponibles';
import SearchIcon from '@mui/icons-material/Search';
import Icon from '@mui/material/Icon';
import Filtros from './filtros';

const columns = [
    { 
        id: 'comitente',
        label: 'Comitente',
        maxWidth: 80,
        align: 'left',            
    },
    { 
        id: 'nombre',
        label: 'Nombre',
        maxWidth: 80,
        align: 'left',
    },
    {
        id: 'moneda',
        label: 'Moneda',
        minWidth: 70,
        align: 'left'
    },
    {
        id: 'vencido',
        label: 'Vencido',
        minWidth: 70,
        align: 'left'
    },
    {
        id: '24horas',
        label: '24 Horas',
        minWidth: 70,
        align: 'left'
    },
    {
        id: '48horas',
        label: '48 Horas',
        minWidth: 70,
        align: 'left'
    },
    {
        id: '+48horas',
        label: '+ 48 Horas',
        minWidth: 100,
        align: 'left'
    },
    {
        id: 'Saldo Total',
        label: 'Saldo total',
        minWidth: 70,
        align: 'left'
    },
    {
        id: 'garantia',
        label: 'Garantia',
        minWidth: 70,
        align: 'left'
    },
    {
        id: 'Manager',
        label: 'Manager',
        minWidth: 70,
        align: 'left'
    }

]
const index = ({data}) => {

    return (
        <div className="row mt-4">
                <div className="col-md-3 d-flex justify-content-start align-items-center">
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon/>
                        </SearchIconWrapper>
                        <StyledInputBase/>
                    </Search>
                </div>
                <div className="col-md-3">
                    <Icon style={{root: {textAlign:'center'}, fontSize:'40px', borderRadius:'13px', padding:'10px', marginLeft:'auto'}}>
                        <img style={{height:'100%', marginTop:'-52px', marginLeft:'-3px'}} src="/tab.svg"/>
                    </Icon>
                </div>
                <Filtros/>
                <Table columns={columns} data={data}/>
        </div>
    )
}

export default index;
