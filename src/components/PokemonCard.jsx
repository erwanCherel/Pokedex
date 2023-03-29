import PropTypes from "prop-types";
export default PokemonCard;

function PokemonCard({ pokemon }) {

    return <figure>
    {pokemon.hasOwnProperty.call(pokemon, 'imgSrc') ? (
        <img src={pokemon.imgSrc} alt={pokemon.name} />
      ) : (
        <p>???</p>
      )}
    <figcaption>{pokemon.name}</figcaption>
    <h1>{pokemon.name.toUpperCase()}</h1>
</figure>
}

PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.node,
  }).isRequired,
}