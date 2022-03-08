import style from '../../styles/principal.module.css';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const cauciones = () => {
    const clientes = [
        {
            cliente: 'Cliente 1',
            numComitente: '1',
            plata: '200Mil'
        },
        {
            cliente: 'Cliente 2',
            numComitente: '2',
            plata: '200Mil'
        },
        {
            cliente: 'Cliente 3',
            numComitente: '3',
            plata: '200Mil'
        },
        {
            cliente: 'Cliente 4',
            numComitente: '4',
            plata: '200Mil'
        },
    ]

    return (
        <div style={{height:'100%'}}>
            <p className={style.caucionesTitle}>
                Cauciones
            </p>
            <div className={style.caucionesSubtitle}>
                {/* <p> 55 </p>
                <p> Próximos a vencer</p> */}
                <div style={{border:'1px solid black', width:'60%', height:'80%', marginLeft:'-20px', borderRadius:'19px', display:'flex', alignItems:'center', justifyContent:'center'}}>
                    $100.000
                </div>
                <div style={{marginLeft:'10px'}}>
                    <div style={{fontSize:'14px'}}>
                        Excedido
                    </div>
                    <div style={{fontSize:'14px', lineHeight:'10px' }}>
                        Total
                    </div>
                </div>
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

export default cauciones;
