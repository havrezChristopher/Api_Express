// Importation du module Sequelize pour gérer la base de données
const { Sequelize } = require("sequelize");
//Récupération des variables d'environnement nécessaires à la connexion à la base de données
const { NAME_DATABASE, NAME_LOGING, PASSWORD } = process.env;

// Vérifie la présence des variables d'environnement nécessaires en prod !
if (!NAME_DATABASE || !NAME_LOGING || !PASSWORD ) {
  throw new Error(
    "Veuillez définir les variables NAME_DATABASE, NAME_LOGING et PASSWORD dans votre fichier d'environnement."
  );
}


// Création d'une nouvelle instance de l'objet Sequelize pour se connecter à MSSQL
const sequelize = new Sequelize(NAME_DATABASE, NAME_LOGING, PASSWORD, {
  host: "localhost", // Spécifie l'adresse du serveur de base de données
  dialect: "mssql", // Utilisez le dialecte 'mssql' pour SQL Server
  port: 1433, // Port de la base de données (par défaut pour MS SQL Server)
  logging: false, // Désactiver l'affichage des journaux de requêtes SQL dans la console
  dialectOptions: {
    options: {
      trustServerCertificate: true, // Activez cette option si vous utilisez un certificat auto-signé
    },
  },
});

// l'objet "db" pour stocker les modèles de base de données
const db = {};

// Associe l'instance Sequelize à "sequelize" et le module Sequelize à "Sequelize" pour une utilisation ultérieure
db.sequelize=sequelize
db.Sequelize=Sequelize

// Ajoute les modèles ici
db.Auth =require('./_auth.model')(sequelize)
db.Register = require('./_register.model')(sequelize)
db.User =require('./_user.model')

module.exports = db;
