import styled from 'styled-components';

export const Geral = styled.div`
  display: grid;
  grid-template-rows: 160px 1fr;
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
`

export const Header = styled.div`
  background-color: white;
`

export const Main = styled.div`
  background-color: lightgreen;
`

export const ImagemTitulo = styled.img`
  position: absolute;
  width: 307px;
  height: 113px;
  left: 566px;
  top: 21px;
`

export const BotaoPokedex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px 10px;
  position: absolute;
  width: 287px;
  height: 74px;
  /* left: 1112px; */
  left: 1112px;
  top: 41px;
  background: #33A4F5;
  border-radius: 8px;
  /* Pokédex */
  /* width: 106px;
  height: 36px; */
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  cursor: pointer;
  /* identical to box height */
  color: #FFFFFF;
  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 20px;
  row-gap: 20px;
  margin: 0 20px;
  box-sizing: border-box;
  @media screen and (min-device-width : 320px) and (max-device-width : 480px){
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 0;
    margin: 0;
  }
`

export const BotaoPagina = styled.button`
  background-color: ${props => props.value === props.paginaAtual ? "orange" : null};
`

export const BotaoAnterior = styled.button`
  :disabled {
    opacity: 0.8
  };
`

export const BotaoUltimo = styled.button`
  :disabled {
    opacity: 0.8
  };
`