import Head from "next/head";
import Router from 'next/router'
import Link from "next/link";
import Image from "next/image";
import Tooltip from '@mui/material/Tooltip';

import styles from "../styles/layout.module.css";

const menu = [
    {
        url: '/',
        name: 'Inicio',
        img:'/casa.png'
    },
    {
        url: '/',
        name: 'Tenencia',
        img:'/casa.png'
    },
    {
        url: '/',
        name: 'Mercados',
        img:'/casa.png'
    },
    {
        url: '/',
        name: 'Procesos',
        img:'/procesos.png'
    },
    {
        url: '/',
        name: 'Reportes',
        img:'/reportes.png'
    },
]

export default function layout({children, title, description}) {
    return (
        <div className={styles.container}>
            <Head>
                <title> {title} </title>
                <meta name="description" content={description}/>
            </Head>
            <div className="row">
                <nav className={`${styles.nav} col-sm-1`} >
                        <div className={`${styles.logo} col-12`}> 
                            <Image 
                                src={'/IconPrincipal.png'}
                                alt="Icono Principal"
                                width={40}
                                height={40}
                            />
                        </div>
                        <ul className={ `${styles.ul} col-12`}>
                                <li className={styles.li}> 
                                    <Link href={"/about/1"}>
                                        <a>
                                            <Image
                                                src={'/campana.png'}
                                                alt="imagen1"
                                                width={25}
                                                height={30}
                                            />
                                        </a>
                                    </Link> 
                                </li>
                            {menu.map(item => (
                                <div key={item.name}>
                                    <div className={styles.menuIcons} onClick={e => Router.push(item.url, item.url)}>
                                        <Image
                                            src={item.img}
                                            alt={item.name}
                                            width={25}
                                            height={25}
                                        />
                                    </div>
                                    <li className={styles.li}> 
                                        <Link href={"/"}>
                                            <a>
                                                {item.name} 
                                            </a>
                                        </Link> 
                                    </li>
                                </div>
                            ))}
                        </ul>
                    <div className={styles.contenedorHelp}>
                        <div className={styles.menuHelp} onClick={e => Router.push(item.url, item.url)}>
                            <Image
                                src={'/signoInt.png'}
                                alt={'Ayuda'}
                                width={25}
                                height={25}
                            />
                        </div>
                    </div>
                </nav>
                <div className="col-xs-12 col-sm-11 col-xxl-11">
                    <main>
                        {children}
                    </main>
                </div>
            </div>
            {/* <div className="row">
                <div className="col-sm-1" style={{background:'red'}}>
                    ASDSAD
                </div>

                <div className='col-sm-11' style={{background:'yellow'}}>
                    asdasdasdasds Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero hic provident quibusdam voluptates quae? Laborum eos veniam impedit praesentium debitis et. Inventore tempora ratione nam, repudiandae voluptate omnis eligendi vero!
                </div>
            </div> */}
        </div>
    )
}
