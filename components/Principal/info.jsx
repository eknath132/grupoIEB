/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from 'react';
import style from '../../styles/principal.module.css';
import Image from 'next/image';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


const info = () => {
    const [selected, setSelected] = useState(true)

    return (
        <div className={`${style.infoBox} col-md-6 col-lg-4 col-xl-4`}>
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
                    <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                        <ArrowBackIosNewIcon sx={{marginTop:'50px', color:'#A7C9B9'}}/>
                        <div className={`${style.infoLeft} col-md-6`}>
                                Tarjeta con info
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                    Asperiores dolorem nostrum quas quae, voluptatibus facilis eos veritatis nesciunt excepturi 
                                </p>
                        </div>
                        <div className={`${style.infoColImage} col-md-4`}>
                                <Image
                                    src={'/info.png'}
                                    alt='información'
                                    width={100}
                                    height={100}
                                    className={style.infoImage}
                                />
                        </div>
                        <ArrowForwardIosIcon sx={{marginTop:'50px', color:'#A7C9B9'}}/>
                    </div>
                    <div className={style.infoSee}>
                        Ver todos
                        <ArrowForwardIcon sx={{color:'#365848'}}/>
                    </div>
            </div>
        </div>
    )
}

export default info