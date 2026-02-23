const offset = 0
const limit = 10
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`


function convertPokemonToListItem(pokemon) {
    return ` 
    <li class="pokemon">
                <span class="number">#001</span>
                <span class="name">${pokemon.name}</span>

                <div class="detail">
                    <ol class="types">
                        <li class="type">grass</li>
                        <li class="type">poison</li>
                    
                    </ol>
                    <img src="https://raw.githubusercontent.com/wellrccity/pokedex-html-js/master/assets/img/pokemons/poke_1.gif" alt="${pokemon.name}">  
                </div>
                 
     </li>           
             `
}

const pokemonList = document.getElementById('pokemonList')



pokeApi.getPokemons().then(pokemons => {
    
    // pokemons é a lista de pokemons que recebemos da função getPokemons, e newListPokemons é a nova lista que vamos criar para armazenar os pokemons convertidos para o formato de list item
    //Podemos essa conversão de forma mais elegante usando o método map, que é uma função de array que recebe uma função de callback e retorna um novo array com os resultados da função de callback aplicada a cada elemento do array original. Assim, podemos usar o map para converter cada pokemon da lista de pokemons para o formato de list item, e depois usar o join para juntar todos os itens em uma string única, que é o que queremos para inserir no innerHTML do pokemonList.
    const newListPokemons = []

    for (let i = 0; i < pokemons.length; i++) {
        
        const pokemon = pokemons[i]
        newListPokemons.push(convertPokemonToListItem(pokemon))

    //    Para verificar se está funcionando, podemos usar o console.log para imprimir o pokemon, o nome e a url de cada pokemon
    //    console.log(pokemon)
    //    console.log(pokemon.name)
    //    console.log(pokemon.url)
    }
    console.log(newListPokemons)
})

