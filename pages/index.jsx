import Image from 'next/image'
import Informacion from '../components/Header/informacion'
import Avatar from '../components/Header/avatar'
import Layout from '../components/layout';
import Styles from '../styles/Home.module.css';
import Grid from '@mui/material/Grid';
import Disponibles from '../components/Principal/disponibles'
import Obejtivo from '../components/Principal/objetivo'
import Cauciones from '../components/Principal/cauciones';

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
                <Grid container flex={'flex'} wrap='wrap'>
                    <Grid item xs={5.5} style={{marginRight: '20px'}}>
                        <Disponibles precio={'75 Bil'}/>
                    </Grid>
                    <Grid item xs={5.5}>
                        <Obejtivo/>
                    </Grid>
                    <Grid item xs={2.5} style={{marginRight:'10px', marginTop:'10px'}}>
                        <Cauciones title={'Cauciones'} number={'55'} message={'Próximos a vencer'}/>
                    </Grid>
                    <Grid item xs={2.5} style={{marginRight:'10px', marginTop:'10px'}}>
                        <Cauciones title={'Apalancamiento'} number={'100Bil'} message={'Total excedido'}/>
                    </Grid>
                    <Grid item xs={2.5} style={{background: 'blue', marginRight:'10px', marginTop:'10px'}}>
                        <Cauciones title={'Cauciones'} number={'55'} message={'Próximos a vencer'}/>
                    </Grid>
                    <Grid item xs={3.5} style={{background: 'pink', marginTop:'10px'}}>
                        <Cauciones title={'Cauciones'} number={'55'} message={'Próximos a vencer'}/>
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