import style from '../../styles/compliance.module.css';
import Card from './card'
const boxRight = () => {
    return (
        <div className='row'>
            <div className='col-md-12 col-xl-6'>
                <div className={`${style.cuentaBox} col-md-12`}>
                    <div className={style.cuentaBoxLeft}> 
                        <h3>
                            Total de
                        </h3>
                        <h4>
                            cuenta
                        </h4>
                    </div>
                    <div className={style.cuentaBoxRight}> 
                        <h3>
                            2500
                        </h3>
                    </div>
                </div>
            </div>
            <div className='col-md-12 col-xl-6'>
                <div className={`${style.revisarBox} col-md-12`}>
                    <div className={style.cuentaBoxLeft}> 
                        <h3>
                            Por
                        </h3>
                        <h4>
                            revisar
                        </h4>
                    </div>
                    <div className={style.cuentaBoxRight}> 
                        <h3>
                            300
                        </h3>
                    </div>
                </div>
            </div>
            <Card/>
            
        </div>
    )
}

export default boxRight;