import style from '../../styles/principal.module.css'
import BorderLinearProgress from '../../util/progress'

const objetivo = () => {
    return (
        <>
            <div className={style.objetivoBox}>
                <div className={style.objetivoCounts}>
                    <div>
                        <h5> Apertura de </h5>
                        <h6> Cuentas</h6>
                    </div>
                    <div>
                        <h5 style={{fontSize:'32px', marginTop:'5px'}}> 25 </h5>
                        <h6 style={{fontSize:'12px', textAlign:'right'}}> Total</h6>
                    </div>
                </div>
                <div style={{display:'flex', justifyContent:'end'}}>
                    <div className={style.objetivoScope}>
                        Lejos del objetivo
                    </div>
                </div>
                <div style={{display:'flex', justifyContent:'center', marginTop:'10px', marginLeft:'100px'}}>
                    <div>
                        <BorderLinearProgress variant="determinate" value={75} />   
                    </div>
                </div>
            </div>
            <div className={style.objetivoBox} style={{marginTop:'20px'}}>
                <div className={style.objetivoCounts}>
                    <div>
                        <h6> Comisiones </h6>
                        <h5> del mes </h5>
                    </div>
                    <div>
                        <h5 style={{fontSize:'32px', marginTop:'5px'}}> 95k </h5>
                        <h6 style={{fontSize:'12px', textAlign:'right'}}> Total</h6>
                    </div>
                </div>
                <div style={{display:'flex', justifyContent:'end'}}>
                    <div className={style.objetivoScope}>
                        Lejos del objetivo
                    </div>
                </div>
                <div style={{display:'flex', justifyContent:'center', marginTop:'10px', marginLeft:'100px'}}>
                    <div>
                        <BorderLinearProgress variant="determinate" value={75} />   
                    </div>
                </div>
            </div>  
        </>
    )
}

export default objetivo;
