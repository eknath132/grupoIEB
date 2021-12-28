import Image from 'next/image'
import Informacion from '../components/Header/informacion'
import Avatar from '../components/Header/avatar'
import Layout from '../components/layout';
import Styles from '../styles/Home.module.css';
import Grid from '@mui/material/Grid';
import Principal from '../components/Principal'

const Index = ({data}) => {
    return (
        <Layout
            title= "Inicio"
            description={"Pantalla Principal"}
        >
            <header className='container'>
                <Informacion
                    title={'Inicio| Panel principal'}
                    name={'Productor 1'}
                    subtitle={'IEB'}
                    active={'Activo'}
                />
            </header>

            <section style={{marginTop: '10px'}}>
                <div className="container">
                    {/* <div> */}
                        <Principal precio={'75 Bil'}/>
                    {/* </div> */}
                </div>
            </section>
        </Layout>
    )
}

export default Index;

export async function getServerSideProps() {
    const res = await fetch('https://reqres.in/api/users/');
    const {data} = await res.json();
    return {
        props: {data}
    }
}