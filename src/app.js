//utilisation module ES6 avec l import
import express, { json } from 'express';
import http from 'http';
import cors from 'cors';
//Import Du module de routing Crée route !Ne pas oublier de rajouter .js pour le chemin 
import { routes } from './_Routes/routes.js';
//Methode de connection du db.model
import { testDbConnection } from './_Models/db.model.js';
//déclaration de variable pour init express
const app = express();


// 7.Gestion de la base de données
testDbConnection()
// Gestion des cors
app.use(cors)
//utilisation du json pour pouvoir parser les valeur récupérer
app.use(json());
//déclaration de variable pour Mon Routing
app.use(routes);
//Récupération des variables d'environnement depuis le fichier .env
const {PORT,NODE_ENV}= process.env


app.listen(process.env.PORT, () => {
  console.log(`***Connection*** ==> http://localhost:${process.env.PORT}`);
}); 