const { Sequelize, DataTypes, ModelStatic } = require("sequelize");
const db = require("./_index_Config_Db");
/**
 * Fonction pour créer un model Character (donc table de db)
 * Le JSDoc sert à l'autocomplétion
 * @param {Sequelize} sequelize
 * @returns {ModelStatic<any>}
 */

module.exports = (sequelize) => {
  // Définition de l'object sequelize (db)
  const Auth = sequelize.define(
    "Auth",
    {
      // L'id se crée automatiquement sinon il faut l indiquer
      idUser: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      emailUser: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true, // Validation pour vérifier si c'est une adresse e-mail valide
        },
      },
      //! Completer pour la validation d email
      emailConfirmed: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      // La valeur par défaut est false, car l'email n'est pas encore confirmé
        defaultValue: false,
      },
      firstName: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      role: {
        type: DataTypes.ENUM("admin", "user"),
        allowNull: false,
        defaultValue: "user",
      },

      hashedPassword: {
        type: DataTypes.STRING(250),
        allowNull: false,
      },
      jwt: {
        type: DataTypes.STRING(500),
        allowNull: true,
      },
      birthday: {
        type: DataTypes.DATEONLY, // Le type de données est DATEONLY pour stocker uniquement la date sans l'heure
        allowNull: true, // L'anniversaire est obligatoire
        validate: {
          isDate: true, // La date doit être au format de date valide
          isBefore: new Date(
            new Date().setFullYear(new Date().getFullYear() - 18)
          ) // La date doit être d'au moins 18 ans en arrière
            .toISOString() // Convertir la date en chaîne au format ISO (AAAA-MM-JJ)
            .split("T")[0], // Extraire la partie de date de la chaîne ISO
        },
      },
      gender: {
        type: DataTypes.ENUM("H", "F"),
        allowNull: false,
        defaultValue: "F",
      },
      // ! a voir ....
        lastConnexion: {
          type: DataTypes.DATE,
          allowNull: true,
        },
      idPhoto: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    {
      // Option de création propre à Sequelize (voir doc)
      createdAt: true,
      tableName: "Users",
      indexes: [
        {
          // Création de contraintes uniciter
          //donc ici la clé unique de la table sera le melange de auth/emailUser et jwt
          name: "UK_Auth__jwt",
          // on crée la clé depuis la colonne login et jwt
          fields: ["emailUser", "jwt"],
          unique: false,
        },
      ],
    }
  );
  return Auth;
};
