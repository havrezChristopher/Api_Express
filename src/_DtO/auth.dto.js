class authDTO {
    idUser;
    emailUser;
    emailConfirmed;
    firstName;
    lastName;
    role;
    hashedPassword;
    jwt;
    birthday;
    gender;
    lastConnexion;
    idPhoto;
    constructor(data) {
        this.idUser = data.idUser;
        this.emailUser = data.emailUser;
        this.emailConfirmed = data.emailConfirmed;
        this.firstName = data.firstName;
        this.lastName = data.lastName;
        this.role = data.role;
        this.hashedPassword = data.hashedPassword;
        this.jwt = data.jwt;
        this.birthday = data.birthday;
        this.gender = data.gender;
        this.lastConnexion = data.lastConnexion;
        this.idPhoto = data.idPhoto;

    }
}

module.exports = authDTO;