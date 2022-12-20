import Banner from 'componentes/Banner';
import Titulo from 'componentes/Titulo';
import { useParams } from 'react-router-dom';
import styles from './player.module.css';

import NaoEncontrada from 'pages/naoEncontrada';
import { useEffect, useState } from 'react';

export default function Player(){
    const [video, setVideos] = useState([]);
    const parametros = useParams(); /* pega o parametro do url e coloca na variavel */
    useEffect(() => { /* useEffect trata de realizar ações após as renderizações da página */
    fetch(`https://my-json-server.typicode.com/monicahillman/cinetag-api/videos?id=${parametros.id}`) /* criação da requisição da api */
            .then(resposta => resposta.json()) /* pegou os dados e converteu para json */
            .then(dados => {
                setVideos(...dados)
            })
    }, [])
    
    if (!video){
        return <NaoEncontrada/>
    } 

    return(
        <>
        <Banner imagem="player"/>
        <Titulo>
            <h1>Player</h1>
        </Titulo> 
        <section className='styles.container'>
            <iframe width="100%"
                height="100%" 
                src={video.link} 
                title={video.titulo} 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen>
            </iframe>
        </section>
        </>       
    )
}