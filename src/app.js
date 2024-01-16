// Importation et configuration de dotenv
require('dotenv').config();
// Module de gestion de la base de données
const testDb = require("./_Models/_db.model");
// Importation d'express
const express = require("express");
// Importation de la gestion d'async-errors
require('express-async-errors');

//déclaration de variable pour express
const app = express();
// Active l'analyse des données JSON
app.use(express.json());
// Gestion de la base de données
testDb.testDbConnection();
// Importation du reste, y compris les routes
const route = require("./_Routes/default.routes");
// Récupération des variables d'environnement depuis le fichier .env
const { PORT, NODE_ENV } = process.env;

// Vérifie la connexion à la base de données
const db = require("./_Models/_db.model");
// Check la connection avec la db
db.sequelize
  .authenticate()
  .then(() => console.log("connection OK!!!"))
  .catch((error) => console.log(`connection ECHOUER !!! : ${error}`));

// Migration de la base de données (s'exécute uniquement en mode de développement)
if (NODE_ENV === "development") {
  db.sequelize.sync({ alter: { drop: false } });
}

app.use("/api", route);
// Run sur le port spécifique
app.listen(PORT, () => {
  console.log(`Écoute du serveur sur http://localhost:${PORT}`);
});
