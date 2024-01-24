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
    //50MIN VIDEO

}
// le DTO sert de filtre a la requete on lui dit d aller rechercher les info que l on veux ...
// class registerDTO {
//     idUser;
//     emailUser;
//     firstName;
//     lastName;
//     role;
//     hashedPassword;
//     jwt;
//     gender;

//     constructor(data){
//         this.idUser = data.idUser;
//         this.emailUser = data.emailUser;
//         this.firstName = data.firstName;
//         this.lastName = data.lastName;
//         this.role = data.role;
//         this.hashedPassword = data.hashedPassword;
//         this.jwt = data.jwt;
//         this.gender = data.gender;

//     }
// }

module.exports = authDTO;