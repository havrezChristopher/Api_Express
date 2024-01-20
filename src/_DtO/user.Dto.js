class userDTO {

    // Props
    id;
    firstname;
    lastname;

    constructor(data) {
        this.id = data.id;
        this.firstname = data.firstname;
        this.lastname = data.lastname;
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