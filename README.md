
# web-crawler

Um web crawler básico capaz de acessar uma URL, baixar o conteúdo da página e extrair dados relevantes.



## Apêndice

- src/: Contém o código fonte.
- controllers/: Lógica do crawler.
- routes/: Definição das rotas da API.
- utils/: Funções utilitárias (ex: logs).
- config/: Configurações (ex: variáveis de ambiente).
- index.js: Ponto de entrada da aplicação.
- package.json: Gerenciamento de dependências.



## Referência

 - [Express](https://expressjs.com/): Framework para configurar o servidor.
 - [Axios](https://axios-http.com/docs/intro): Para realizar requisições HTTP de forma simples.
 - [Cheerio](https://cheerio.js.org/):  Uma biblioteca que permite manipulação de HTML semelhante ao jQuery, útil para extração de dados.
 - [Dotenv](https://www.npmjs.com/package/dotenv):Para gerenciamento de variáveis de ambiente.

## Rodando localmente

Clone o projeto

```bash
  git clone https://github.com/mmxm0/web-crawler.git
```

Entre no diretório do projeto

```bash
  cd web-crawler
```

Instale as dependências

```bash
  npm i
```

Inicie o servidor

```bash
  npm run dev
```

