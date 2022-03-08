import Image from 'next/image'
import Informacion from '../components/Header/informacion'
import Avatar from '../components/Header/avatar'
import Layout from '../components/layout';
import Styles from '../styles/Home.module.css';
import Grid from '@mui/material/Grid';
import Principal from '../components/Principal'

const Index = () => {
    return (
        <Layout
            title= "Inicio"
            description={"Pantalla Principal"}
        >
            <section style={{height:'92%'}}>
                <Principal precio={'75 Bil'}/>
            </section>
        </Layout>
    )
}

export default Index;