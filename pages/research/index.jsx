import Informacion from '../../components/Header/informacion'
import Layout from '../../components/layout';
import Styles from '../../styles/Home.module.css';
import ResearchComponent from '../../components/Research'

const Research = () => {
    return (
        <Layout
            title= "Research"
            description={"Pantalla Research"}
        >
            <header className={`${Styles.container}`}>
                <Informacion
                    title={'Informes | Research'}
                    name={'Research'}
                    subtitle={'IEB'}
                    active={'Activo'}
                />
            </header>

            <section>
                <div className="container">
                    <ResearchComponent />
                </div>
            </section>
        </Layout>
    )
}

export default Research;
