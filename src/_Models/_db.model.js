//Importation du module Sequelize pour gérer la base de données
import Sequelize from "sequelize";

//Récupération des variables d'environnement nécessaires à la connexion à la base de données
const { NAME_DATABASE, NAME_LOGING, PASSWORD } = process.env;

// Vérifie la présence des variables d'environnement nécessaires
if (!NAME_DATABASE || !NAME_LOGING || !PASSWORD) {
  throw new Error(
    "Veuillez définir les variables NAME_DATABASE, NAME_LOGING et PASSWORD dans votre fichier d'environnement."
  );
}

// Création d'une nouvelle instance de l'objet Sequelize pour se connecter à MSSQL
export const sequelize = new Sequelize(NAME_DATABASE, NAME_LOGING, PASSWORD, {
  dialect: "mssql", // Dialecte de la base de données (Microsoft SQL Server)
  host: "localhost", // Hôte de la base de données
  port: 1433, // Port de la base de données (par défaut pour MS SQL Server)
  pool: {
    max: 5, // Nombre maximal de connexions dans le pool
    min: 1, // Nombre minimal de connexions dans le pool
    idle: 10000, // Durée maximale (en millisecondes) que la connexion peut rester inactive dans le pool avant d'être libérée
  },
  logging: false, // Désactiver l'affichage des journaux de requêtes SQL dans la console
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
    console.log("Connexion à la base de données Réussie !");
    return true;
  } catch (error) {
    console.log("Connexion à la base de données Impossible!");
    console.error(error);
    return false;
  }
};

//Exporte la fonction de test de connexion ainsi que l'objet "db" pour être utilisés ailleurs dans l'application

// Exportation de l'objet db en ajoutant export default {db,test} permet d export plusieur chose
export default db;
