# Netflix Clone

Este é um projeto de clone da interface da Netflix, construído usando React e a API do TMDB. O projeto inclui uma página inicial com várias seções de filmes, uma funcionalidade de pesquisa e uma página de detalhes do filme.

## Funcionalidades

- Página inicial com várias seções categorizadas (Como 'Mais Votados', 'Ação', 'Comédias', etc.)
- Barra de navegação com campo de pesquisa e botão de login
- Página de detalhes do filme
- Página de login
- Funcionalidade de pesquisa para buscar filmes

## Instalação

1. Clone o repositório para o seu ambiente local:
    ```bash
    git clone https://github.com/seu-usuario/netflix-clone.git
    cd netflix-clone
    ```

2. Instale as dependências:
    ```bash
    npm install
    ```

3. Crie um arquivo `.env` na raiz do projeto e adicione a sua chave da API do TMDB:
    ```
    REACT_APP_TMDB_API_KEY=0050d63243a273e87495d98a2f4a614a
    ```

## Executando o Projeto

1. Inicie o servidor de desenvolvimento:
    ```bash
    npm start
    ```

2. Abra [http://localhost:3000](http://localhost:3000) no seu navegador para visualizar o projeto.

## Estrutura do Projeto

O projeto está estruturado em pastas e arquivos da seguinte forma:
netflix-clone/
├── public/
│ ├── index.html
│ ├── logo.png // Coloque aqui o logo da Netflix ou uma versão simplificada
├── src/
│ ├── components/
│ │ ├── NavBar.jsx
│ │ ├── NavBar.css
│ │ ├── MovieCard.jsx
│ │ ├── MovieCard.css
│ │ ├── MovieRow.jsx
│ │ ├── MovieRow.css
│ ├── pages/
│ │ ├── HomePage.jsx
│ │ ├── HomePage.css
│ │ ├── MovieDetailsPage.jsx
│ │ ├── MovieDetailsPage.css
│ │ ├── LoginPage.jsx
│ │ ├── LoginPage.css
│ │ ├── SearchResultsPage.jsx
│ │ ├── SearchResultsPage.css
│ ├── App.jsx
│ ├── App.css
│ ├── index.js
│ ├── index.css
│ ├── requests.js
├── .env
├── package.json
└── README.md


## Notas

- Certifique-se de substituir `'0050d63243a273e87495d98a2f4a614a'` pela sua própria chave da API do TMDB.
- Se você tiver qualquer dúvida ou problema, por favor, abra uma issue no repositório.

