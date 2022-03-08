import style from '../../styles/principal.module.css'
import Comisiones from './comisiones'
import CircleIcon from '@mui/icons-material/Circle';
import MercadoTarjeta from './mercadoTarjeta';

const cuentas = ({value, mesActual, mesAnterior}) => {
    const progress = (value) => {
        if(value <= '25') {
            return (
                <div 
                    className={` ${style.progress25} progress-bar`} 
                    role="progressbar" style={{width: "25%"}} 
                    aria-valuenow="15" aria-valuemin="0" 
                    aria-valuemax="100">
                </div>
            )
        }
        if(value >= '25' && value <= '50') {
            return (
                <div 
                    className={` ${style.progress50} progress-bar`} 
                    role="progressbar" style={{width: "50%"}} 
                    aria-valuenow="15" aria-valuemin="0" 
                    aria-valuemax="100">
                </div>
            )
        }
        if(value >= '50' && value <= '75') {
            return (
                <div 
                    className={` ${style.progress75} progress-bar`} 
                    role="progressbar" style={{width: "75%"}} 
                    aria-valuenow="15" aria-valuemin="0" 
                    aria-valuemax="100">
                </div>
            )
        }
    
        return (
            <div 
                className={` ${style.progress100} progress-bar`} 
                role="progressbar" style={{width: "100%"}} 
                aria-valuenow="15" aria-valuemin="0" 
                aria-valuemax="100">
            </div>
        )
    }

    return (
        <div>
            <div className='col-md-12' style={{minHeight:'120px', padding:'10px 5px', background:'#EAEAEA', marginBottom:'10px'}}>
                <div style={{margin:'10px', fontSize:'21px'}}>
                    Mercado
                </div>
                <div style={{display:'flex', justifyContent:'space-between', flexWrap:'wrap'}}>
                    <MercadoTarjeta/>
                    <MercadoTarjeta/>
                    <MercadoTarjeta/>
                    <MercadoTarjeta/>
                </div>
            </div>
            <div className='col-md-12'>
                <Comisiones value="25" mesActual="75k" mesAnterior="200k"/>
            </div>
        </div>
    )
}

export default cuentas;
