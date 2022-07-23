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
  justify-content: space-around;
  align-items: center;
  background-color: white;
`

export const Main = styled.div`
  background-color: lightgray;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  height: 100vh;
 
`

export const ImagemTitulo = styled.img`
  width: 307px;
  height: 113px;
`

export const BotaoBack = styled.div`
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
export const Card = styled.div`
background-color: #5E5E5E;
display: flex;
flex-direction: row;
justify-content: space-around;
width: 100vh;
height: 600px;
padding: 10px;
box-shadow: 0 5px 5px 0 rgba(0,0,0,0.2), 0 10px 20px 0 rgba(0,0,0,0.19);

`
export const Coluna1 = styled.div`
display: flex;
flex-direction: column;
background-color: #5E5E5E;

`
export const Coluna2 = styled.div`
flex-direction: column;
display: flex;
background-color: #5E5E5E;
`
export const Coluna3 = styled.div`
flex-direction: column;
display: flex;
background-color: #6b6969;
box-shadow: 0 5px 5px 0 rgba(0,0,0,0.2), 0 10px 20px 0 rgba(0,0,0,0.19);
overflow: auto;

`
export const Coluna4 = styled.div`
display: flex;
background-color: #5E5E5E;
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
  width: 193px;
  height: 193px;
  max-width: 200px;
  margin: 0 25px 0 0;
  padding: 10px;
  /* border: solid 1px red; */
  &:hover {
		cursor: pointer;
    overflow: hidden;

    width: 100%;
    max-width: 100%;
    -moz-transition: all 0.3s;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
    -moz-transform: scale(1.1);
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
	}
` 
export const BotaoExcluir = styled.div`
  width: 287px;
  height: 74px;
  display:flex;  
  justify-content: center;
  color:#fff;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  align-items: center;
  font-size:1.4em;
  text-align: center;
  text-decoration:none;
  border-radius:6px;
  background-color:#FF6262;
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