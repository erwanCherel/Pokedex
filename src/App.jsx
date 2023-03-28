import './App.css'
import PokemonCard from './components/PokemonCard'
import { useState, useTransition } from 'react';

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mew",
  },
];

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);


  const handleClickPrevious = () => {
    setPokemonIndex(pokemonIndex - 1);
  };

  const handleClickNext = () => {
    setPokemonIndex(pokemonIndex + 1);

  };

  return (
    <div className="App">
      <div>
        <PokemonCard pokemon={pokemonList[pokemonIndex]}/>
        <button id='previousBtn' onClick={handleClickPrevious} disabled={(pokemonIndex === 0 ? true : false)}>Previous</button>
        <button id='nextBtn' onClick={handleClickNext} disabled={(pokemonIndex === pokemonList.length - 1 ? true : false)}>Next</button>
      </div>
    </div>
  )
}

export default App;
