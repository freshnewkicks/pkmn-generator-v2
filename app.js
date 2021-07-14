const P = new Pokedex.Pokedex();

// display div
const pokemonDisplay = document.querySelector("#displayPokemon");

// input
const inputSizeValue = document.querySelector('#pokesize');
let typeSelector = document.getElementById('type-selector');

// submit button
const btn = document.querySelector('#submit');

// function calls
window.onload = () => {
    inputSizeValue.onpaste = (e) => e.preventDefault();
};

inputSizeValue.addEventListener('keyup', (e) => {
    e.preventDefault();
    if (e.key === 'Enter') {
        btn.click();
    }
});

btn.addEventListener('click', () => {
    generate();
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

async function getPokemonLists(offset, limit) {
    // 
    pokemonDisplay.innerHTML = '';
    let value = typeSelector.value;
    const interval = {
        offset: offset,
        limit: limit,
    };

    // assign variable to Promises, call with Promise.all([]);

    let [getNameList, getTypeList] = await Promise.all([P.getPokemonsList(interval), P.getTypeByName(`${value}`)]);

    let pokemonNameList = getNameList.results;
    let pokemonTypeList = getTypeList.pokemon;

    for (let i = 0; i < inputSizeValue.value; i++) {
        const li = document.createElement("li");
        pokemonDisplay.appendChild(li);
        li.append(ucFirst(pokemonTypeList[i].pokemon.name));

        let img = document.createElement("img");
        li.appendChild(img);

        let findName = pokemonDisplay.childNodes[i].innerText;

        let getPokemon = await P.getPokemonByName(`${findName.toLowerCase()}`);

        img.src = getPokemon.sprites.front_default;
    }
}

async function generate() {

    let value = typeSelector.value;

    validValues = [
        'normal',
        'fire',
        'water',
        'grass',
        'electric',
        'ice',
        'fighting',
        'poison',
        'flying',
        'psychic',
        'bug',
        'rock',
        'ghost',
        'dark',
        'dragon',
        'steel',
        'fairy'
    ]

    if (validValues.includes(value)) {
        await getPokemonLists(0, 1000);
    }
}