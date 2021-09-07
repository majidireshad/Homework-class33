'use strict';
/*------------------------------------------------------------------------------
Complete the four functions provided in the starter `index.js` file:

`fetchData`: In the `fetchData` function, make use of `fetch` and its Promise 
  syntax in order to get the data from the public API. Errors (HTTP or network 
  errors) should be logged to the console.

`fetchAndPopulatePokemons`: Use `fetchData()` to load the pokemon data from the 
  public API and populate the `<select>` element in the DOM.
  
`fetchImage`: Use `fetchData()` to fetch the selected image and update the 
  `<img>` element in the DOM.

`main`: The `main` function orchestrates the other functions. The `main` 
  function should be executed when the window has finished loading.

Use async/await and try/catch to handle promises.

Try and avoid using global variables. As much as possible, try and use function 
parameters and return values to pass data back and forth.
------------------------------------------------------------------------------*/
async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const jsonResponse = await response.json();
      return jsonResponse;
    } else {
      throw new Error('Cannot connect to server!');
    }
  } catch (error) {
    console.log(error);
  }
}

function fetchAndPopulatePokemons(data) {
  const selectPokemon = document.createElement('select');
  const pokemons = data.results;
  pokemons.forEach((element) => {
    const pokemonOptions = document.createElement('option');
    pokemonOptions.value = element.name;
    pokemonOptions.text = element.name;
    selectPokemon.appendChild(pokemonOptions);
    selectPokemon.addEventListener('change', fetchImage);
    document.body.appendChild(selectPokemon);
  });
}

async function fetchImage(event) {
  const resetImg = document.querySelector('img');
  if (resetImg) {
    resetImg.remove();
  }
  const pokemonsUrl = `https://pokeapi.co/api/v2/pokemon/${event.currentTarget.value}`;
  const data = await fetchData(pokemonsUrl);
  const pokemonImg = document.createElement('img');
  pokemonImg.src = data.sprites.front_default;
  document.body.appendChild(pokemonImg);
}

async function main() {
  const pokemonBtn = document.createElement('button');
  pokemonBtn.textContent = 'Get Pokemon!';
  pokemonBtn.type = 'button';
  document.body.appendChild(pokemonBtn);

  try {
    const parsedData = await fetchData(
      'https://pokeapi.co/api/v2/pokemon?limit=100&offset=200'
    );
    pokemonBtn.addEventListener('click', () => {
      fetchAndPopulatePokemons(parsedData);
      if (pokemonBtn) {
        pokemonBtn.remove();
      }
    });
  } catch (error) {
    console.log(error.message);
  }
}

window.addEventListener('load', main);
