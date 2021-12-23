import style from '../../styles/principal.module.css';

const cauciones = ({title, number, message}) => {
    return (
        <>
            <div className={style.caucionesContainer}>
                    {title}
                <div className={title !== 'Cauciones' ? style.apalancamiento : style.caucionesNumber}>
                    <h1> {number} </h1>
                    <h3> {message}</h3>
                </div>
            </div>
        </>
    )
}

export default cauciones
