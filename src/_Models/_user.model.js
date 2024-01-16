import { DataTypes, Model } from 'sequelize';
import db from './_db.model';
/**
 * Fonction pour créer un modèle Utilisateur (table de la base de données)
 * Le JSDoc sert à l'autocomplétion
 * @param {import('sequelize').Sequelize} sequelize
 * @returns {import('sequelize').ModelDefined}
 */
const createUserModel = (sequelize) => {
  // Définition de la classe User étendant la classe Model de Sequelize
  class User extends Model {}

  // Initialisation du modèle User avec les attributs de la table
  User.init(
    {
      idUser: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      motsDePasse: {
        type: DataTypes.STRING,
        allowNull: false,
      },

    },
    {
      sequelize, // Instance Sequelize à laquelle le modèle est associé
      tableName: 'User', // Nom de la table dans la base de données
      timestamps: true, // Activation des champs createdAt et updatedAt
      indexes: [
        // {
        //   name: '',
        //   fields: [''],
        //   unique: false,
        // },
        // // ... (définition d'autres indexes si nécessaire)
      ],
    }
  );

  return User; // Retourne le modèle User défini
};

export default createUserModel; // Exporte la fonction de création du modèle par défaut

