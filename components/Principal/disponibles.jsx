import style from '../../styles/principal.module.css'
import Image from 'next/image'

const disponibles = ({precio}) => {
    return (
        <>
            <div className={style.header}>
                <div style={{marginTop:'10px'}}>                
                    <h5>Listado</h5>
                    <h3>Disponibles</h3>
                </div>
                <div style={{display: 'flex', padding: 0}}>
                    <div className={style.menuIcons}>
                        <Image 
                            src={'/signoDolar.png'}
                            alt={'alt'}
                            width={20}
                            height={30}
                        />
                    </div>
                    <div style={{marginLeft: '10px'}}>
                        <h1> {precio} </h1>
                        <p style={{marginTop: '-15px', textAlign: 'right'}}> Total</p>
                    </div>
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
            <div style={{display:'flex', justifyContent:'space-between', padding:'20px', flexWrap:'wrap'}}>
                <div className={style.tenenciaBox}>
                    <div className={style.tenencia}>
                        <Image 
                            src={'/signoDolar.png'}
                            alt={'alt'}
                            width={20}
                            height={30}
                        />
                    </div>
                    <div className={style.tenenciaText}>
                        <h1> {precio} </h1>
                        <p> Tenencia en pesos</p>
                    </div>  
                </div>
                <div className={style.tenenciaBox}>
                    <div className={style.tenencia}>
                        <Image 
                            src={'/signoDolar.png'}
                            alt={'alt'}
                            width={20}
                            height={30}
                        />
                    </div>
                    <div className={style.tenenciaText}>
                        <h1> {precio} </h1>
                        <p> Tenencia en dolares</p>
                    </div>
                </div>
            </div>
            <div style={{display:'flex', justifyContent:'end' , color:'#646464'}}>
                <div style={{marginRight:'10px'}}>
                    Ver más
                </div>
                <Image
                    src={'/arrowRight.png'}
                    alt={'flechaArriba'}
                    width={20}
                    height={20}
                />
            </div>
        </>
    )
}

export default disponibles;
