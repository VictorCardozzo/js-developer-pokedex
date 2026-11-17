# Pokédex JS

Aplicação web interativa de uma Pokédex desenvolvida com HTML5, CSS3 e JavaScript puro (Vanilla JS), consumindo dados em tempo real da [PokéAPI](https://pokeapi.co/).

🔗 **[Acesse o projeto online aqui](https://victorcardozzo.github.io/js-developer-pokedex/)**

## ✨ Funcionalidades

- **Listagem Paginada:** Carregamento dinâmico de Pokémon com paginação incremental (*Load More*).
- **Estilização Dinâmica por Tipo:** Cores de fundo e badges adaptadas automaticamente ao tipo principal de cada Pokémon (`grass`, `fire`, `water`, etc.).
- **Tela de Detalhes (Desafio):** Ao clicar em qualquer card, exibe a ficha técnica completa com:
  - Número formatado (`#001`), tipos e imagem oficial em alta definição.
  - Informações físicas (*Height*, *Weight* e *Abilities*).
  - Gráfico de barras proporcional para os *Base Stats* (*HP*, *Attack*, *Defense*, *Sp. Atk*, *Sp. Def*, *Speed* e *Total*).

## 🛠️ Tecnologias Utilizadas

- **HTML5** (Estruturação semântica)
- **CSS3** (Flexbox, Grid Layout, variáveis, pseudo-elementos e design responsivo)
- **JavaScript (ES6+)** (`Fetch API`, `Promises`, manipulação de DOM e orientação a objetos)
- **PokéAPI** (API RESTful para consulta dos dados)

## 🚀 Como executar localmente

1. Clone este repositório:
   ```bash
   git clone [https://github.com/VictorCardozzo/js-developer-pokedex.git](https://github.com/VictorCardozzo/js-developer-pokedex.git)
   ```
2. Acesse a pasta do projeto:
   ```bash
   cd js-developer-pokedex
   ```
3. Abra o arquivo `index.html` no seu navegador ou utilize a extensão **Live Server** no VS Code.