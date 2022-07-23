import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #729F92;
  margin: 30px;
  width: 440px;
  height: 210px;
  left: 0px;
  top: 0px;
  background: #729F92;
  border-radius: 12px;
  box-shadow: 0 5px 5px 0 rgba(0,0,0,0.2), 0 10px 20px 0 rgba(0,0,0,0.19);
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
  max-width: 200px;
  left: 274px;
  top: 295px;
  margin-bottom: 10px;


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
  /* height: 38px; */
  background: #FF6262;
  border-radius: 8px;
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

export const BotaoDetalhes = styled.div`
  /* display: flex;
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
  color: #FFFFFF; */

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  justify-content: center;
  align-items: center;
  padding: 4px 10px;
  width: 146px;
  /* height: 38px; */
  background: #62c3ff;
  border-radius: 8px;
  margin: 10px;
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