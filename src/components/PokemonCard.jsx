import PropTypes from "prop-types";
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

PokemonCard.PropTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.node.isRequired,
  }).isRequired,
}