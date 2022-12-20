import styles from './favoritos.module.css';
import Banner from "componentes/Banner";
import Card from "componentes/Card";
import Titulo from "componentes/Titulo";

import { useFavoritoContext } from 'contextos/Favoritos';

export default function Favoritos(){
    const { favorito } = useFavoritoContext();

    

    return(
        <>
            <Banner imagem="favoritos"/>
            <Titulo>
                <h1>Um lugar para guardar seus vídeos e filmes!</h1>
            </Titulo>
            <section className={styles.container}>
               {favorito.map((fav) =>{
                return <Card {...fav} key={fav.id}/>
               })}

            </section>
        </>
    )
}