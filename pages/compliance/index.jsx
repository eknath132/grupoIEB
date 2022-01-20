import Informacion from '../../components/Header/informacion'
import Layout from '../../components/layout';
import ComplianceScreen from '../../components/Compliance';
import Styles from '../../styles/Home.module.css';

const Compliance = () => {
    return (
        <Layout
            title= "Compliance"
            description={"Pantalla Principal"}
        >
            <header className={Styles.container} >
                <Informacion
                    title={'Compliance | Cuentas'}
                    name={'Estado de cuenta'}
                    subtitle={'IEB'}
                    active={'Activo'}
                />
            </header>

            <section style={{marginTop: '10px'}}>
                <div>
                    <ComplianceScreen/>
                </div>
            </section>
        </Layout>
    )
}

export default Compliance;

export async function getServerSideProps() {
    const res = await fetch('https://reqres.in/api/users/');
    const {data} = await res.json();
    return {
        props: {data}
    }
}