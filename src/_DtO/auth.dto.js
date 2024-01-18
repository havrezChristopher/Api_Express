class authDTO {

    id;
    login;
    hashedPassword;

    constructor(data) {
        this.id = data.id;
        this.login = data.login;
        this.hashedPassword = data.hashedPassword;
    }
}

module.exports = authDTO;