const authValidator = require("../_Validators/auth.validator");
// Compléxiter du hashage sa s appel le sault
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const authService = require("../_Services/auth.service");

const authController = {
  // #region *** Register ***
  register: async (req, res) => {

  try {
    // Récupération des données utilisateur depuis la requête
    const authData = req.body;

    // Validation des données utilisateur
    const validatedData = await authValidator.validate(authData);

    // Hashage du mot de passe
    const hashedPassword = bcrypt.hashSync(validatedData.password, 10);

    // Ajout du rôle par défaut "utilisateur"
    const userDataRole = {
      ...validatedData,
      hashedPassword,
      role: "user", // Attribution du rôle par défaut
    };

    // Insertion de l'utilisateur dans la base de données avec le rôle par défaut
    const authInserted = await authService.insert(userDataRole);

    // Si l'insertion réussit, renvoyer une réponse de succès
    res.status(201).json({ message: "Utilisateur inséré avec succès", authInserted });
  } catch (error) {
    // En cas d'erreur, renvoyer une réponse d'erreur
    console.error(error);
    res.status(500).json({ message: "Erreur lors de l'inscription" });
  }
},
 // #endregion Register
  

  login: async (req, res) => {
    try {
      const { emailUser, password } = req.body;
      // Vérification de l'existence de l'utilisateur via son email
      const user = await authService.exist(emailUser);
      if (!user) {
        // Si l'utilisateur n'existe pas, renvoi une réponse 401 (Unauthorized)
        return res.status(401).json({ message: "Utilisateur non trouvé ..." });
      }
      // Vérification du password fourni par l'utilisateur avec le password hashé dans la DB
      const passwordMatch = await bcrypt.compare(password, user.hashedPassword);
      if (!passwordMatch) {
        // Si les mots de passe ne correspondent pas, renvoi une réponse 401 (Unauthorized)
        return res.status(401).json({ message: "Mot de passe incorrect" });
      }
      //! **********************               Mots de passe perdu                     **********************************************

      //! **********************               Mots de passe perdu                     **********************************************
      // Vérification de l'existence d'un token (jwt) pour cet utilisateur
      const existingToken = await authService.getJwt(user.idUser);
      if (existingToken.jwt) {
        // Vérification de la validité du token (jwt)

        const tokenValid = await authService.verifyJwt(existingToken.jwt);

        if (tokenValid) {
          // Le token (jwt) est valide, envoi de l'information dans le header de la requête

          res.setHeader("Authorization", `Bearer ${existingToken.jwt}`);
          return res.status(200).json({ token: existingToken.jwt });
        }
      }
      // Si les password correspondent, on va créer un token (jwt) pour l'utilisateur
      const payload = {
        userId: user.idUser,
        emailUser: user.emailUser,
        role: user.role,
      };
      const options = {
        expiresIn: "20D",
      };

      // Signer le token (jwt) avec le SECRET
      const secret = process.env.JWT_SECRET;
      const token = jwt.sign(payload, secret, options);

      // Stocker le token (jwt) dans la DB
      const clientJwt = await authService.addJwt(token, user.idUser);

      if (clientJwt) {
        // Si l'insertion s'est correctement déroulée, on envoi les informations dans le header et au front en json
        res.setHeader("Authorization", `Bearer ${token}`);
        return res.status(200).json({ token });
      }
    } catch (err) {
      console.error(err);
      res.status(401).json({ message: "Authentification échouée" })
    }
  },
};

module.exports = authController;
