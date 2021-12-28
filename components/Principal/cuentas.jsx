import style from '../../styles/principal.module.css'
import Comisiones from './comisiones'

const cuentas = ({value, mesActual, mesAnterior}) => {
    const progress = (value) => {
        console.log('hola')
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
            <div className='row'>
                <div className={`${style.cuentas} col-md-12 col-lg-5 p-3`}>
                    <div className='row'>
                        <div className={`${style.cuentasBox} col-md-12 col-lg-6`}>
                            <div className={style.cuentasBoxLeft}> 
                                <h3>
                                    Apertura de
                                </h3>
                                <h4 style={{maxHeight:'10px'}}>
                                    Cuentas
                                </h4>
                            </div>
                            <div className={style.cuentasBoxRight}> 
                                <h3>
                                    25
                                </h3>
                                <h4>
                                    Total
                                </h4>
                            </div>
                        </div>
                        <div className={`${style.objetivoBox} col-md-12 col-lg-6 col-xl-7 col-xxl-8`}>
                            <div className={`${style.objetivoButton} col-md-12`}> 
                                    <p>
                                        Lejos del objetivo
                                    </p>
                            </div>
                            <div className={` ${style.objetivoProgress} col-md-12`}>
                                <p>
                                    {` % ${value}`}
                                </p>
                                <div className="progress col-md-12">
                                    {progress(value)}
                                </div>
                            </div>
                            <div className={` ${style.progressBottom} col-md-12`}> 
                                <span className={style.numberBottom}>
                                    {mesActual} 
                                    <span className={style.textBottomLeft}>
                                        Mes Actual
                                    </span>
                                </span>
                                <span className={style.numberBottom}>
                                    {mesAnterior}
                                    <span className={style.textBottomLeft}>
                                        Mes anterior
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <Comisiones value="25" mesActual="75k" mesAnterior="200k"/>
            </div>
    )
}

export default cuentas;
