const express = require("express");
const userRouter = require("express").Router();
// Import du contrôleur lié

const userController = require("../_Controllers/user.controller");

// Route pour récupérer tous les utilisateurs
userRouter
  .route("")
  .get(userController.getAll)
  .all((req, res) => {
    res.sendStatus(405); // Pour tout autre verbe HTTP, renvoyer une erreur (Méthode non autorisée)
  });
// #region C R U D 
userRouter
  .route("/:idUser")
  .get(userController.getById) // Récupérer un utilisateur par ID
  .patch(userController.updateUser) // Mise à jour d'un utilisateur
  .delete(userController.delete) // Suppression d'un utilisateur
  .all((req, res) => {
    res.sendStatus(405);
  });
userRouter
  .route("/untrash/:idUser")
  .post(userController.untrashUser)         // Restaurer un article depuis la poubelle
  .all((req, res) => {
    res.sendStatus(405);
  });
userRouter
  .route("/trash/:idUser")
  .delete(userController.trashUser)         // Supprimer (mettre à la poubelle)
  .all((req, res) => {
    res.sendStatus(405);
  });

// #endregion C R U D

// #region * Autre syntax
// userRouter.get('/:idUser',userController.getById)
// userRouter.post('/register',userController.getAll)
// userRouter.patch('/:idUser',userController.updateUser)
// userRouter.delete('/idUser',userController.delete)
//  #endregion fin de syntax

module.exports = userRouter;
