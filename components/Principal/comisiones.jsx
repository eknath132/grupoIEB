import style from '../../styles/principal.module.css'
import CircleIcon from '@mui/icons-material/Circle';


const comisiones = ({value, mesAnterior, mesActual}) => {
    const progress = (value) => {
        if(value <= '25') {
            return (
                <div 
                    className={`${style.progress25} progress-bar`} 
                    role="progressbar" style={{width: "25%"}} 
                    aria-valuenow="15" aria-valuemin="0" 
                    aria-valuemax="100">
                </div>
            )
        }
        if(value >= '25' && value <= '50') {
            return (
                <div 
                    className={`${style.progress50} progress-bar`} 
                    role="progressbar" style={{width: "50%"}} 
                    aria-valuenow="15" aria-valuemin="0" 
                    aria-valuemax="100">
                </div>
            )
        }
        if(value >= '50' && value <= '75') {
            return (
                <div 
                    className={`${style.progress75} progress-bar`} 
                    role="progressbar" style={{width: "75%"}} 
                    aria-valuenow="15" aria-valuemin="0" 
                    aria-valuemax="100">
                </div>
            )
        }
    
        return (
            <div 
                className={`${style.progress100} progress-bar`} 
                role="progressbar" style={{width: "100%"}} 
                aria-valuenow="15" aria-valuemin="0" 
                aria-valuemax="100">
            </div>
        )
    }

    return (
            <div className='row'>
                <div className='col-md-6' style={{padding:' 5px 10px', height:'100px',alignItems:'center', position:'relative'}}>
                    <div className={`${style.objetivoButton}`} style={{position:'absolute', right:0, top:0, marginRight:'40px'}}>
                        <p>
                            lejos del objetivo
                        </p>
                    </div>
                    <div style={{display:'flex', width:'100%', height:'100%',justifyContent:'space-between', alignItems:'center', borderRadius:'8px', padding:'0 20px', background:'#212E36', color:'white'}}>
                        <div>
                            <div>
                                25 total
                            </div>
                            <div style={{fontSize:'14px'}}>
                                Aperturas de cuentas
                            </div>
                        </div>
                        <div>
                            <div style={{textAlign:'end'}}>
                                {` % ${value}`}
                            </div>
                            <div className="progress" style={{width:'100px'}}>
                                {progress(value)}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-6' style={{padding:'10px', height:'100px',alignItems:'center',position:'relative'}}>
                    <div className={`${style.objetivoButton}`} style={{position:'absolute', right:0, top:0, marginRight:'40px'}}>
                        <p>
                            lejos del objetivo
                        </p>
                    </div>
                    <div style={{display:'flex', width:'100%', height:'100%',justifyContent:'space-between', alignItems:'center', borderRadius:'8px', padding:'0 20px', background:'#212E36', color:'white'}}>
                        <div>
                            <div>
                                25 total
                            </div>
                            <div style={{fontSize:'14px'}}>
                                Aperturas de cuentas
                            </div>
                        </div>
                        <div>
                            <div style={{textAlign:'end'}}>
                                {` % ${value}`}
                            </div>
                            <div className="progress" style={{width:'100px'}}>
                                {progress(value)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
    )
}

export default comisiones;
