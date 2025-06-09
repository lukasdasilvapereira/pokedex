const name = document.querySelector('.pokemon-name');
const number = document.querySelector('.pokemon-number');
const image = document.querySelector('.pokemon-image');
const form = document.querySelector('.form');
const input = document.querySelector('.search-input');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');


async function fetchPokemon(pokemon) {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`);

        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            // Retorna null se o Pokémon não for encontrado
            return null;
        }
    } catch (error) {
        console.error("Erro ao buscar Pokémon:", error);
        return null;
    }
}


async function renderPokemon(pokemon) {
    const data = await fetchPokemon(pokemon);
    if (data) {
        name.innerHTML = data.name;
        number.innerHTML = data.id;
        image.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];

        input.value = '';
    } else {
        name.textContent = 'Not Found';
        number.textContent = '';
        image.src = '';
    }
}

form.addEventListener("submit", (event) => {
    event.preventDefault()
    renderPokemon(input.value);
})

