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
  background-color: lightgray;
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

export const BotaoBack = styled.div`
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
export const Card = styled.div`
background-color: lightgreen;
display: flex;
`
export const Coluna1 = styled.div`
display: flex;
flex-direction: column;
background-color: lightgreen;
`
export const Coluna2 = styled.div`
flex-direction: column;
display: flex;
background-color: lightgreen;
`
export const Coluna3 = styled.div`
flex-direction: column;
display: flex;
background-color: lightgreen;
`
export const Coluna4 = styled.div`
display: flex;
background-color: lightgreen;
`
export const ImagemFrente = styled.img`

`
export const ImagemCosta = styled.img`

`
export const ID = styled.div`
`

export const Nome = styled.div`
`

export const Tipos = styled.div`
  display: flex;
`

export const Tipoi = styled.div`
  display: flex;
  margin: 20px;
`
export const Tipom = styled.div`
  display: flex;
  margin: 20px;
  flex-direction: column;
  /* justify-content: center; */
  `
export const Movimentos = styled.div`
   display: flex;
   flex-direction: column;
`
export const Imagem = styled.img`
  width: 150px;
  height: 150px;
  margin: 0 25px 0 0;
  padding: 10px;
  border: solid 1px red;
  &:hover {
		cursor: pointer;
    border-radius: 30%;
		background-color: #b7aedd;
	}
` 
export const BotaoExcluir = styled.button`

` 