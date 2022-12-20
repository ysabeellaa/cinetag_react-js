
import Favoritos from "pages/favoritos"
import Inicio from "pages/inicio"
import NaoEncontrada from "pages/naoEncontrada"
import PaginaBase from "pages/paginaBase"
import Player from "pages/player"
import { BrowserRouter, Route, Routes } from "react-router-dom"


export default function AppRoutes(){
    return (
       <BrowserRouter> {/* responsável por informar a aplicação que terá um roteamento de componentes */}
    
                <Routes> {/*é o próprio roteador */}
                    <Route path='/' element={<PaginaBase/>}>
                        <Route index element={<Inicio/>}></Route>  {/* se refere a rota em específico*/}
                        <Route path= "favoritos" element={<Favoritos/>}></Route> 
                        <Route path= ":id" element={<Player/>}></Route> {/* o valor depois desse : retorna o nome de um parâmetro e o que coloca dentro da url é um parâmetro em si */}
                        <Route path= "*" element={<NaoEncontrada/>}></Route>
                    </Route>
                </Routes>
           </BrowserRouter>
    )
}