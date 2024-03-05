async function searchPokemon() {
    const inputElement = document.getElementById('search-input');
    const pokemonNameOrId = inputElement.value.toLowerCase();
    const apiUrl = `https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${pokemonNameOrId}`;
    
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        document.getElementById('pokemon-name').textContent = data.name.toUpperCase();
        document.getElementById('pokemon-id').innerText = `#${data.id}`;
        document.getElementById('weight').textContent = `Weight: ${data.weight}`;
        document.getElementById('height').textContent = `Height: ${data.height}`;
        document.getElementById('hp').textContent = data.stats[0].base_stat;
        document.getElementById('attack').textContent = data.stats[1].base_stat;
        document.getElementById('defense').textContent = data.stats[2].base_stat;
        document.getElementById('special-attack').textContent = data.stats[3].base_stat;
        document.getElementById('special-defense').textContent = data.stats[4].base_stat;
        document.getElementById('speed').textContent = data.stats[5].base_stat;

        document.getElementById('sprite').src = data.sprites.front_default;
        document.getElementById('sprite').style.display = 'block';

        const typesElement = document.getElementById('types');
        typesElement.innerHTML = ''; 
        data.types.forEach(type => {
            const typeElement = document.createElement('span');
            typeElement.className = `${type.type.name}`
            typeElement.textContent = type.type.name.toUpperCase();
            typesElement.appendChild(typeElement);
        });
    } catch (error) {
        alert('Pokémon not found');
    }
}

document.getElementById('search-button').addEventListener('click', searchPokemon);
