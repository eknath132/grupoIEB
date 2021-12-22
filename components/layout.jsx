import Head from "next/head";
import Router from 'next/router'
import Link from "next/link";
import Image from "next/image";

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
    }
]

export default function layout({children, title, description}) {
    return (
        <div className={styles.container}>
            <Head>
                <title> {title} </title>
                <meta name="description" content={description}/> 
            </Head>
            <div> 
                <nav>
                    <div className={styles.logo} >
                        <Image 
                            src={'/iconPrincipal.png'}
                            alt="Icono Principal"
                            width={45}
                            height={45}
                        />
                    </div>
                    <ul className={styles.ul}> 
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
                                        className={styles.center}
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
                </nav>
            </div>

                <main>
                    {children}
                </main>
        </div>
    )
}
