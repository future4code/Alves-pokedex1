import { useState, useEffect, useContext } from "react";
import * as s from './styled-homePage';
import axios from 'axios';
import Card from './../../components/cardPokemon/CardPokemon';
import { useNavigate } from "react-router-dom";
import { goToPokedexPage } from "./../../routes/coordinator.js";
import img_titulo from './../../assets/img/titulo.png';
import { GlobalContext } from "../../components/global/GlobalContext";

export default function HomePage() {
  const { listaCapturados, setListaCapturados } = useContext(GlobalContext);

  const navigate = useNavigate();

  const [list, setList] = useState([]);
  const [listaDetalhes, setListaDetalhes] = useState([]);
  // const [listaCapturados, setListaCapturados] = useState([])

  let listaLS = JSON.parse(localStorage.getItem('listaCapturados'));

  const getPokemons = () => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/`)
      .then(res => {
        setList(res.data.results);
      })
      .catch(error => alert("Deu errado a requisição de pegar pokemons!"));
  }
  useEffect(() => {
    getPokemons();
  }, [])

  const getDetalhesPokemon = () => {
    let detalhesPokemon = [];
    list.forEach(pokemon => {
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        .then(res => {
          detalhesPokemon.push(res.data);
          if (detalhesPokemon.length === list.length) setListaDetalhes(detalhesPokemon);
        })
        .catch(error => {
          alert("Deu errado a requisição de pegar pokemons!");
        })
    })
  }
  useEffect(() => {
    getDetalhesPokemon();
  }, [list])

  const atualizarCapturados = (nome, id, tipos, foto) => {
    listaLS = JSON.parse(localStorage.getItem('listaCapturados'));
    if (listaLS !== null){
      const novoPokemon = { nome, id, tipos, foto }
      const novaListaCapturados = [...listaLS, novoPokemon]
      setListaCapturados(novaListaCapturados)
  
      localStorage.setItem('listaCapturados', JSON.stringify(novaListaCapturados))
    }
    else {
      const novoPokemon = { nome, id, tipos, foto }
      const novaListaCapturados = [novoPokemon]
      setListaCapturados(novaListaCapturados)
  
      localStorage.setItem('listaCapturados', JSON.stringify(novaListaCapturados))
    }
  }

  const listaDetalhes2 = [];
  if(listaLS !== null){
    for(let i=0 ; i<listaDetalhes.length ; i++){
      let repetido = false;
      for(let j=0 ; j<listaLS.length ; j++){
        if(listaDetalhes[i].name === listaLS[j].nome) repetido = true;
      }
      if(repetido === false) listaDetalhes2.push(listaDetalhes[i])
      if(!repetido) listaDetalhes2.push(listaDetalhes[i])
    }
  }

  return (
    <s.Geral>
      <s.Header>
        <s.ImagemTitulo src={img_titulo} alt={'Imagem de título'}></s.ImagemTitulo>
        <s.BotaoPokedex onClick={() => goToPokedexPage(navigate)}>Pokédex</s.BotaoPokedex>
      </s.Header>

      <s.Main>
        {
          listaLS === null ? 
            listaDetalhes
            .sort( (atual, proximo) => {
              return (atual.id - proximo.id)
            })
            .map(pokemon => {
              return (
                <Card key={pokemon.id}
                  id={pokemon.id}
                  nome={pokemon.name}
                  foto={pokemon.sprites.other.dream_world.front_default}
                  tipos={pokemon.types}
                  atualizarCapturados={atualizarCapturados}
                />
              )
            })
            :
            listaDetalhes2
            .sort( (atual, proximo) => {
              return (atual.id - proximo.id)
            })            
            .map(pokemon => {
              return (
                <Card key={pokemon.id}
                  id={pokemon.id}
                  nome={pokemon.name}
                  foto={pokemon.sprites.other.dream_world.front_default}
                  tipos={pokemon.types}
                  atualizarCapturados={atualizarCapturados}
                />
              )
            })
        }
      </s.Main>

    </s.Geral>
  );
}; 