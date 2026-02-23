
const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMore')
const limit = 9
let offset = 0


//função para converter o pokemon em um item de lista
function convertPokemonToListItem(pokemon) {
    const imageUrl = `https://raw.githubusercontent.com/wellrccity/pokedex-html-js/master/assets/img/pokemons/poke_${pokemon.id}.gif`
    return ` 
    <li class="pokemon ${pokemon.principalType}">
                <span class="number">#${pokemon.id}</span>
                <span class="name">${pokemon.name}</span>

                <div class="detail">
                    <ol class="types">
                        ${pokemon.types.map(type => `<li class="type ${type}">${type}</li>`).join('')}
                    
                    </ol>
                    <img src="${pokemon.sprite}" alt="${pokemon.name}"> 
                </div>
                 
     </li>           
            `
}


function loadPokemonItens(){

    pokeApi.getPokemons(offset, limit).then( (pokemons = []) => {
    pokemonList.innerHTML += pokemons.map(convertPokemonToListItem).join('')

    // isso é a mesma coisa que fazer isso:
    // pokeApi.getPokemons().then( (pokemons = []) => {
    // const newListPokemons = pokemons.map(convertPokemonToListItem)
    // pokemonList.innerHTML += newListPokemons.join('') }
})
   
}

loadPokemonItens(limit, offset)



loadMoreButton.addEventListener('click', () => {
    offset += limit
    loadPokemonItens()
})