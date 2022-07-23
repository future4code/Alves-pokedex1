import styled from 'styled-components';

export const Geral = styled.div`
  display: grid;
  grid-template-rows: 160px 1fr;
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
`

export const Main = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: #5E5E5E;
  justify-content: center;
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
`
export const LadoEsquerdo = styled.div`
  display: flex;
  flex-basis: 42%;
  /* justify-content: space-around; */
  /* border: solid orange; */
`

export const LadoDireito = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-basis: 58%;
`

export const ImagemTitulo = styled.img`
  width: 307px;
  height: 113px;
`

export const BotaoPokedex = styled.div`
  display:flex;  
  justify-content: center;
  align-items: center;
  margin: 0 0 0 30px;
  width: 287px;
  height: 74px;
  color:#fff;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-size:1.4em;
  text-align: center;
  text-decoration:none;
  border-radius:6px;
  background-color:#33A4F5;
  transition: transform 500ms cubic-bezier(0.68, -0.55, 0.265, 1.55), background-position 800ms cubic-bezier(0.68, -0.55, 0.265, 1.55), box-shadow 500ms linear;
  background-size:contain;
  background-position: -250px center;
  background-repeat: no-repeat;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  cursor: pointer;

:hover {
  transform: scale(1.1);
  background-position: -60px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}
:active {
  transform: scale(1);
  background-position: 500px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
}
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

export const BotoesPaginacao = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

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