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
            title= "About"
            description={"Descripcion del about"}
        >
            <header className={Styles.header}>
                <Informacion
                    title={'Inicio| Panel principal'}
                    subtitle={'Productor 1'}
                />

                <div>
                    <Avatar
                        title={'IEB'}
                        subtitle={'Activo'}
                    />
                </div>
            </header>

            <section style={{marginTop: '10px'}}>
                <Grid container>
                    <Grid item xs={5}style={{marginRight: '20px', minWidth:'500px'}}>
                        <Principal precio={'75 Bil'}/>
                    </Grid>
                    <Grid item lg={5.5}  style={{minWidth:'400px'}}>
                    </Grid>

                </Grid>
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