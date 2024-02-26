class articleDTO {

    id;
    nom
    description
    image
    prix
    quantiter
    enStock


        constructor(data) {
            this.id = data.id;
            this.nom = data.nom;
            this.description = data.description;
            this.image = data.image;
            this.prix = data.prix;
            this.quantiter = data.quantiter;
            this.enStock = data.enStock;
    
        }
    
}

class articleDetailDTO {

    // Props
    id;
    nom
    description
    image
    prix
    quantiter
    enStock

    constructor(data) {
        this.id = data.id;
        this.nom = data.firstname;
        this.description = data.description;
        this.image = data.image;
        this.prix = data.prix;
    }
}

module.exports = {
    articleDTO,
    articleDetailDTO
}