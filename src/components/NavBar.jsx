export default NavBar;

function NavBar({pokemonIndex, setPokemonIndex, pokemonList}) {

  const handleClickPrevious = () => {
    setPokemonIndex(pokemonIndex - 1);
    if (pokemonIndex === 3) {
      alert("pika pikachu !!!")
    }
  };

  const handleClickNext = () => {
    setPokemonIndex(pokemonIndex + 1);
    if (pokemonIndex === 3) {
      alert("pika pikachu !!!")
    }
  };


    return (
        <>
            <button id='previousBtn' onClick={handleClickPrevious} disabled={(pokemonIndex === 0 ? true : false)} >Previous</button>
            <button id='nextBtn' onClick={handleClickNext} disabled={(pokemonIndex === pokemonList.length - 1 ? true : false)}>Next</button>
        </>
    )
}