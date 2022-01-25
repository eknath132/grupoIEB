/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { useState } from 'react';
import style from '../../styles/compliance.module.css';
import BoxRight from './boxRight';
import Table from './tableCompliance';
import Image from 'next/image';
import Icon from '@mui/material/Icon';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import SelectInput from '../../util/selectInput';

const Cuentas = () => {

    const [nombre , setNombre] = useState('')
    const [estado, setEstado] = useState('')

    const columns = [
        { 
            id: 'name',
            label: 'Nombre',
            maxWidth: 80,
            align: 'left',            
        },
        { 
            id: 'count',
            label: 'Cuenta',
            maxWidth: 80,
            align: 'left',
            color: '#779BB2'
        },
        {
          id: 'state',
          label: 'Estado de cuenta',
          minWidth: 170,
          align: 'left'
        }
    ];

    const handdleActiva = (nombre, estado) => {
        setNombre(nombre)
        setEstado(estado)
    }

    console.log(nombre, estado)
      
    return (
        <div className="row mt-4">
            <div className={` ${style.cuentasBox} col-md-12 col-lg-7`}>
                <div className={style.cuentasTitle}>
                    <p>
                        Cuentas
                    </p>
                    <div style={{display:'flex'}}>
                        {/* <div className={style.cuentasOrdenar}> */}
                            <SelectInput
                                minWidth= {100}
                                marginRight = {'0'}
                                marginTop= {'-5px'}
                                label = 'Ordenar'
                                options= {[ 
                                    {
                                        value: 'Ordenar1',
                                        label:'Ordenar1'
                                    },
                                    {
                                        value: 'Ordenar2',
                                        label:'Ordenar2'
                                    },
                                    {
                                        value: 'Ordenar3',
                                        label:'Ordenar3'
                                    },

                                ]}
                            />
                        {/* </div> */}
                        <div className={style.cuentasButtons}>
                            <Icon style={{root: {textAlign:'center'}, fontSize:'30px', padding:'10px', marginTop:'-5px', marginLeft:'auto', cursor:'pointer'}}>
                                <img style={{height:'250%', marginTop:'-43px', marginLeft: '-8px'}} src="/refresh.svg"/>
                            </Icon>
                        </div>
                        <div className={style.cuentasButtons}>
                            <Icon style={{root: {textAlign:'center'}, fontSize:'30px', padding:'10px', marginTop:'-5px', marginLeft:'auto', cursor:'pointer'}}>
                                <img style={{height:'250%', marginTop:'-43px', marginLeft: '-8px'}} src="/arrowDown.svg"/>
                            </Icon>
                        </div>
                        <div className={style.cuentasButtons}>
                            <Icon style={{root: {textAlign:'center'}, fontSize:'30px', padding:'10px', marginTop:'-5px', marginLeft:'auto', cursor:'pointer'}}>
                                <img style={{height:'250%', marginTop:'-43px', marginLeft: '-8px'}} src="/moreH.svg"/>
                            </Icon>
                        </div>
                    </div>
                </div>
                <Table columns={columns} handdleActiva={handdleActiva}/>
            </div>
            <div className="col-md-12 col-lg-5 ">
                <BoxRight nombre={nombre} estado={estado}/>
            </div>
        </div>
    )
}

export default Cuentas