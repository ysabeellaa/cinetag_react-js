import styles from './naoEncontrada.module.css';

export default function NaoEncontrada(){
    return(
        <section className={styles.container}>
            <h2>Erro!</h2>
            <p>Página não encontrada</p>
        </section>
    )
}