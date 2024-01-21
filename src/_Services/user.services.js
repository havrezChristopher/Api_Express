// const { userDTO, userDetailDTO } = require('../_DtO/user.Dto');
// const db = require('../_Models/_index_Config_Db');
// const { Op } = require('sequelize');

// const userService = {
//     // la methode 
//     fetchAll: async () => {
//         // Contacte de la db pour récupérer les info avec la methode fetchAll
//         const users = await db.user.findAll();
//         // ici on va recupéré un tableau d objet 
//         // chaque éléments va etre associer a notre éléments DTO et va return un elements corespondant au dto
//         return users.map(char => new userDTO(char));
//     },

//     fetchOne: async (id) => {
//         // ici on dit tu rentre dans db tu va dans table user tu en cherche un qui a comme paramettre id 
//         // et tu me le retourne
//         const user = await db.user.findOne({
//             where: { id } // --> fetchOne propre a sequilize
//         });

//         return new userDetailDTO(user);
//     },

//     // Exemple de fetch plus détaillé
//     fetchFun: async () => {
//         //ici on va chercher toute les ocurence de la table ici user  
//         const users = await db.user.findAll({
//             // la ou le firstname est soite (terence) ou soite (BG)
//             // ici le .or et la condition de sequilize
//             where: db.Sequelize.or(
//                 {
//                     firstname: {
//                         // et ici le OP.like est la condition ou 
//                         [Op.like]: 'Terence'
//                     }
//                 },
//                 {
//                     firstname: {
//                         [Op.like]: 'BeauGosse'
//                     }
//                 }
//                 // on peux ajouter toute les option de recherche possible SQL juste utiliser lasyntax
//             )
//         });

//         return users.map(char => new userDTO(char))
//     },

//     insert: async (data) => {
//         const user = await db.user.create(data)
//         return new userDetailDTO(user)
//     },

//     delete: async (id) => {
//         const nbRowDeleted = await db.user.destroy({
//             where: { id } // --> { id: id }
//         });

//         return nbRowDeleted === 1;
//     }
// };

// module.exports = userService;