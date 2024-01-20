const {Sequelize, DataTypes, ModelStatic } = require('sequelize');
const db = require('./_index_Config_Db')
/**
 * Fonction pour créer un model Character (donc table de db)
 * Le JSDoc sert à l'autocomplétion
 * @param {Sequelize} sequelize
 * @returns {ModelStatic<any>}
 */

module.exports = (sequelize) => {
    // Définition de l'object sequelize (db)
    const Auth = sequelize.define('Auth', {
        // L'id se crée automatiquement sinon il faut l indiquer
        login: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        hashedPassword: {
            type: DataTypes.STRING(250),
            allowNull: false,
        },
        jwt: {
            type: DataTypes.STRING(500),
            allowNull: true,
        }
    }, {
        // Option de création propre à Sequelize (voir doc)
        createdAt: true,
        tableName: 'Users',
        indexes: [
            {
                // Création de contraintes uniciter
                //donc ici la clé unique de la table sera le melange de auth/login et jwt
                name: 'UK_Auth__jwt',
                // on crée la clé depuis la colonne login et jwt  
                fields: ['login', 'jwt'],
                unique: false,
            },
        ]
    })
    return Auth;
}