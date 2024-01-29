import { User } from '../pojo/User';

const apiUrl = 'https://reqres.in/api/users';
const expectedStatus = 201;

function sendUserRequest(user) {
  const requestBody = user.toRequestBody();

  return cy.request({
    method: 'POST',
    url: apiUrl,
    body: requestBody
  });
}

function validateUserResponse(response, expectedUser) {
  expect(response.status).to.equal(expectedStatus);

  const userFromResponse = User.fromResponse(response.body);

  expect(userFromResponse.name).to.equal(expectedUser.name);
  expect(userFromResponse.job).to.equal(expectedUser.job);
  expect(response.body).to.have.property('id');
  expect(response.body).to.have.property('createdAt');
}

describe('Teste de Cadastro', () => {
  it('Validação de cadastro de novo usuário', () => {
    const usuario = new User('morpheus', 'leader');

    sendUserRequest(usuario).then(response => {
      validateUserResponse(response, usuario);
    });
  });

  it('Validação de cadastro com nome em branco', () => {
    const usuarioComNomeEmBranco = new User('', 'leader');

    sendUserRequest(usuarioComNomeEmBranco).then(response => {
      validateUserResponse(response, usuarioComNomeEmBranco);
    });
  });

  it('Validação de cadastro com job em branco', () => {
    const usuarioComJobEmBranco = new User('morpheus', '');

    sendUserRequest(usuarioComJobEmBranco).then(response => {
      validateUserResponse(response, usuarioComJobEmBranco);
    });
  });
});