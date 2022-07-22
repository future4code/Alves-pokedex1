import styled from 'styled-components';

export const Geral = styled.div`
  display: grid;
  grid-template-rows: 160px 1fr;
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  background-color: #5e5e5e;
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
`

export const LadoEsquerdo = styled.div`
  display: flex;
  flex-basis: 42%;
  /* border: solid 2px red; */
`

export const LadoDireito = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-basis: 58%;
  /* border: solid 2px blue; */
`

export const BotaoVoltar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0 0 20px;

  width: 287px;
  height: 74px;
  background: #33A4F5;
  border-radius: 8px;
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  cursor: pointer;
  color: #FFFFFF;
`

export const ImagemTitulo = styled.img`
  width: 307px;
  height: 113px;
  /* left: 566px; */
  /* top: 21px; */
`

export const Main = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100vw;
`

export const Coluna1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 20px;
  border-radius: 20px;
  width: 30%;
  background-color: lightgreen;
`

export const Coluna2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 20px;
  margin: 20px;
  width: 30%;
  border: solid 2px red;
  /* background-color: lightblue; */
`

export const Coluna3 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 20px;
  border-radius: 20px;
  width: 30%;
  background-color: lightcoral;
`

export const Select = styled.select`
  margin: 20px 0 20px 0;
  height: 35px;
  width: 90%;
  border: none;
  font-size: 18px;
  border-radius: 5px;
  background: #e7e4f3;
`

export const MensagemVazio = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
`

export const TextoVazio = styled.h1`
  text-align: center;
`

export const BotaoLutar = styled.button`
  width: 200px;
  height: 50px;
  text-align: center;
`

export const ContentImg = styled.div`
  margin: 20px 0 0 0;
  width: 300px;
  height: 300px;
`

export const Image = styled.img`
  max-width: 100%;
  width: 300px;
  height: 300px;
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  /* object-fit: cover; */
`

export const AtributosInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  border-radius: 10px;
  height: 30px; 
  margin: 10px 20px 5px 20px;
  border: none;
  background: orange;
`

export const Resumo = styled.div`
  margin: 20px;
  width: 60%;
  /* border: solid 1px black; */
`

export const AtributoNome = styled.div`
  margin: 0 0 0 10px;
`

export const AtributoBase = styled.div`
  margin: 0 10px 0 ;
`

export const Total = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  border-radius: 10px;
  height: 30px; 
  padding: 0 0 0 10px;
  margin: 10px 20px 5px 20px;
  border: none;
  background: lightgrey;
`

export const TotalTexto = styled.div`
`

export const TotalValor = styled.div`
  margin: 0 10px 0 0;
`