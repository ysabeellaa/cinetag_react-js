import Cabecalho from "componentes/Cabecalho"
import Container from "componentes/Container"
import Rodape from "componentes/Rodape"
import FavoritosProvider from "contextos/Favoritos"
import { Outlet } from "react-router-dom"


export default function PaginaBase(){
    return (
        <main>
            <Cabecalho />
            <FavoritosProvider>{/* faz com que o contexto seja compartilhado entre todas as rotas */}
                <Container>
                    <Outlet />{/*  possibilita que crie uma rota pai e vai ter todas as rotas filhas que vão se encaixar ao pai */}
                </Container>
            </FavoritosProvider>
            <Rodape />
        </main>
    )
    
}