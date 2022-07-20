import React from 'react'
import * as s from "./styled-CardPokedex"

export default function CardPokemon(props) {
  // console.log(props.tipos);

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
                </s.Tipoi>
              )
            })
          }
        </s.Tipos>
        <s.BotaoDetalhes>Detalhes</s.BotaoDetalhes>
      </s.LadoEsquerdo>

      <s.LadoDireito>
        <s.Imagem src={props.foto} alt={props.nome} />
        <s.BotaoExcluir onClick={() => props.excluirPokemon(props.id)}>Excluir</s.BotaoExcluir>
      </s.LadoDireito>
    </s.Card>
  )
}