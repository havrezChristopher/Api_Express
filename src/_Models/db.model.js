//Importation du module Sequelize pour gérer la base de données
import Sequelize from 'sequelize';
//Récupération des variables d'environnement nécessaires à la connexion à la base de données
const { NAME_DATABASE,NAME_LOGING, PASSWORD} = process.env;

// Création d'une nouvelle instance de l'objet Sequelize pour se connecter à MSSQL

export const sequelize = new Sequelize(NAME_DATABASE, NAME_LOGING, PASSWORD, {
  host: 'localhost', // Spécifie l'adresse du serveur de base de données
  dialect: 'mssql', // Utilisez le dialecte 'mssql' pour SQL Server
  // disable logging; default: console.log
  logging: false,
  dialectOptions: {
    options: {
      trustServerCertificate: true, // Activez cette option si vous utilisez un certificat auto-signé
    },
  },
});

// l'objet "db" pour stocker les modèles de base de données
export const db = {};

// Associe l'instance Sequelize à "sequelize" et le module Sequelize à "Sequelize" pour une utilisation ultérieure
db.sequelize = sequelize;
db.Sequelize = Sequelize;


//Fonction pour tester la connexion à la base de données
export const testDbConnection = async () => {
    try {
      await sequelize.authenticate();
      console.log('Connexion à la base de données réussie!');
      return true;
    } catch (error) {
      console.log('Connexion à la base de données impossible!');
      console.error(error);
      return false;
    }
  };

  //Exporte la fonction de test de connexion ainsi que l'objet "db" pour être utilisés ailleurs dans l'application
