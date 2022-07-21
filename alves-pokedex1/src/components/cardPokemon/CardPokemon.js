import React from 'react'
import * as s from "./styled-CardPokemon"
import { useNavigate } from "react-router-dom";
import { goDetailsPage } from "./../../routes/coordinator.js";

export default function CardPokemon(props) {
  const navigate = useNavigate();

  return (
    <s.Card>
      <s.LadoEsquerdo>
        <s.ID>{props.id}</s.ID>
        <s.Nome>{props.nome}</s.Nome>
        <s.Tipos>
          {
            props.tipos.map((pokemon, index) => {
              const tipoPokemon = pokemon.type.name;
              return (
                <s.Tipoi key={index}>
                  {tipoPokemon}
                </s.Tipoi >
              )
            })
          }

        </s.Tipos>
        <s.BotaoDetalhes onClick={()=>goDetailsPage(navigate, props.id)} >Detalhes</s.BotaoDetalhes>
      </s.LadoEsquerdo>

      <s.LadoDireito>
        <s.Imagem src={props.foto} alt={props.nome} />
        <s.BotaoCapturar onClick={() => props.atualizarCapturados(props.nome, props.id, props.tipos, props.foto)}>Capturar!</s.BotaoCapturar>
      </s.LadoDireito>
    </s.Card>
  )
}