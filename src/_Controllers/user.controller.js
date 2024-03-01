const userService = require("../_Services/user.services");
const userValidator = require("../_Validators/user.validator");

const userController = {
  getById: async (req, res) => {
    // Récupération de l'id depuis les paramètres
    try {
      const { idUser } = req.params;

      // Vérification de l'id, s'il est d'un autre type que number alors, 400
      if (!idUser) {
        res
          .sendStatus(400)
          .json({ message: "Paramettre Manquant ou invalide !" });
        return;
      }

      // Récupération des informations demandées
      const userDTO = await userService.fetchOne(idUser);

      // Si pas d'object correspondant à l'id, 404
      if (!userDTO) {
        return res.sendStatus(404).json({ message: "Utilisateur inexistant" });
      }

      // Si tout s'est bien passé, 200 et envoi des informations
      return res.status(200).json(userDTO);
    } catch (error) {
      console.error("Erreur lors de la récupération de l’utilisateur:", error);
      // code d'erreur générique
      return res.status(500).json({ message: "Erreur serveur" });
    }
    //  Version API_REST_FULL
  },
  getEMAIL: async (req, res) => {
    // Récupération de l'id depuis les paramètres

    const { emailUser } = req.body;

    // Récupération des informations demandées
    const userDTO = await userService.fetchEmail(emailUser);

    // Si pas d'object correspondant à l'id, 404
    if (!userDTO) {
      res.sendStatus(404);
      return;
    }

    // Si tout s'est bien passé, 200 et envoi des informations
    res.status(200).json(userDTO);
    //  Version API_REST_FULL
  },
  getAll: async (req, res) => {
    console.log("All");
    const usersDTO = await userService.fetchAll();
    res.status(200).json(usersDTO);
  },
  add: async (req, res) => {
    // On récupère les informations rentrées par l'utilisateur
    const userData = req.body;
    // Validation des informations rentrées par l'utilisateur
    const validatedData = await userValidator.validate(userData);

    // On envoi à la db ls informations
    const userInserted = await userService.insert(validatedData);

    res
      // On informe que l'insertion de données s'est correctement déroulée
      .status(201)
      .json({ message: "Utilisateur Correctements Enregistrer" })
      // On redirige l'utilisateur sur les informations détaillées de l utilisateur qu'il vient de créer (via son id)
      .location(`api/user/${userInserted.id}`)
      // On affiche les informations
      .json(userInserted);
  },
  //! *****************************************************************************************************************
  updateUser: async (req, res) => {
    const { idUser } = req.params;

    try {
      
      // Vérification de l'existence de l'utilisateur
      const user = await userService.fetchOne(idUser);
      if (!user) {
        return res.status(404).json({ message: "Utilisateur non trouvé" });
      }

      // Mise à jour de l'utilisateur
      const updatedUser = await userService.updateUser(idUser, req.body);
      return res.json({
        message: "Utilisateur mis à jour avec succès",
        user: updatedUser,
      });
    } catch (err) {
      console.error("Erreur lors de la mise à jour de l’utilisateur:", err);
      return res
        .status(500)
        .json({ message: "Erreur de base de données", error: err });
    }
  },

  //! *********************************************************************************************************************
  // Supprimer (mettre à la poubelle) un article
  trashUser: async (req, res) => {
    try {
      const { idUser } = req.params;
      const deleted = await User.destroy({ where: { id: id } });
      if (deleted) {
        res.status(204).send();
      } else {
        res.status(404).json({ message: "User not found" });
      }
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  // Restaurer un User depuis la poubelle
  untrashUser: async (req, res) => {},


  delete: async (req, res) => {
    // Récupération de l'id depuis les paramètres
    const { idUser } = req.params;

    try {
      // Vérification de l'existence de l'utilisateur
      const user = await userService.fetchOne(idUser);
      if (!user) {
        return res.status(404).json({ message: 'Utilisateur Non Trouver' });
      }

    // Envoi de l'id au service pour suppression des infos
    const isDeleted = await userService.delete(idUser);

    // Si supprimé, renvoyer 204 sans corps
    if (isDeleted) {
      return res.status(204).end();
    } else {
      // Si l'utilisateur n'a pas pu être supprimé pour une raison inconnue
      return res.status(500).json({ message: 'Erreur lors de la suppression de l’utilisateur' });
    }
  } catch (error) {
    console.error("Erreur lors de la suppression de l’utilisateur:", error);
    return res.status(500).json({ message: 'Erreur de base de données', error: error.message });
  }
},
}

module.exports = userController;
