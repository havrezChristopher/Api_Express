const authValidator = require("../_Validators/auth.validator");
// Compléxiter du hashage sa s appel le sault 
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const authService = require("../_Services/auth.service");

const authController = {
  register: async (req, res) => {
    // Récupération des données utilsateur
    const authData = req.body;

    // Validation les informations récupérées depuis les données utilisateur
    const validatedData = await authValidator.validate(authData);

    // Destructuring des données vérifées
    const {
      emailUser,
      password,
      emailConfirmed,
      firstName,
      lastName,
      role,
      jwt,
      birthday,
      gender,
      lastConnexion,
      idPhoto,
    } = validatedData;
    const hashedPassword = bcrypt.hashSync(password, 10);
    // Envoi des données validées et hashées à la DB
    const authInserted = await authService.insert({
      hashedPassword,
      emailUser,
      password,
      emailConfirmed,
      firstName,
      lastName,
      role,
      jwt,
      birthday,
      gender,
      lastConnexion,
      idPhoto,
    });
    if (authInserted) {
      res
        // On informe que l'insertion des données s'est correctement déroulée, et que le compte est crée
        .status(201).json('SucSses Utilisateur inserer ')
        // .location pour envoyer les donner de l utilisateur sur la page voulue (api/auth/login)sync avec le front !
        .json(authInserted);
    }
  },

  login: async (req, res) => {
   

    try {
      const { emailUser, password } = req.body;
      // Vérification de l'existence de l'utilisateur via son email
      const user = await authService.exist(emailUser);
      if (!user) {
        // Si l'utilisateur n'existe pas, renvoi une réponse 401 (Unauthorized)
        return res.status(401).json({ message: "AdreSse Email non trouvé ..." });
      }
            // Vérification du password fourni par l'utilisateur avec le password hashé dans la DB
            const passwordMatch = await bcrypt.compare(password, user.hashedPassword);
            if (!passwordMatch) {
              // Si les mots de passe ne correspondent pas, renvoi une réponse 401 (Unauthorized)
              return res.status(401).json({ message: "Mot de passe incorrect" });
            }
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
        userId: user.id,
        emailUser: user.login,
      };
      const options = {
        expiresIn: "15M",
      };

      // Signer le token (jwt) avec le SECRET
      const secret = process.env.JWT_SECRET;
      const token = jwt.sign(payload, secret, options);

      // Stocker le token (jwt) dans la DB
      const clientJwt = await authService.addJwt(token, user.idUser);

      if (clientJwt) {
        // Si l'insertion s'est correctement déroulée, on envoi les informations dans le header et au front en json
        console.log('Token',token);
        console.log('play ',payload);
        res.setHeader("Authorization", `Bearer ${token}`);
        return res.status(200).json({ token });
      }
    } catch (err) {
      console.error(err);
      res.sendStatus(404);
    }
  },
};

module.exports = authController;
