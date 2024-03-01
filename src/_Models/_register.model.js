const {Sequelize, DataTypes, ModelStatic } = require('sequelize');

/**
 * Fonction pour créer un model Register (donc table de db)
 * Le JSDoc sert à l'autocomplétion
 * @param {Sequelize} sequelize
 * @returns {ModelStatic<any>}
 */

module.exports = (sequelize) => {
    // Définition de l'object sequelize (db)
    const Register = sequelize.define('Register', {
        // L'id se crée automatiquement si non spécifié ici
        firstname: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        lastname: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        birthdate: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        gender: {
            type: DataTypes.ENUM('F', 'M', 'X'),
            allowNull: true
        }
    }, {
        // Option de création propre à Sequelize (voir doc)
        createdAt: true,
        tableName: 'Registers',
        indexes: [
            {
                // Création de contraintes
                name: 'UK_Register__Name',
                fields: ['firstname', 'lastname'],
                unique: false,
            },
        ]
    })
    return Register;
}
