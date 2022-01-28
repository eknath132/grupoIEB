import {useState} from 'react'
import Informacion from '../../components/Header/informacion'
import Layout from '../../components/layout';
import TenenciaScreen from '../../components/Tenencia';
import Styles from '../../styles/Home.module.css';

const Disponibles = () => {
    
    return (
        <Layout
            title= "Tenencias"
            description={"Pantalla Tenencias"}
        >
            <header className={Styles.container}>
                <Informacion
                    title={'Tenencias | Tenencia global'}
                    name={'Usuario principal'}
                    subtitle={'IEB'}
                    active={'Activo'}
                />
            </header>

            <section style={{marginTop: '10px'}}>
                <div>
                    <TenenciaScreen />
                </div>
            </section>
        </Layout>
    )
}

export default Disponibles;

// export async function getServerSideProps() {
    
//     const res = await fetch('https://ieb-qotc1wzgg-peralesazarel-gmailcom.vercel.app/api/hello');
//     const data = await res.json();
//     return {
//         props: {data}
//     }
// }