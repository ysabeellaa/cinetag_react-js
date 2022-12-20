import { useFavoritoContext } from 'contextos/Favoritos';
import styles from './card.module.css';
import iconeFavoritar from './favoritar.png';
import iconeDesfavoritar from './desfavoritar.png';
import { Link } from 'react-router-dom';

export default function Card({capa, titulo, id}){
    const {favorito, adicionarFavorito} = useFavoritoContext(); /* importa o return  */
    const ehFavorito = favorito.some((fav) => fav.id ===id); /* verifica se o card esta na lista de favoritos, se sim, retorna true */
    const icone =  ehFavorito ? iconeDesfavoritar :  iconeFavoritar; 

    return(
        <div className={styles.container}>
            <Link className={styles.link} to={`/${id}`}>
                <img src={capa} alt={titulo} className={styles.capa}/>
                <h2>{titulo}</h2>
            </Link>
            <img src={icone}
                alt="Favoritar filme"
                className={styles.favoritar}
                onClick={() =>{
                    adicionarFavorito({id, titulo, capa})
                }}
                />
        </div>
    )
}

