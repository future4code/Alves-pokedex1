import { useState, useEffect } from "react";
import * as s from './styled-homePage';
import axios from 'axios';
import Card from './../../components/cardPokemon/CardPokemon';
import { useNavigate } from "react-router-dom";
import {goToPokedexPage} from "./../../routes/coordinator.js";
import img_titulo from './../../assets/img/titulo.png';

export default function HomePage() {
  const navigate = useNavigate();

  const [list, setList] = useState([]);
  const [listaDetalhes, setListaDetalhes] = useState([]);

  
  const getPokemons = () => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/`)
      .then(res => {
        setList(res.data.results);
      })
      .catch(error => alert("Deu errado a requisição de pegar pokemons!" ));
  }
  useEffect(() => {
    getPokemons();
  }, [])

  const getDetalhesPokemon = () => {
    let detalhesPokemon = [];
    list.forEach( pokemon => {
      axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
      .then(res => {
        detalhesPokemon.push(res.data);
        if(detalhesPokemon.length === 20) setListaDetalhes(detalhesPokemon);
      })
      .catch(error => {
        alert("Deu errado a requisição de pegar pokemons!");
      })
    })
  }
  useEffect(() => {
    getDetalhesPokemon();
  }, [list])

  listaDetalhes.forEach( (item, index) => {
    console.log('Id =',item.id, '| Nome =',item.name, '| Foto =',item.sprites.front_default, '| Tipo =',item.types[0].type.name)
    console.log('----------------')
  })

  return (
    <s.Geral>
      <s.Header>
        <s.ImagemTitulo src={img_titulo} alt={'Imagem de título'}></s.ImagemTitulo>
        <s.BotaoPokedex onClick={()=>goToPokedexPage(navigate)}>Pokédex</s.BotaoPokedex>
      </s.Header>

      <s.Main>
        {
          listaDetalhes.map( pokemon => {
            return (
              <Card
                id={pokemon.id}
                nome={pokemon.name}
                foto={pokemon.sprites.other.dream_world.front_default}
                tipos={pokemon.types}
              />
            )
          })
        }
      </s.Main>

    </s.Geral>
  );
}; 