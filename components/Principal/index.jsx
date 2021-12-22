import style from '../../styles/principal.module.css'
import Image from 'next/image'

const index = ({precio}) => {
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
                        width={15}
                        height={15}
                    />
                </div>    
                </div>
            </div>
            <div>
            </div>
        </>
    )
}

export default index;
