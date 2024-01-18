const express =require ('express')
const routerUser = require('express').Router()
// Import du controleur lier 

const userController = require('../_Controllers/user.controller')

routerUser.get('',userController.getAll)
routerUser.get('/:id',userController.getOne)
routerUser.post('/register',userController.addUser)
routerUser.patch('/:id',userController.updateUser)
routerUser.delete('/:id',userController.delete)



// Exportation du routeur specifique
module.exports=routerUser