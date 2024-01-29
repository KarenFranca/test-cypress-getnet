// Define a classe User (POJO)
export default class User {
    constructor(name, job) {
        this.name = name;
        this.job = job;
    }

    // Método estático para criar uma instância User a partir de um objeto de resposta
    static fromResponse(responseBody) {
        const { name, job } = responseBody;
        return new User(name, job);
    }

    // Método para converter o POJO em um formato de corpo de requisição
    toRequestBody() {
        return {
            name: this.name,
            job: this.job
        };
    }
}
