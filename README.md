# Nome do Projeto

Uma API RESTful construída com Node.js e Express, utilizando o padrão MVC. Esta API permite gerenciar usuários, incluindo operações de criação, leitura, atualização e exclusão (CRUD).

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript no servidor.
- **Express**: Framework web para Node.js, que facilita a construção de APIs.
- **Nodemon**: Ferramenta para reiniciar automaticamente o servidor durante o desenvolvimento.
- **Modelo MVC**: Estrutura de organização do código em Model, View e Controller.

## Funcionalidades

- **Visualizar todos os usuários**: Endpoint para obter uma lista de todos os usuários cadastrados.
- **Visualizar um usuário específico**: Endpoint para obter detalhes de um usuário específico através do seu ID.
- **Criar usuários**: Endpoint para adicionar novos usuários ao banco de dados.
- **Atualizar usuários**: Endpoint para modificar informações de um usuário existente.
- **Deletar usuários**: Endpoint para remover um usuário do banco de dados.

## Endpoints

- `GET /users`: Retorna todos os usuários.
- `GET /users/:id`: Retorna um usuário específico pelo ID.
- `POST /users`: Cria um novo usuário.
- `PUT /users/:id`: Atualiza um usuário existente pelo ID.
- `DELETE /users/:id`: Deleta um usuário pelo ID.
