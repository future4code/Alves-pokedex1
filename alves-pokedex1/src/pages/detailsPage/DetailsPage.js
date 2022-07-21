import { useNavigate, useParams } from "react-router-dom";
import * as s from './styled-detailsPage'
import { goBack } from "./../../routes/coordinator.js";
import img_titulo from './../../assets/img/titulo.png';
import { GlobalContext } from "../../components/global/GlobalContext";
import { useContext, useEffect, useState } from "react";
import axios from 'axios';


export default function DetailsPage() {
    const navigate = useNavigate();
    const params = useParams();
    // const { listaDetalhes, setListaDetalhes } = useContext(GlobalContext);
    const [listaDetalhes, setListaDetalhes] = useState()

    const getDetalhesPokemon = () => {
        axios
            .get(`https://pokeapi.co/api/v2/pokemon/${params.id}`)
            .then(res => {
                setListaDetalhes(res.data)
            }
            )
            .catch(error => {
                alert("Deu errado a requisição de pegar pokemons!");
            })

    }

    useEffect(() => {
        getDetalhesPokemon();
    }, [])

    // const pokemonDetalhar = listaDetalhes.filter((pokemon) => {
    //     return pokemon.id === Number(params.id)
    // })

    let soma = 0
    const pokemonDetalharAtual = listaDetalhes && listaDetalhes.stats.map((pokemon) => {
        soma = soma + pokemon.base_stat
        return (
            <div>
                {pokemon.stat.name}
                {pokemon.base_stat}
            </div>
        )

    })

    let listaLS = JSON.parse(localStorage.getItem('listaCapturados'));
    const excluirPokemon = (id) => {
      // let listaLS = JSON.parse(localStorage.getItem('listaCapturados'));
      const novaLista = listaLS.filter((pokemon) => {
        return pokemon.id !== id
      })
    //   setListaCapturados(novaLista)
      localStorage.setItem('listaCapturados', JSON.stringify(novaLista))
    //   listaLS = novaLista;
    }


    return (


        <s.Geral>
            <s.Header>
                {/* <s.ImagemSeta src={img_seta} alt={'Imagem de seta'}></s.ImagemSeta> */}
                <s.BotaoBack onClick={() => goBack(navigate)}>Voltar</s.BotaoBack>
                <s.ImagemTitulo src={img_titulo} alt={'Imagem de título'}></s.ImagemTitulo>
                <s.BotaoExcluir onClick={() => excluirPokemon(listaDetalhes.id)}> Excluir da Pokedex</s.BotaoExcluir>
            </s.Header>


            <s.Main>
                {listaDetalhes ?
                    <s.Card>
                        <s.Coluna1>
                            <s.ImagemFrente src={listaDetalhes.sprites.front_default} alt={'Imagem de título'}></s.ImagemFrente>
                            <s.ImagemCosta src={listaDetalhes.sprites.back_default} alt={'Imagem de título'}></s.ImagemCosta>
                        </s.Coluna1>
                        <s.Coluna2>
                            {pokemonDetalharAtual}
                            {`Total =  ${soma}`}
                        </s.Coluna2>
                        <s.Coluna3>
                            <s.ID>{listaDetalhes.id}</s.ID>
                            <s.Nome>{listaDetalhes.name}</s.Nome>
                            <s.Tipos>
                                {
                                    listaDetalhes.types.map((pokemon, index) => {
                                        const tipoPokemon = pokemon.type.name;
                                        return (
                                            <s.Tipoi key={index}>
                                                {tipoPokemon}
                                            </s.Tipoi >
                                        )
                                    })
                                }
                            </s.Tipos>
                            <s.Movimentos>
                                {
                                    listaDetalhes.moves.map((pokemon, index) => {
                                        const tipoPokemon = pokemon.move.name;
                                        return (
                                            <s.Tipom key={index}>
                                                {tipoPokemon}
                                            </s.Tipom >
                                        )
                                    })
                                }
                            </s.Movimentos>
                        </s.Coluna3>
                        <s.Coluna4>
                        <s.Imagem src={listaDetalhes.sprites.other.dream_world.front_default} alt={listaDetalhes.nome} />
                        </s.Coluna4>
                    </s.Card>
                    :
                    <p></p>}
            </s.Main>
        </s.Geral>
    )
}