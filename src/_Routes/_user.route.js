const express =require ('express')
const routerUser = require('express').Router()
// Import du controleur lier 

const userController = require('../_Controllers/user.controller')

routerUser.route('')
    .get(userController.getAll)
    .all((req, res) => {
        res.sendStatus(405); // Pour tout autre verbe HTTP, renvoyer une erreur (Méthode non autorisée)
    });
    routerUser.route('/:idUser')
    .get(userController.getById)
    .all((req, res) => {
        res.sendStatus(405); 
    });
routerUser.get('/:idUser',userController.getById)
// routerUser.post('/register',userController.getAll)
routerUser.patch('/:idUser',userController.update)
routerUser.delete('/idUser',userController.delete)



// Exportation du routeur specifique
module.exports=routerUser