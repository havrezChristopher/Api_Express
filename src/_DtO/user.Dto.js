class userDTO {

    // Props
    idUser;
    emailUser
    emailConfirmed
    // Prenom =>
    firstname;
    // Nom =>
    lastname;
    role;
    hashedPassword
    jwt
    birthday
    gender
    lastConnexion
    idPhoto


        // !
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

class userDetailDTO {

    // Props
    id;
    idPhoto
    role;
    firstname;
    lastname;
    birthdate;
    gender;
    // emailUser
    // emailConfirmed

    constructor(data) {
        this.id = data.id;
        this.idPhoto =data.idPhoto;
        this.role = data.role;
        this.firstname = data.firstname;
        this.lastname = data.lastname;
        this.birthdate = data.birthdate;
        this.gender = data.gender;
    }
}

module.exports = {
    userDTO,
    userDetailDTO
}