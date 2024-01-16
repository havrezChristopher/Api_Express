//utilisation module ES6 avec l import
import express, { json } from "express";
import http from "http";
import cors from "cors";
//Import Du module de routing Crée route !Ne pas oublier de rajouter .js pour le chemin
import { routes } from "./_Routes/default.routes.js";
//Methode de connection du db.model
import { testDbConnection } from "./_Models/_db.model.js";
//!***********************************   ( ===> Import <===)  **********************************************************

//déclaration de variable pour express
const app = express();
// Gestion de la base de données
testDbConnection();
// Gestion des CORS
app.use(cors());
// Utilisation de JSON pour pouvoir parser les valeurs récupérées
app.use(json());
// Déclaration de variable pour le routage
app.use("/api", routes);
// Run sur le port spécifique
app.listen(process.env.PORT, () => {
  console.log(`Écoute du serveur sur http://localhost:${process.env.PORT}`);
});
