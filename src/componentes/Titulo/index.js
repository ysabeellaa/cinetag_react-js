import styles from './titulo.module.css';

export default function Titulo({children}){
    return(
        <div className={styles.texto}>
            {children} {/* pode ser elementos ou textos, pode ser h1 ou qualquer outro h */}
        </div>
    )
}