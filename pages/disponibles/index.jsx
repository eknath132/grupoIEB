import {useState} from 'react'
import Informacion from '../../components/Header/informacion'
import Layout from '../../components/layout';
import DisponiblesScreen from '../../components/Disponibles';

const Disponibles = ({data}) => {
    
    return (
        <Layout
            title= "Disponibles"
            description={"Pantalla Disponibles"}
        >
            <header className='container'>
                <Informacion
                    title={'General | Disponibles'}
                    name={'Disponibles'}
                    subtitle={'IEB'}
                    active={'Activo'}
                />
            </header>

            <section style={{marginTop: '10px'}}>
                <div className="container">
                    <DisponiblesScreen 
                        // data={data}
                    />
                </div>
            </section>
        </Layout>
    )
}

export default Disponibles;

// export async function getServerSideProps() {
    
//     const res = await fetch('https://ieb-peralesazarel-gmailcom.vercel.app/api/hello');
//     const data = await res.json();
//     return {
//         props: {data}
//     }
// }