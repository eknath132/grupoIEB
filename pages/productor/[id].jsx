import Image from 'next/image'
import Informacion from '../../components/Header/informacion'
import Avatar from '../../components/Header/avatar'
import Layout from '../../components/layout';
import home from '../../styles/Home.module.css';

const Id = ({data, warning}) => {
    console.log('resData', data)
    return (
        <Layout
            title= "About"
            description={"Descripcion del about"}
        >
            <div className={home.header}>

                <Informacion
                    title={'Inicio| Panel principal'}
                    subtitle={data?.first_name}
                />

                <div>
                    <Avatar
                        title={'IEB'}
                        subtitle={'Activo'}
                        avatar={data?.avatar}
                    />
                </div>
            </div>
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