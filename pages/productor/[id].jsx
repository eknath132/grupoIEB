import Image from 'next/image'
import Informacion from '../../components/Header/informacion'
import Avatar from '../../components/Header/avatar'
import Layout from '../../components/layout';
import home from '../../styles/Home.module.css';

const Id = ({data, warning}) => {
    return (
        <Layout
            title= "About"
            description={"Descripcion del about"}
        >
            <header className='container'>

                <Informacion
                    title={'Inicio| Panel principal'}
                    name={data?.first_name}
                    subtitle={'IEB'}
                    active={'Activo'}
                    avatar={data?.avatar}
                />
            </header>
        </Layout>
    )
}

export default Id;

export async function getServerSideProps(context) {
    const {params} = context
    const res = await fetch(`https://reqres.in/api/users/${params.id}`);
    const {data} = await res.json();
    return {
        props: {data}
    }
}