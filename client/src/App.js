import './App.css';
import Home from './components/Home';
import PokeDetail from './components/PokeDetail';
import { Route } from 'react-router-dom';
import CreatePokemon from './components/CreatePokemon';
import Navbar from './components/Navbar';
function App() {
  return (
    <div className="App">
      <h1>Henry Pokemrrron</h1>
      <Route exact path={'/home'}><Navbar/><Home/></Route>
      <Route exact path={"/details/:id"}><Navbar/><PokeDetail/></Route>
       <Route exact path={'/createpokemon'}><Navbar/><CreatePokemon/></Route>
    </div>
  );
}

export default App;

