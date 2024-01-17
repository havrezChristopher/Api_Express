//  Importation du module de routage d'Express
const router =  require('express').Router()

// Importer route.specifique.js
const routerUser =  require('./user.route')
// const routerEvenements =  require('./evenements.route')
// const routerPanier =  require('./panier.route')
// const routerProduit =  require('./produit.route')
// const routerImage =  require('./image.route')

// Utilisation du routeur pour gérer les routes de nos Entiter specifique! 
 router.use('/user',routerUser);
//  router.use('/evenements',routerEvenements);
//  router.use('/panier',routerPanier);
//  router.use('/produit',routerProduit);
//  router.use('/image',routerImage);

//  Exportation du routeur
module.exports = router