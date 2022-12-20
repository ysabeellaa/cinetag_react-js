import Banner from "componentes/Banner";
import Card from "componentes/Card";
import Titulo from "componentes/Titulo";
import { useEffect, useState } from "react";
/* import videos from 'json/db.json'; */
import styles from './inicio.module.css';

export default function Inicio(){
    const [videos, setVideos] = useState([]);

    useEffect(() => { /* useEffect trata de realizar ações após as renderizações da página */
        fetch('https://my-json-server.typicode.com/ysabeella/cinetag-api/videos') /* criação da requisição da api */
            .then(resposta => resposta.json()) /* pegou os dados e converteu para json */
            .then(dados => {
                setVideos(dados)
            })
    }, [])

    return(
        <>
            
            <Banner imagem="home"/>
            <Titulo>
                <h1>Um lugar para guardar seus vídeos e filmes!</h1>
            </Titulo>
            <section className={styles.container}>
                {videos.map((video) =>{
                    return <Card {...video} key={video.id}/> /* dá um map nos videos, para cada video retorna um card que manda todas as informações do video (...video) expressão chamada destructuring(desestruturação) que descompacta o item para ser enviado para cada uma das propriedades dele - id, titulo, link */
                })}
            </section>
           
        </>
    )
}