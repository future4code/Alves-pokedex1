import styled from 'styled-components';

export const Geral = styled.div`
  display: grid;
  grid-template-rows: 160px 1fr;
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  `

export const Header = styled.div`
  display: flex;
  background-color: white;
  `

export const Main = styled.div`
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  background-color: #5E5E5E;
`

export const ImagemTitulo = styled.img`
  position: absolute;
  width: 307px;
  height: 113px;
  left: 566px;
  top: 21px;
`

export const ImagemSeta = styled.img`
  /* Vector */
  position: absolute;
  left: 33.3%;
  right: 37.54%;
  top: 20.83%;
  bottom: 20.83%;

  background: #000000;
`

export const BotaoHome = styled.div`
  /* Todos Pokémons */
  position: absolute;
  width: 210px;
  height: 36px;
  left: 100px;
  top: 62px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  /* identical to box height */
  text-decoration-line: underline;
  color: #1A1A1A;

  cursor: pointer;
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