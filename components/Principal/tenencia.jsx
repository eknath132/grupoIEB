import style from '../../styles/principal.module.css'
import Image from 'next/image'

const tenencia = ({monto}) => {
    return (
        <div>
            <div className={style.tenenciaBox}>
                <div className={style.tenenciaIcons}>
                    <Image 
                        src={'/signoDolar.png'}
                        alt={'alt'}
                        width={20}
                        height={30}
                        />
                </div>
                <div className={style.tenenciaMonto}>
                    {monto}
                    <div className={style.tenenciaP}>
                        Tenencia en dolares
                    </div>
                </div>
            </div>
        </div>
    )
}

export default tenencia
