/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import style from '../../styles/principal.module.css'
import Image from 'next/image';
import Icon from '@mui/material/Icon';

const tenencia = ({monto}) => {
    return (
        <div>
            <div className={style.tenenciaBox}>
                <Icon style={{root: {textAlign:'center'}, fontSize:'40px', background:'#DCEAE3', borderRadius:'70px', padding:'10px', marginTop:'10px', marginLeft:'auto'}}>
                    <img style={{height:'300%', marginTop:'-3px', marginLeft:'2px'}} src="/dolar.svg"/>
                </Icon>
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
