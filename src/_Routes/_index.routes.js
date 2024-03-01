// Importer route.specifique.js
const authRouter = require('./_auth.router');
const userRouter = require('./_user.route')
const articleRouter=require('./_article.route')
const ForgotPassword =require('./ForgotPassword.route')
// const evenementRouter = require('./evenements.route')


//  Importation du module de routage d'Express
const router = require('express').Router();
// Import middelWareToken
const checkTokenMiddleware = require ('../_Middleware/Token_Middleware/check.token');
const { required } = require('../_Validators/auth.validator');
//! *********************Middleware pour logger les dates de toute les requette sur toute les route*********************
router.use((req,res,next) =>{
    const event = new Date()
    // console.log('Route Authentification Time ::',event.toString());
    // next()
    //! Récuperation ip etc ... 
    const clientIp = req.ip || req.connection.remoteAddress || req.headers['x-forwarded-for'];
    console.log(`[Date: ${event.toString()}] - [IP: ${clientIp}] - [Route: ${req.originalUrl}] - [Method: ${req.method}]`);
    next();
})
//* Adapter pour les router Spécifique et ajouter option voir Doc Express (req)
//! *********************Middleware pour logger les dates de toute les requette sur toute les route*********************


// Utilisation du router pour gérer les routes de nos Entiter 
router.use('/auth', authRouter);
// checkTokenMiddleware ==> Great sa fonctionne touche a rien !
router.use('/user',userRouter);
router.use('/article',articleRouter)

//!ForgotPassword 
router.use('/ForgotPassword', ForgotPassword);

//  Exportation du routeur
module.exports = router