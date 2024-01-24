class userDTO {

    // Props
    idUser;
    emailUser
    emailConfirmed
    firstname;
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
    firstname;
    lastname;
    gender;
    birthdate;

    constructor(data) {
        this.id = data.id;
        this.firstname = data.firstname;
        this.lastname = data.lastname;
        this.gender = data.gender;
        this.birthdate = data.birthdate;
    }
}

module.exports = {
    userDTO,
    userDetailDTO
}