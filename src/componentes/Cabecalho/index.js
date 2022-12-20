import { Link } from "react-router-dom";
import logo from './logo.png';
import styles from './cabecalho.module.css';
import CabecalhoLink from  'componentes/CabecalhoLink';
 {/* styles: modularização css: nome para o arquuivo e utilizar o className, evita conflitos*/}

export default function Cabecalho(){
    return(
        <header className={styles.cabecalho}>
            <Link to="./"> {/* link funciona como uma âncora  */}
                <img src={logo} alt="Logo do cinetag"></img>
            </Link>
            <nav>
                <CabecalhoLink url=".">
                    Home {/* children */}
                </CabecalhoLink>
                <CabecalhoLink url='./Favoritos'>
                    Favoritos
                </CabecalhoLink>
            </nav>
        </header>
    )
}