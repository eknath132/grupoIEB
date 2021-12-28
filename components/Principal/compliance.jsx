import style from '../../styles/principal.module.css';

const compliance = () => {
    const clientes = [
        {
            cliente:'Cliente 1',
            documento:'122323'
        },
        {
            cliente:'Cliente 2',
            documento:'122323'
        },
        {
            cliente:'Cliente 3',
            documento:'122323'
        },
        {
            cliente:'Cliente 4',
            documento:'4122323'
        },
    
    ]
    return (
        <div className={`${style.complianceBox} col`}>
            <div className={style.complianceTitle}>
                Compliance
                <p>
                    Proximos vencimientos
                </p>
            </div>
            <div className={style.complianceFecha}>
                <p>
                    02 de noviembre
                </p>
            </div>
                {clientes.map(cli => {
                   return ( 
                        <div key={cli.cliente} className={style.complianceClienteBox}>
                            <span className={style.complianceCliente}>
                                {cli.cliente}
                                <p>Documento: {cli.documento}</p>
                            </span>
                            <span className={style.complianceActualizar}>
                                Actualizar
                            </span>
                        </div>
                    )
                })}
        </div>
    )
}

export default compliance;
