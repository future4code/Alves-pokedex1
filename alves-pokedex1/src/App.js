import GlobalStyle from './styles/global';
// import Pokedex from './pages/pokedexPage/PokedexPage';
import { Router } from './routes/Router';
import GlobalState from './components/global/GlobalState';

function App() {
  return (

    <GlobalState>
      <GlobalStyle />
      <Router />
    </GlobalState>

  );
}

export default App;
