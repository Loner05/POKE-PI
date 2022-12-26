import './App.css';
import Home from './components/Home';
import PokeDetail from './components/PokeDetail';
import { Route } from 'react-router-dom';
import CreatePokemon from './components/CreatePokemon';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
function App() {
  return (
    <div className="App">
     <Route exact path={'/'}><Landing/></Route>
      <Route exact path={'/home'}><Navbar/><Home/></Route>
      <Route exact path={"/details/:id"}><Navbar/><PokeDetail/></Route>
       <Route exact path={'/createpokemon'}><Navbar/><CreatePokemon/></Route>
    </div>
  );
}

export default App;

