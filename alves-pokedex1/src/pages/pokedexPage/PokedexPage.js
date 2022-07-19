import * as s from './styled-pokedexPage';
import { useNavigate } from "react-router-dom";
import {goToHomePage} from "./../../routes/coordinator.js";
import img_titulo from './../../assets/img/titulo.png';
import img_seta from './../../assets/img/seta_esquerda.png';

export default function PokedexPage() {
  const navigate = useNavigate();

  return (
    <s.Geral>
      <s.Header>
        <s.ImagemSeta src={img_seta} alt={'Imagem de seta'}></s.ImagemSeta>
        <s.BotaoHome onClick={()=>goToHomePage(navigate)}> Todos Pokémons</s.BotaoHome>
        <s.ImagemTitulo src={img_titulo} alt={'Imagem de título'}></s.ImagemTitulo>
      </s.Header>

      <s.Main>
        <p>ESSA É A PÁGINA POKEDEX</p>
      </s.Main>

    </s.Geral>
  );
}; 