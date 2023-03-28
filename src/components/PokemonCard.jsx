export default PokemonCard;

function PokemonCard({ pokemon }) {

    return <figure>
    {pokemon.hasOwnProperty('imgSrc') ? (
        <img src={pokemon.imgSrc} alt={pokemon.name} />
      ) : (
        <p>???</p>
      )}
    <figcaption>{pokemon.name}</figcaption>
    <h1>{pokemon.name.toUpperCase()}</h1>
</figure>
}

