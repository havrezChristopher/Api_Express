// const userService = require('../_Services/user.services');
// const userValidator = require('../_Validators/user.validator');

// const userController = {
//     getById: async (req, res) => {
//         // Récupération de l'id depuis les paramètres
//         const { id } = req.params;

//         // Vérification de l'id, s'il est d'un autre type que number alors, 400
//         if (isNaN(id)) {
//             res.sendStatus(400)
//             return;
//         }

//         // Récupération des informations demandées
//         const userDTO = await userService.fetchOne(id);

//         // Si pas d'object correspondant à l'id, 404
//         if (!userDTO) {
//             res.sendStatus(404)
//             return;
//         }

//         // Si tout s'est bien passé, 200 et envoi des informations
//         res.status(200).json(userDTO);
//         //  Version API_REST_FULL  
//     },
//     getAll: async (req, res) => {
//         const usersDTO = await userService.fetchAll();
//         res.status(200).json(usersDTO);
//     },
//     add: async (req, res) => {
//         // On récupère les informations rentrées par l'utilisateur
//         const userData = req.body;
//         // Validation des informations rentrées par l'utilisateur
//         const validatedData = await userValidator.validate(userData);

//         // On envoi à la db ls informations
//         const userInserted = await userService.insert(validatedData);


//         res
//             // On informe que l'insertion de données s'est correctement déroulée
//             .status(201)
//             // On redirige l'utilisateur sur les informations détaillées du personnage qu'il vient de créer (via son id)
//             .location(`api/user/${userInserted.id}`)
//             // On affiche les informations
//             .json(userInserted)
//     },
//     update: async (req, res) => {
//         res.sendStatus(501);
//     },
//     delete: async (req, res) => {
//         // Récupération de l'id depuis les paramètres
//         const { id } = req.params;

//         // Envoi de l'id au service pour suppression des infos
//         const isDeleted = await userService.delete(id);

//         // Si supprimé, 204
//         if (isDeleted) {
//             res.sendStatus(204)
//             return;
//         }
//         // Si pas, 404
//         res.sendStatus(404);
//     }
// };

// module.exports = userController;
