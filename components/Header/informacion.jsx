import Styles from '../../styles/about.module.css';

export default function informacion({title, subtitle}) {
    return (
        <div className={Styles.informacion}>
            <h3> {title} </h3>
            <h1 className={Styles.productor}> {subtitle} </h1> 
        </div>
    )
}
