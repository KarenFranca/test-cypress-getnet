// User.js
export class User {
    constructor(name, job) {
        this.name = name;
        this.job = job;
    }

    static fromResponse(responseBody) {
        const { name, job } = responseBody;
        return new User(name, job);
    }

    toRequestBody() {
        return {
            name: this.name,
            job: this.job
        };
    }
}
