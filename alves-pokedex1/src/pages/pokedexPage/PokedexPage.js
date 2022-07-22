import * as s from './styled-pokedexPage';
import { useNavigate } from "react-router-dom";
import { goToHomePage, goToCriarBatalha } from "./../../routes/coordinator.js";
import img_titulo from './../../assets/img/titulo.png';
// import img_seta from './../../assets/img/seta_esquerda.png';
import { GlobalContext } from "../../components/global/GlobalContext";
import { useContext, useEffect } from 'react';
import Card from './../../components/cardPokedex/CardPokedex';

export default function PokedexPage() {
  const { setListaCapturados } = useContext(GlobalContext);
  const navigate = useNavigate();

  // const excluirPokemon = (id) => {
  //   const novaLista = listaCapturados.filter((pokemon) => {
  //     return pokemon.id !== id
  //   })
  //   setListaCapturados(novaLista)
  // }

  let listaLS = JSON.parse(localStorage.getItem('listaCapturados'));
  const excluirPokemon = (id) => {
    // let listaLS = JSON.parse(localStorage.getItem('listaCapturados'));
    const novaLista = listaLS.filter((pokemon) => {
      return pokemon.id !== id
    })
    setListaCapturados(novaLista)
    localStorage.setItem('listaCapturados', JSON.stringify(novaLista))
    listaLS = novaLista;
  }

  return (
    <s.Geral>
      <s.Header>
        <s.BotaoHome onClick={() => goToHomePage(navigate)}> Todos Pokémons</s.BotaoHome>
        <s.ImagemTitulo src={img_titulo} alt={'Imagem de título'}></s.ImagemTitulo>
      <s.BotaoCriarBatalha onClick={() => goToCriarBatalha(navigate)}>Criar Batalha</s.BotaoCriarBatalha>
      </s.Header>

      <s.Main>
        {
          // listaCapturados.map(pokemon => {
          listaLS && listaLS.map(pokemon => {
            return (
              <Card key={pokemon.id}
                id={pokemon.id}
                nome={pokemon.nome}
                foto={pokemon.foto}
                tipos={pokemon.tipos}
                excluirPokemon={excluirPokemon}
              // atualizarCapturados={atualizarCapturados}
              />
            )
          })
        }
      </s.Main>

    </s.Geral>
  );
}; 