export default NavBar;

function NavBar({pokemonIndex, setPokemonIndex, pokemonList}) {

    return (
        <ul>
          {pokemonList.map((pokemon, pokemonIndex) => (
            <button onClick={() => setPokemonIndex(pokemonIndex)} key={pokemonIndex}>
              {pokemon.name}
            </button>
          ))}
        </ul>
    )
}