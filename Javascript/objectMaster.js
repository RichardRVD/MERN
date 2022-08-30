const pokémon = Object.freeze([
        { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
        { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
        { "id": 9,   "name": "Blastoise",  "types": ["water"] },
        { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
        { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
        { "id": 23,  "name": "Ekans",      "types": ["poison"] },
        { "id": 24,  "name": "Arbok",      "types": ["poison"] },
        { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
        { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
        { "id": 52,  "name": "Meowth",     "types": ["normal"] },
        { "id": 63,  "name": "Abra",       "types": ["psychic"] },
        { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
        { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
        { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
        { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
        { "id": 98,  "name": "Krabby",     "types": ["water"] },
        { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
        { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
        { "id": 133, "name": "Eevee",      "types": ["normal"] },
        { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
        { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
        { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
        { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
    ]);

const bListPkmn = pokémon.filter( p => p.name[0] === "B" );
const pkmnIds = pokémon.map( p => p.id );
const pkmnIdsBy3 = pokémon.filter(d => d.id % 3 == 0);
const fireType = pokémon.filter( p => p.types == "fire");
const moreThan1 = pokémon.filter( p => p.types.length > 1);
const justNames = pokémon.map( p => p.name );
const idMore99 = pokémon.filter( p => p.id > 99, pokémon.name);
const onlyPoison = pokémon.filter( p => p.types=="poison", pokémon.name);
const flyIs2 = pokémon.filter( p => p.types[1]=="flying").map(d => d.types[0]);
const counter = pokémon.filter( p => p.types.includes("normal")).length;
console.log(bListPkmn);
console.log(pkmnIds);
console.log(pkmnIdsBy3);
console.log(fireType);
console.log(moreThan1);
console.log(justNames);
console.log(idMore99);
console.log(onlyPoison);
console.log(flyIs2);
console.log(counter);
