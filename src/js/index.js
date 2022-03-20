/*
Quando clicar no icone do pokémon na listagem, temos que esconder o cartão do pokémon aberto e mostrar o cartão correspondente ao que foi selecionado na listagem.

Para isso vamos precisar trabalhar com 2 elementos:
1 - listagem 
2 - cartão pokémon

precisamos criar duas variáveis no JS pra trabalhar com os elementos na tela.

Vamos precisar trabaçhar com um evento de clique do usuário na listagem de pokémons

-Remover a classe aberto do cartão que está aberto 
-Ao clicar em um pokémon da lsitagem pegamos o id desse pokémon pra saber qual cartão mostrar.
-Remover a classe ativa que marca o pokémon selecionado
-Adicionar a classe ativo no item da lista selecionado
*/

const listaSelecaoPekemons = document.querySelectorAll('.pokemon')
const pokemonsCard = document.querySelectorAll('.cartao-pokemon') 

listaSelecaoPekemons.forEach(pokemon => {
    pokemon.addEventListener('click', () => {
        //remover a classe só do pokemon que está aberto
        const  cartaoPokemonAberto = window.document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto')
        //Ao clicar em um pokémon da listagem pegamos o id desse pokémon pra saber qual cartão mostrar
        const idPokemonSelecionado = pokemon.attributes.id.value

        const cartaoPokemonParaAbrir = window.document.getElementById('cartao-'+idPokemonSelecionado)
        cartaoPokemonParaAbrir.classList.add('aberto')

        const pokemonAtivoNaListagem = window.document.querySelector('.ativo')
        pokemonAtivoNaListagem.classList.remove('ativo')

        const pokemonSlecionadoNaListagem = window.document.getElementById(idPokemonSelecionado)
        pokemonSlecionadoNaListagem.classList.add('ativo')
    })
})