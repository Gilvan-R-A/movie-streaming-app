<h1 align="center">
  Streaming de Filmes
</h1>

Aplicação para visualizar e gerenciar filmes favoritos,  consumindo a API do The Movie Database (TMDb).   

## Tecnologias Utilizadas   

- React.js   
- React Router   
- TypeScript   
- CSS Modules   
- API do TMDb   
- React Icons   

## Estrutura do Projeto   

```   
📦 movie-streaming
├── 📂 node_modules           # Dependências do projeto
├── 📂 public                 # Arquivos públicos (favicon, index.html, etc.)
├── 📂 src                    # Código-fonte principal
│   ├── 📂 assets             # Arquivos de mídia e estilos globais
│   ├── 📂 components         # Componentes reutilizáveis
│   │   ├── 📂 Footer
│   │   │   ├── Footer.tsx
│   │   │   ├── Footer.module.css
│   │   ├── 📂 MovieCard
│   │   │   ├── MovieCard.tsx
│   │   │   ├── MovieCard.module.css
│   │   ├── 📂 Navbar
│   │   │   ├── Navbar.tsx
│   │   │   ├── Navbar.module.css
│   ├── 📂 hooks              # Hooks personalizados
│   │   ├── useFavorites.ts
│   ├── 📂 pages              # Páginas do aplicativo
│   │   ├── 📂 Favorites
│   │   │   ├── Favorites.tsx
│   │   │   ├── Favorites.module.css
│   │   ├── 📂 Home
│   │   │   ├── Home.tsx
│   │   │   ├── Home.module.css
│   │   ├── 📂 MovieDetails
│   │   │   ├── MovieDetails.tsx
│   │   │   ├── MovieDetails.module.css
│   │   ├── 📂 SearchResults
│   │   │   ├── SearchResults.tsx
│   │   │   ├── SearchResults.module.css
│   ├── 📂 services           # Comunicação com a API
│   │   ├── api.ts
│   ├── App.css
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   ├── routes.tsx            # Gerenciamento das rotas
│   ├── vite-env.d.ts
├── .env                      # Variáveis de ambiente
├── .gitignore                # Arquivos ignorados pelo Git
├── index.html                # Estrutura base do projeto
├── package-lock.json         # Controle de versões das dependências
├── package.json              # Dependências e scripts npm
├── tsconfig.app.json         # Configuração do TypeScript para o app
├── tsconfig.json             # Configuração principal do TypeScript
├── tsconfig.node.json        # Configuração do TypeScript para o Node.js
└── vite.config.ts            # Configuração do Vite
```   

## Funcionalidades   

- Listagem de filmes populares   
- Busca por filmes   
- Adicionar filmes aos favoritos   
- Exibição de detalhes do filme   
- Resposividade para dispositivos móveis   

## Como instalar e rodar o projeto   

1. Clone o repositório:   

```
git clone https://github.com/Gilvan-R-A/movie-streaming-app   
```   
   
2. Entre na pasta do projeto:   

```   
cd movie-streaming   
```   
3. Instale as dependências:   

```   
npm install   
```   

4. Inicie o servidor:   

```   
npm run dev   
```   

5. Acesse no navegador:   

```   
http://localhost:5173   
```   

## Como Contribuir   

1. Faça um **fork** do repositório.   
2. Crie uma nova branch: git checkout -b minha-feature   
3. Faça as alterações e commit: git commit -m "Minha nova feature".   
4. Envie para o repositório remoto: git push origin minha-feature.   
5. Abra um **Pull Request.**   

