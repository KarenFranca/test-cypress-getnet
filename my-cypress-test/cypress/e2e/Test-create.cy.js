import { User } from '../pojo/User';

describe('Teste de Cadastro', () => {
  it('Validação de cadastro de novo usuário', () => {
    const usuario = new User('morpheus', 'leader');
    const requestBody = usuario.toRequestBody();

    cy.request({
      method: 'POST',
      url: 'https://reqres.in/api/users',
      body: requestBody
    }).then((response) => {
      expect(response.status).to.equal(201);

      const userFromResponse = User.fromResponse(response.body);

      expect(userFromResponse.name).to.equal(usuario.name);
      expect(userFromResponse.job).to.equal(usuario.job);
      expect(response.body).to.have.property('id');
      expect(response.body).to.have.property('createdAt');
    });
  });

  it('Validação de cadastro com nome em branco', () => {
    const usuarioComNomeEmBranco = new User('', 'leader');
    const requestBodyNomeEmBranco = usuarioComNomeEmBranco.toRequestBody();

    cy.request({
      method: 'POST',
      url: 'https://reqres.in/api/users',
      body: requestBodyNomeEmBranco
    }).then((response) => {
      expect(response.status).to.equal(201);

      const userFromResponse = User.fromResponse(response.body);

      expect(userFromResponse.name).to.equal('');
      expect(userFromResponse.job).to.equal(usuarioComNomeEmBranco.job);
      expect(response.body).to.have.property('id');
      expect(response.body).to.have.property('createdAt');
    });
  });

  it('Validação de cadastro com job em branco', () => {
    const usuarioComJobEmBranco = new User('morpheus', '');
    const requestBodyJobEmBranco = usuarioComJobEmBranco.toRequestBody();

    cy.request({
      method: 'POST',
      url: 'https://reqres.in/api/users',
      body: requestBodyJobEmBranco
    }).then((response) => {
      expect(response.status).to.equal(201);

      const userFromResponse = User.fromResponse(response.body);

      expect(userFromResponse.name).to.equal(usuarioComJobEmBranco.name);
      expect(userFromResponse.job).to.equal('');
      expect(response.body).to.have.property('id');
      expect(response.body).to.have.property('createdAt');
    });
  });
});
