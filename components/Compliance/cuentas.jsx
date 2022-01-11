import { useState } from 'react';
import style from '../../styles/compliance.module.css';
import BoxRight from './boxRight';
import Table from './tableCompliance';
import Image from 'next/image';

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
                        <div className={style.cuentasOrdenar}>
                            Ordenar
                            <image>
                                <Image
                                    src={'/arrowSmallDown.png'}
                                    alt='restaurar'
                                    width={8}
                                    height={8}
                                />
                            </image>
                        </div>
                        <div className={style.cuentasButtons}>
                            <Image
                                src={'/refresh.png'}
                                alt='restaurar'
                                width={20}
                                height={20}
                            />
                        </div>
                        <div className={style.cuentasButtons}>
                            <Image
                                src={'/arrowDown.png'}
                                alt='flecha'
                                width={20}
                                height={20}
                            />
                        </div>
                        <div className={style.cuentasButtons}>
                            <Image
                                src={'/moreH.png'}
                                alt='flecha'
                                width={20}
                                height={20}
                            />
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