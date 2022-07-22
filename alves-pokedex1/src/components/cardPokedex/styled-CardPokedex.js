import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  justify-content: space-between;
  /* width: 440px;
  height: 210px;
  margin: 20px; */
  box-shadow: 0.5px 0.5px 3px gray;
  /* text-align: center;
  padding: 5px;
  border-radius: 5px; */
  background-color: #729F92;
  /* position: absolute; */
  /* border: solid green; */
  margin: 30px;
  width: 440px;
  height: 210px;
  left: 0px;
  top: 0px;
  background: #729F92;
  border-radius: 12px;
  @media screen and (max-device-width : 480px){
    max-width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`

export const Imagem = styled.img`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 193px;
  /* height: 193px; */
  left: 274px;
  top: 295px;
  margin-bottom: 10px;
  /* margin-bottom: 10px; */
  border: solid 1px red;
  &:hover {
		cursor: pointer;
    border-radius: 30%;
		background-color: #0069fd7d;
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

export const BotaoExcluir = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  justify-content: center;
  align-items: center;
  padding: 4px 10px;
  width: 146px;
  height: 38px;
  background: #FF6262;
  border-radius: 8px;
  /* margin: 10px; */
`

export const BotaoDetalhes = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px;
  width: 74px;
  height: 24px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  text-decoration-line: underline;
  color: #FFFFFF;
`

export const LadoEsquerdo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const LadoDireito = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-bottom: 10px;
  align-items: center;
`