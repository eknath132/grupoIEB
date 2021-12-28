import style from '../../styles/principal.module.css';
import Image from 'next/image';
import Tenencia from './tenencia';
import Cuentas from './cuentas';
import Cauciones from './cauciones';
import Apalancamiento from './apalancamiento';
import Compliance from './compliance';
import Info from './info'


const index = ({precio}) => {
    return (
        <>
            <div className="row">
                <div className='col' style={{marginRight:'40px'}}>
                    <div className={`${style.header} row`}>
                        <div className="col-md-12 col-lg-6 p-3">
                            <div className={`${style.disponibleH5} col-xs-12`}>
                                Listado
                            </div>
                            <div className={`${style.disponibleH4} col-xs-12`}>
                                Disponibles
                            </div>
                        </div>
                        <div className={`${style.contenedorSigno} col-md-12 col-lg-6 col-xl-6`}>
                            <div className={`${style.signoFlex} col-xs-12`}>
                                <div className={style.menuIcons}>
                                    <Image 
                                        src={'/signoDolar.png'}
                                        alt={'alt'}
                                        width={20}
                                        height={30}
                                     />
                                </div>
                                <p>
                                    75Bil
                                </p>
                                <div className={style.arrowUp}>
                                    <Image
                                        src={'/arrowUp.png'}
                                        alt={'flechaArriba'}
                                        width={12}
                                        height={12}
                                    />
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-12 col-lg-6 p-3'>
                            <Tenencia monto='75.000'/>
                        </div>
                        <div className='col-md-12 col-lg-6 p-3'>
                            <Tenencia monto='6 Bil'/>
                        </div> 
                    </div>
                    <div className='row'>
                        <div className={`${style.tenenciaSee} col-sm-12`}>
                            Ver más
                        </div>
                    </div>
                </div>
                <div className='col-sm-12 col-md-6'>
                    <div className='col-sm-12'>
                        <Cuentas value="46" mesActual="25" mesAnterior="100" /> 
                    </div>
                </div>
            </div>
            <div className='row mt-5'>
                <Cauciones/>
                <Apalancamiento/>
                <Compliance/>
                <Info/>
            </div>
        </>
    )
}

export default index;
