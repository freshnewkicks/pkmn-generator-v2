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
    generate(0, 1000);
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

async function generate(offset, limit) {
    pokemonDisplay.innerHTML = '';

    const interval = {
        offset: offset,
        limit: limit,
    };

    let value = typeSelector.value;


    let getNameList = await P.getPokemonsList(interval);
    let getTypeList = await P.getTypeByName(`${value}`);

    let pokemonNameList = getNameList.results;
    let pokemonTypeList = getTypeList.pokemon;

    // conditional type select based on select option
    if (value === 'normal') {
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
    } else if (value === 'fire') {
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
    } else if (value === 'water') {
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
    } else if (value === 'grass') {
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
    } else if (value === 'electric') {
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
    } else if (value === 'ice') {
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
    } else if (value === 'fighting') {
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
    } else if (value === 'poison') {
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
    } else if (value === 'ground') {
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
    } else if (value === 'flying') {
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
    } else if (value === 'psychic') {
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
    } else if (value === 'bug') {
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
    } else if (value === 'rock') {
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
    } else if (value === 'ghost') {
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
    } else if (value === 'dark') {
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
    } else if (value === 'dragon') {
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
    } else if (value === 'steel') {
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
    } else if (value === 'fairy') {
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
    } else {
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
}

// generate list of pokemon; using offset and limit
// async function listPokemon(offset, limit) {
//     pokemonDisplay.innerHTML = "";
//     const interval = {
//         offset: offset,
//         limit: limit,
//     };

//     generatePokeList = await P.getPokemonsList(interval);

//     const list = generatePokeList.results;

//     for (i = 0; i < inputSizeValue.value; i++) {

//         li.append(ucFirst(list[i].name));

//         pokemonDisplay.appendChild(li);


//     }
// }