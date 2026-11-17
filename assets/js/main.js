const pokemonList= document.getElementById ('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')

const maxRecords=151
const limit = 20
let offset= 0;


const contentSection = document.querySelector('.content')
const detailModal = document.getElementById('pokemonDetailModal')

function openPokemonDetails(id) {
    pokeApi.getPokemonById(id).then((pokemon) => {
        const formattedNumber = String(pokemon.number).padStart(3, '0')
        const totalStats = Object.values(pokemon.stats).reduce((acc, val) => acc + val, 0)

        detailModal.innerHTML = `
            <div class="detail-card ${pokemon.type}">
                <div class="detail-header">
                    <button class="back-btn" type="button" onclick="closePokemonDetails()">←</button>
                    <div class="header-title">
                        <h1 class="detail-name">${pokemon.name}</h1>
                        <span class="detail-number">#${formattedNumber}</span>
                    </div>
                    <ol class="detail-types">
                        ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                    </ol>
                </div>

                <div class="detail-image-container">
                    <img src="${pokemon.photo}" alt="${pokemon.name}">
                </div>

                <div class="detail-body">
                    <h3>About</h3>
                    <div class="info-row">
                        <span class="label">Height</span>
                        <span class="value">${pokemon.height}</span>
                    </div>
                    <div class="info-row">
                        <span class="label">Weight</span>
                        <span class="value">${pokemon.weight}</span>
                    </div>
                    <div class="info-row">
                        <span class="label">Abilities</span>
                        <span class="value">${pokemon.abilities.join(', ')}</span>
                    </div>

                    <h3>Base Stats</h3>
                    <div class="stat-row">
                        <span class="label">HP</span>
                        <span class="stat-val">${pokemon.stats.hp}</span>
                        <div class="bar-bg"><div class="bar-fill" style="width: ${Math.min(pokemon.stats.hp, 100)}%"></div></div>
                    </div>
                    <div class="stat-row">
                        <span class="label">Attack</span>
                        <span class="stat-val">${pokemon.stats.attack}</span>
                        <div class="bar-bg"><div class="bar-fill" style="width: ${Math.min(pokemon.stats.attack, 100)}%"></div></div>
                    </div>
                    <div class="stat-row">
                        <span class="label">Defense</span>
                        <span class="stat-val">${pokemon.stats.defense}</span>
                        <div class="bar-bg"><div class="bar-fill" style="width: ${Math.min(pokemon.stats.defense, 100)}%"></div></div>
                    </div>
                    <div class="stat-row">
                        <span class="label">Sp. Atk</span>
                        <span class="stat-val">${pokemon.stats['special-attack']}</span>
                        <div class="bar-bg"><div class="bar-fill" style="width: ${Math.min(pokemon.stats['special-attack'], 100)}%"></div></div>
                    </div>
                    <div class="stat-row">
                        <span class="label">Sp. Def</span>
                        <span class="stat-val">${pokemon.stats['special-defense']}</span>
                        <div class="bar-bg"><div class="bar-fill" style="width: ${Math.min(pokemon.stats['special-defense'], 100)}%"></div></div>
                    </div>
                    <div class="stat-row">
                        <span class="label">Speed</span>
                        <span class="stat-val">${pokemon.stats.speed}</span>
                        <div class="bar-bg"><div class="bar-fill" style="width: ${Math.min(pokemon.stats.speed, 100)}%"></div></div>
                    </div>
                    <div class="stat-row">
                        <span class="label">Total</span>
                        <span class="stat-val"><strong>${totalStats}</strong></span>
                        <div class="bar-bg"><div class="bar-fill total" style="width: ${Math.min((totalStats / 600) * 100, 100)}%"></div></div>
                    </div>
                </div>
            </div>
        `
        contentSection.classList.add('hidden')
        detailModal.classList.remove('hidden')
    })
}

function closePokemonDetails() {
    detailModal.classList.add('hidden')
    contentSection.classList.remove('hidden')
}

function convertPokemonToLi(pokemon) {
   return  `
            <li class="pokemon ${pokemon.type}" onclick="openPokemonDetails(${pokemon.number})">
            <span class="number">#${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>
               
               <div class="detail">
                  <ol class="types">   
                     ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                  </ol>

                  <img src="${pokemon.photo}" 
                     alt="${pokemon.name}">
               </div>
            </li>
      `
}


function loadPokemonItens(offset, limit){
   pokeApi.getpokemons(offset,limit).then((pokemons = []) => {
      const newHtml = pokemons.map (convertPokemonToLi).join('')
      pokemonList.innerHTML += newHtml
   })
}

loadPokemonItens(offset, limit)

loadMoreButton.addEventListener('click', () => {
   offset += limit
   const qtdRecordNexPage = offset + limit

   if (qtdRecordNexPage >= maxRecords){
      const newLimit = maxRecords - offset
      loadPokemonItens(offset,newLimit)

      loadMoreButton.parentElement.removeChild(loadMoreButton)
   }else {
      loadPokemonItens(offset, limit)

   }


})