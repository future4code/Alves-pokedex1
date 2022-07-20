import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  justify-content: space-between;
  width: 400px;
  height: 300px;
  margin: 20px;
  box-shadow: 0.5px 0.5px 3px gray;
  text-align: center;
  padding: 5px;
  border-radius: 5px;
  background-color: lightgray;
  @media screen and (max-device-width : 480px){
    max-width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
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

export const BotaoCapturar = styled.button`
`

export const BotaoDetalhes = styled.button`
`

export const LadoEsquerdo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const LadoDireito = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`