// Importer route.specifique.js
const authRouter = require('./_auth.router');
// const registerRouter = require('./_register.router');
// const routerEvenements =  require('./evenements.route')
// const routerPanier =  require('./panier.route')
// const routerProduit =  require('./produit.route')
// const routerImage =  require('./image.route')



//  Importation du module de routage d'Express
const router = require('express').Router();



// Utilisation du router pour gérer les routes de nos Entiter 
router.use('/auth', authRouter);
// router.use('/register', registerRouter);
//  router.use('/evenements',routerEvenements);
//  router.use('/panier',routerPanier);
//  router.use('/produit',routerProduit);
//  router.use('/image',routerImage);

//  Exportation du routeur
module.exports = router