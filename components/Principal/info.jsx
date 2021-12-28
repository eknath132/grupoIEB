/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from 'react';
import style from '../../styles/principal.module.css';
import Image from 'next/image'

const info = () => {
    const [selected, setSelected] = useState(true)

    return (
        <div className='col-md-6 col-lg-5 col-xl-4'>
            <div className={`${style.infoRow} row`}> 
                <div className={`${style.infoTitle} col-md-6`}>
                    Dolar
                    <p>
                        7000
                    </p>
                </div>
                <div className={`${style.infoRigth} col-md-6`}>
                    100Mil
                    <p>
                        Total
                    </p>
                </div>
            </div>

            <div className={`${style.infoSwitch} row`}> 
                <div className={selected ?`${style.infoSelect} col-md-6`: `${style.infoDisabled} col-md-6`} onClick={() => setSelected(true)}>
                    Novedades
                </div>
                <div className={!selected ?`${style.infoSelect} col-md-6`: `${style.infoDisabled} col-md-6`} onClick={() => setSelected(false)}>
                    Research
                </div>
            </div>

            <div className={`${style.infoCarrousel}`}>
                <div className='row'>
                    <div className={`${style.infoButtonLeft} col`}>
                            {`<`}
                    </div>
                    <div className={`${style.infoLeft} col`}>
                            Tarjeta con info
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Asperiores dolorem nostrum quas quae, voluptatibus facilis eos veritatis nesciunt excepturi 
                            </p>
                    </div>
                    <div className={`${style.infoColImage} col`}>
                            <Image
                                src={'/info.png'}
                                alt='información'
                                width={150}
                                height={200}
                                className={style.infoImage}
                            />
                    </div>
                    <div className={`${style.infoButtonRight} col`}>
                        {`>`}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default info