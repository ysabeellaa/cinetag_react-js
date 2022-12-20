import { children, useState, createContext, useContext } from "react";

export const FavoritosContext = createContext(); //criação do contexto
FavoritosContext.displayName = 'Favoritos'; //nome dado ao display



export default function FavoritosProvider({ children }) { /* fornecimento do contexto */
    const [favorito, setFavorito] = useState([]);

    return (
        <FavoritosContext.Provider
            value={{ favorito, setFavorito }}>
            {children}
        </FavoritosContext.Provider>
    )
}

export function useFavoritoContext(){ 
    const {favorito, setFavorito} = useContext(FavoritosContext); /* fazer um hoock personalizado onde vai puxar o contexto do favorito que foi passado no provider' */

    function adicionarFavorito(novoFavorito){ {/* funcao que possibilita favoritar de fato */}
        const favoritoRepetido = favorito.some(item => item.id === novoFavorito.id); /* verifica se o favprito é repetido; recebe um métode de array (some) e procura se tem um favorito com o mesmo id do que o que está sendo adicionado;; retorna true ou false */

        let novaLista = [...favorito];

        if (!favoritoRepetido){ /* se for false (não é repetido), se acrescenta a nova lista */
            novaLista.push(novoFavorito);
            return setFavorito(novaLista); /* acrescenta a nova lista no setFavorite */
        }
        novaLista.splice(novaLista.indexOf(novoFavorito), 1); /* se for repetido; splice: retira um elemento de dentro da lista: procura algum lugar da lista(indexof) que tenha o valor do novoFavorito e faz a remoção  */
        return setFavorito(novaLista);  /* acrescenta a nova lista no setFavorite; a nova lista perdeu um item de dentro */
    }
    return { 
        favorito, adicionarFavorito /* para conseguir consultar a lista de favorito e acesso ao favoritos */
    }
}