// Importation et configuration de dotenv
require('dotenv').config();

// Importation d'express et de la gestion d'async-errors permet la gestion des erreur Sans (try catch)
const express = require("express");
require("express-async-errors");


// Importation des Cors et du router
const cors = require('cors');
const router = require("./_Routes/_index.routes");


// Récupération des variables d'environnement depuis le fichier .env
const { PORT, NODE_ENV } = process.env;

// Initialisation de la db
const db = require("./_Models/_index_Config_Db");

// Check la connection avec la db
db.sequelize.authenticate()
    .then(() => console.log('Connection à la DB réussie'))
    .catch((error) => console.log(`*** Connection à la DB Fail *** : ${error}`));

// Migration de la db
if (NODE_ENV === 'development') {
    db.sequelize.sync({ alter: { drop: false}});
};
   

// Creation du serveur webAPI
const app = express();
// Utilisation du CORS juste après l'init du serveur express sans quoi, cela ne fonctionnera pas
app.use(cors());
app.use(express.json());

// Ajout du routing --> respect du RESTfull on ajoute '/api' comme route de base
app.use('/api', router)

// Run sur le port spécifique
app.listen(PORT, () => {
  console.log(`Écoute du serveur sur http://localhost:${PORT}`);
});
