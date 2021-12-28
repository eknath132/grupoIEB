import style from '../../styles/principal.module.css';

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
        <div className={`${style.caucionesBox} col`}>
            <p className={style.caucionesTitle}>
                Apalancamiento
            </p>
            <div className={style.apalancamientoSubtitle}>
                <p> 100Bil </p>
                <p> Total excedido</p>
            </div>
                {clientes.map(cli => { console.log(cli)
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
        </div>
    )
}

export default apalancamiento; 
