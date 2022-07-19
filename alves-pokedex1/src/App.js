import GlobalStyle from './styles/global';
// import Pokedex from './pages/pokedexPage/PokedexPage';
import { Router } from './routes/Router';

function App() {
  return (
    <div >
      <GlobalStyle/>
      {/* <Pokedex/> */}
      <Router/>
    </div>
  );
}

export default App;
