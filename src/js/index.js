const listaSelecaoPekemons = document.querySelectorAll('.pokemon')
const pokemonsCard = document.querySelectorAll('.cartao-pokemon') 

listaSelecaoPekemons.forEach(pokemon => {
    pokemon.addEventListener('click', () => {
        const  cartaoPokemonAberto = window.document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto')
        const idPokemonSelecionado = pokemon.attributes.id.value

        const cartaoPokemonParaAbrir = window.document.getElementById('cartao-'+idPokemonSelecionado)
        cartaoPokemonParaAbrir.classList.add('aberto')

        const pokemonAtivoNaListagem = window.document.querySelector('.ativo')
        pokemonAtivoNaListagem.classList.remove('ativo')

        const pokemonSlecionadoNaListagem = window.document.getElementById(idPokemonSelecionado)
        pokemonSlecionadoNaListagem.classList.add('ativo')
    })
})
