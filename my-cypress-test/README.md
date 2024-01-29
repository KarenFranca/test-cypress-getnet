# Automação de API com Cypress

Este projeto é uma automação de teste para o cadastro de novos usuários em uma API utilizando o framework Cypress.

## Pré-requisitos

- [Node.js](https://nodejs.org/) instalado
- [npm](https://www.npmjs.com/) (Node Package Manager) instalado

## Instalação

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd nome-do-projeto
npm install
Configuração
Ajuste a URL da API:

Abra o arquivo cypress.json na raiz do projeto e ajuste a propriedade "baseUrl" para a URL da sua API.
Por padrão, estamos usando a API de exemplo Reqres.
{
  "baseUrl": "https://reqres.in"
}
Execução dos Testes
Execute os testes em modo de linha de comando:

npx cypress run
Isso executará os testes automaticamente e exibirá os resultados no console.

Execute os testes no Test Runner (modo interativo):

npx cypress open
Isso abrirá uma interface gráfica do Cypress, permitindo que você execute testes individualmente e visualize interativamente os resultados.

O que estamos testando?
Estamos realizando um teste de cadastro de novo usuário na API. O processo inclui:

Envio de uma requisição POST para o endpoint /api/users com dados do usuário.
Verificação se a resposta tem o status 201 (Created).
Verificação das informações retornadas na resposta, como o nome, cargo, ID e data de criação.
Estrutura do Projeto
cypress/e2e: Contém os arquivos de teste Cypress.
cypress/pojo: Contém os arquivos pojo.
cypress/support: Pode conter arquivos de suporte, como comandos personalizados.
cypress/plugins: Pode conter plugins Cypress, se necessário.
