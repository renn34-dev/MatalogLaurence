const pokemonContainer = document.getElementById('pokemon-container');
const searchInput = document.getElementById('search');
const loadMoreButton = document.getElementById('load-more');
let offset = 0;
const limit = 20;
const API_URL = 'https://pokeapi.co/api/v2/pokemon';

async function fetchPokemon(offset, limit) {
  const response = await fetch(`${API_URL}?offset=${offset}&limit=${limit}`);
  const data = await response.json();
  const pokemonList = await Promise.all(
    data.results.map(async (pokemon) => {
      const details = await fetch(pokemon.url);
      return await details.json();
    })
  );
  displayPokemon(pokemonList);
}

function displayPokemon(pokemonList) {
  pokemonList.forEach((pokemon) => {
    const card = document.createElement('div');
    card.classList.add('pokemon-card');

    card.innerHTML = `
      <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
      <h2>${capitalize(pokemon.name)}</h2>
      <p>Type: ${pokemon.types.map((type) => type.type.name).join(', ')}</p>
    `;

    pokemonContainer.appendChild(card);
  });
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

searchInput.addEventListener('input', async (e) => {
  const query = e.target.value.toLowerCase();
  pokemonContainer.innerHTML = '';
  if (query) {
    const response = await fetch(`${API_URL}/${query}`);
    if (response.ok) {
      const pokemon = await response.json();
      displayPokemon([pokemon]);
    }
  } else {
    fetchPokemon(0, limit);
  }
});

loadMoreButton.addEventListener('click', () => {
  offset += limit;
  fetchPokemon(offset, limit);
});

fetchPokemon(offset, limit);
