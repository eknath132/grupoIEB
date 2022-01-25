import {useState} from 'react'
import Informacion from '../../components/Header/informacion'
import Layout from '../../components/layout';
import DisponiblesScreen from '../../components/Disponibles';
import Styles from '../../styles/Home.module.css';

const Disponibles = ({data}) => {
    
    return (
        <Layout
            title= "Disponibles"
            description={"Pantalla Disponibles"}
        >
            <header className={Styles.container}>
                <Informacion
                    title={'General | Disponibles'}
                    name={'Disponibles'}
                    subtitle={'IEB'}
                    active={'Activo'}
                />
            </header>

            <section style={{marginTop: '10px'}}>
                <div>
                    <DisponiblesScreen 
                        data={data}
                    />
                </div>
            </section>
        </Layout>
    )
}

export default Disponibles;

export async function getServerSideProps() {
    
    const res = await fetch('https://ieb-qotc1wzgg-peralesazarel-gmailcom.vercel.app/api/hello');
    const data = await res.json();
    return {
        props: {data}
    }
}