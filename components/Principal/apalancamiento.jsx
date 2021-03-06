import style from '../../styles/principal.module.css';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const apalancamiento = () => {
    const clientes = [
        {
            cliente:'Cliente 1',
            numComitente:'1',
            plata:'200 Mil'
        },
        {
            cliente:'Cliente 2',
            numComitente:'2',
            plata:'200 Mil'
        },
        {
            cliente:'Cliente 3',
            numComitente:'3',
            plata:'200 Mil'
        },
        {
            cliente:'Cliente 4',
            numComitente:'4',
            plata:'200 Mil'
        },
    
    ]

    return (
        <div className={`${style.apalancamientoBox} col`}>
            <p className={style.caucionesTitle}>
                Apalancamiento
            </p>
            <div className={style.apalancamientoSubtitle}>
                <p> 100Bil </p>
                <p> Total excedido</p>
            </div>
            {clientes.map(cli => {
                return ( 
                        <div key={cli.cliente} className={style.caucionesClienteBox}>
                            <span className={style.caucionesCliente}>
                                {cli.cliente}
                                <p>N°: {cli.numComitente}</p>
                            </span>
                            <span className={style.caucionesDinero}>
                                {` $${cli.plata}`}
                            </span>
                        </div>
                )
            })}
            <div className={style.seeAll}>
                Ver Todos
                <ArrowForwardIcon sx={{color:'#365848'}}/>
            </div>
        </div>
    )
}

export default apalancamiento; 
