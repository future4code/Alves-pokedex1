import { useState, useEffect } from "react";
import * as s from './styled-homePage';
import axios from 'axios';
// import Card from './../../components/cardPokemon';
import { useNavigate } from "react-router-dom";
import {goToPokedexPage} from "./../../routes/coordinator.js";
import img_titulo from './../../assets/img/titulo.png';

export default function HomePage() {
  const navigate = useNavigate();

  const [list, setList] = useState([]);
  // const [end, setEnd] = useState();
  // const [name, setName] = useState();

  const getPokemons = () => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/`)
      .then(res => {
        console.log("Deu certo a requisição de pegar pokemons!");
        setList(res.data.results);
        console.log(res);
      })
      .catch(error => {
        console.log("Deu errado a requisição de pegar pokemons!");
        console.log(error);

      })
  }

  useEffect(() => {
    getPokemons();
  }, [])

  // function getPokemonsIndividuais(pokemon) {
  //   axios
  //     .get(`${pokemon.url}`)
  //     .then(res => {
  //       console.log(`As informações do ${pokemon.name} foram coletadas`);
  //       setEnd(res.data.sprites.back_default);
  //     })
  //     .catch(error => {
  //       console.log("Deu errado a requisição de pegar pokemons!");
  //       console.log(error);
  //     })
  // }

  // const listaPokemons = list.map((pokemon, index) => {
  //   setName(pokemon.name);
  //   getPokemonsIndividuais(pokemon)
  //   // console.log('tentando imprimir end2 =', end2)
  //   return (
  //     <div key={index}>
  //       {/* <img src={pokemons.sprites.back_default} alt={'a'}/> */}
  //       {/* <img src={img_endereco} alt={'a'}/> */}
  //       {/* <img src={end} alt={'a'}/> */}
  //     </div>
  //   )
  // })

  // const listaPokemons = <img src={list.sprites.back_default} alt={'a'}/>

  return (
    <s.Geral>
      <s.Header>
        <s.ImagemTitulo src={img_titulo} alt={'Imagem de título'}></s.ImagemTitulo>
        <s.BotaoPokedex onClick={()=>goToPokedexPage(navigate)}>Pokédex</s.BotaoPokedex>
      </s.Header>

      <s.Main>
        <p>ESSA É A PÁGINA HOME</p>
      </s.Main>

    </s.Geral>
  );
}; 