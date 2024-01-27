// Importer route.specifique.js
const authRouter = require('./_auth.router');
const userRouter = require('./_user.route')
const ForgotPassword =require('./ForgotPassword.route')
// const evenementRouter = require('./evenements.route')


//  Importation du module de routage d'Express
const router = require('express').Router();
// Import middelWareToken
const checkTokenMiddleware = require ('../_Middleware/Token_Middleware/check.token')
//! *********************Middleware pour logger les dates de toute les requette sur toute les route*********************
router.use((req,res,next) =>{
    const event = new Date()
    console.log('Route Authentification Time ::',event.toString());
    next()
})
//* Adapter pour les router Spécifique et ajouter option voir Doc Express (req)
//! *********************Middleware pour logger les dates de toute les requette sur toute les route*********************


// Utilisation du router pour gérer les routes de nos Entiter 
router.use('/auth', authRouter);
router.use('/user',checkTokenMiddleware,userRouter)
//!ForgotPassword 
router.use('/ForgotPassword', ForgotPassword);
// router.use('/evenement',evenementRouter)

//  Exportation du routeur
module.exports = router