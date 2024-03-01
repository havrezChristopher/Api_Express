const express = require("express");
const routerUser = require("express").Router();
// Import du contrôleur lié

const userController = require("../_Controllers/user.controller");

// Route pour récupérer tous les utilisateurs
routerUser
  .route("")
  .get(userController.getAll)
  .all((req, res) => {
    res.sendStatus(405); // Pour tout autre verbe HTTP, renvoyer une erreur (Méthode non autorisée)
  });
// Routes pour les opérations sur un utilisateur spécifique par id
routerUser
  .route("/:idUser")
  .get(userController.getById) // Récupérer un utilisateur par ID
  .all((req, res) => {
    res.sendStatus(405);
  });
routerUser
  .route("/:idUser")
  .patch(userController.updateUser) // Mise à jour d'un utilisateur
  .all((req, res) => {
    res.sendStatus(405);
  });
routerUser
  .route("/untrash/:idUser")
  .post(userController.untrashUser)         // Restaurer un article depuis la poubelle
  .all((req, res) => {
    res.sendStatus(405);
  });
routerUser
  .route("/trash/:idUser")
  .delete(userController.trashUser)         // Supprimer (mettre à la poubelle)
  .all((req, res) => {
    res.sendStatus(405);
  });
routerUser
  .route("/:idUser")
  .delete(userController.delete) // Suppression d'un utilisateur
  .all((req, res) => {
    res.sendStatus(405);
  });
//* autre syntax===>
// routerUser.get('/:idUser',userController.getById)
// routerUser.post('/register',userController.getAll)
// routerUser.patch('/:idUser',userController.update)
// routerUser.delete('/idUser',userController.delete)

// Exportation du routeur specifique
module.exports = routerUser;
