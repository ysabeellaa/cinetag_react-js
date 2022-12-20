import styles from './cabecalhoLink.module.css'
import { Link } from 'react-router-dom'

export default function CabecalhoLink({url, children}){ /* componentes dinâmicos: cada um vai pra uma url diferente (enviando com atributo url) - enviando um children também que é todo o valor que colocar dentro do componente. Logo, abre o cabecalho link e envia o atributo url e antes de fazer o fechamento, se coloca o que vai ser o filho*/
    return(
        <Link to={url} className={styles.link}>
            {children} {/* não tem o que importar */}
        </Link>
    )

}