// Importer route.specifique.js
const authRouter = require('./_auth.router');
const userRouter = require('./_user.route')
// const evenementRouter = require('./evenements.route')


//  Importation du module de routage d'Express
const router = require('express').Router();



// Utilisation du router pour gérer les routes de nos Entiter 
router.use('/auth', authRouter);
router.use('/user',userRouter)
// router.use('/evenement',evenementRouter)

//  Exportation du routeur
module.exports = router