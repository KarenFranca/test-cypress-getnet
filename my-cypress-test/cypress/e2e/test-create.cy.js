describe('Teste de Cadastro', () => {
  it('Validação de cadastro de novo usuário', () => {
    const usuario = {
      name: 'morpheus',
      job: 'leader'
    };

    // Realiza a requisição POST para /api/users
    cy.request({
      method: 'POST',
      url: 'https://reqres.in/api/users',
      body: usuario
    }).then((response) => {
      // Assure que a resposta tenha o status 201
      expect(response.status).to.equal(201);

      // Assure que a resposta contenha as informações esperadas
      expect(response.body).to.have.property('name', usuario.name);
      expect(response.body).to.have.property('job', usuario.job);
      expect(response.body).to.have.property('id');
      expect(response.body).to.have.property('createdAt');
    });
  });
});
