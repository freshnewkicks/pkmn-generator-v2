const P = new Pokedex.Pokedex();

// display div
const pokemonDisplay = document.querySelector("#displayPokemon");

// input
const inputSizeValue = document.querySelector("#pokesize");

// butt(on)
const btn = document.querySelector('#submit');

// function calls
window.onload = () => {
    inputSizeValue.onpaste = (e) => e.preventDefault();
};

inputSizeValue.addEventListener('keyup', (e) => {
    e.preventDefault();
    if (e.key === 'Enter') {
        btn.click();
        listPokemon(0, 1000);
    }
});

btn.addEventListener('click', () => {
    listPokemon(0, 1000);
});

function preventNonNumericalInput(e) {
    e = e || window.event;
    let charCode = typeof e.which == 'undefined' ? e.keyCode : e.which;
    let charStr = String.fromCharCode(charCode);

    if (!charStr.match("^[0-9, \b][0-9,\b]*$")) {
        e.preventDefault();
    }
}

// capitalize
function ucFirst(str) {
    let firstLetter = str.substr(0, 1);
    return firstLetter.toUpperCase() + str.substr(1);
}


// generate list of pokemon; using offset and limit
async function listPokemon(offset, limit) {
    pokemonDisplay.innerHTML = "";
    const interval = {
        offset: offset,
        limit: limit,
    };

    generatePokeList = await P.getPokemonsList(interval);

    const list = generatePokeList.results;

    for (i = 0; i < inputSizeValue.value; i++) {
        const li = document.createElement("li");
        const img = document.createElement("img");

        img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
      i + 1
    }.png`;

        li.append(ucFirst(list[i].name));

        pokemonDisplay.appendChild(li);

        li.append(img);
    }
}