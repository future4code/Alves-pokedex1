import React from 'react'
import * as s from "./styled-CardPokemon"

export default function CardPokemon(props) {
  // console.log(props.tipos);

  return (
    <s.Card>
      <s.LadoEsquerdo>
        <s.ID>{props.id}</s.ID>
        <s.Nome>{props.nome}</s.Nome>
        <s.Tipos>
        {
          props.tipos.map( (a,i) => {
            const teste = a.type.name;
            // console.log(teste)
            return(
              <s.Tipoi>
                {teste}
              </s.Tipoi>
            )
          })
        }
        </s.Tipos>
        <s.BotaoDetalhes>Detalhes</s.BotaoDetalhes>
      </s.LadoEsquerdo>

      <s.LadoDireito>
        <s.Imagem src={props.foto} alt={props.nome}/>
        <s.BotaoCapturar>Cpturar!</s.BotaoCapturar>
      </s.LadoDireito>
    </s.Card>
  )
}