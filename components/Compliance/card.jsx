import style from '../../styles/compliance.module.css';
import Avatar from '@mui/material/Avatar';
import Image from 'next/image';

const Card = () => {
    return (
        <div className='col-md-12'>
            <div className={`${style.cuentaCard} col-md-12`}>
                <div className='row'>
                    <div className='col-lg-12 col-xl-6' style={{display:'flex'}}>
                        <Avatar alt="Remy Sharp"   sx={{ width: 56, height: 56}}/>
                        <div className={style.cardCliente}>
                            CLIENTE
                            <p>
                                N° comitente
                            </p>
                        </div>
                    </div>
                    <div className='col-lg-12 col-xl-5'>
                        <p className={style.cuentaType}>
                            Tipo de cliente
                        </p>
                    </div>
                </div>
                <hr style={{backgroundColor:'#3D5A6C'}}/>
                <div className={`${style.cuentaState} col-md-12`}>
                    Estado de cuenta
                </div>
                <div className='row' style={{marginTop:'20px', padding:'10px 0'}}>
                    <div className='col-md-9' style={{display:'flex'}}>
                        <div style={{height:'10px', marginTop:'10px', marginRight:'10px'}}>
                            <Image
                                src={'/document.png'}
                                alt='documento'
                                width={20}
                                height={20}
                            />
                        </div>
                        <div className={style.cardDocument}>
                            Documentacion proxima a vencer
                            <p>
                                02 de enero 2022
                            </p>
                        </div>
                    </div>
                    <div className='col-md-2'>
                        <button className={`${style.cardButton} btn`}>
                            Actualizar
                        </button>
                    </div>
                </div>
                <div className='row' style={{marginTop:'20px', padding:'10px 0'}}>
                    <div className='col-md-9' style={{display:'flex'}}>
                        <div style={{height:'10px', marginTop:'10px', marginRight:'10px'}}>
                            <Image
                                src={'/document.png'}
                                alt='documento'
                                width={20}
                                height={20}
                            />
                        </div>
                        <div className={style.cardDocument}>
                            Documentacion proxima a vencer
                            <p>
                                02 de enero 2022
                            </p>
                        </div>
                    </div>
                    <div className='col-md-2'>
                        <button className={`${style.cardButton} btn`}>
                            Actualizar
                        </button>
                    </div>
                </div>
                    <div className='row' style={{marginTop:'20px', padding:'10px 0'}}>
                    <div className='col-md-9' style={{display:'flex'}}>
                        <div style={{height:'10px', marginTop:'10px', marginRight:'10px'}}>
                            <Image
                                src={'/document.png'}
                                alt='documento'
                                width={20}
                                height={20}
                            />
                        </div>
                        <div className={style.cardDocument}>
                            Documentacion proxima a vencer
                            <p>
                                02 de enero 2022
                            </p>
                        </div>
                    </div>
                    <div className='col-md-2'>
                        <button className={`${style.cardButton} btn`}>
                            Actualizar
                        </button>
                    </div>
                </div>
                <div className={`${style.cardButtonBox} col-md-12`}>
                        <button className={`${style.cardRevisar} btn`}> 
                            Revisar todo
                        </button>
                </div>
            </div>
        </div>
    )
}

export default Card;