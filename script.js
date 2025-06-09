const name = document.querySelector('.pokemon-name');
const number = document.querySelector('.pokemon-number');
const image = document.querySelector('.pokemon-image');
const form = document.querySelector('.form');
const input = document.querySelector('.search-input');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');


async function fetchPokemon(pokemon) {
    const apiResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.tolowerCase()}`);

    const date = await apiResponse.json();
    return date;
}

async function renderPokemon(pokemon) {
    const data = await fetchPokemon(pokemon);
    name.innerHTML = data.name;
    number.innerHTML = data.id;
    image.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
     input.value = '';
}

form.addEventListener("submit" , (event) => {
    event.preventDefault()
    renderPokemon(input.value);
})

