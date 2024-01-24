const authDTO  = require('../_Dto/auth.dto');
// ici quand on a plusieur DTO on sible le dossier 
const db = require('../_Models/_index_Config_Db');
const jwt = require('jsonwebtoken');
const authService = {
// 1. Envoie des donner a la db pour la création du compte
// 2. Envoie des donner a la db pour le login
// 3. Envoie des donner a la db pour addToken
// 4. Envoie des donner a la db pour le recupere des donnée pour voir si le token existe deja
// 5. Envoie des donner a la db pour Si le token existe est toujours valid
    exist: async (emailUser) => {
        const auth = await db.Auth.findOne({
            where: { emailUser }
        });

        return new authDTO(auth);
    },

    // Création de compte
    insert: async (data) => {
        const auth = await db.Auth.create(data)
        return new authDTO(auth)
    },
    // rajouter un token si il est trouver 
    addJwt: async (jwt, idUser) => {
        // Vérification de l'existence de l'utilisateur
        const userFound = await db.Auth.findOne({
            where: { idUser }
        });
        // S'il existe, on lui donne un jwt (s'il n'en a pas encore)
        await userFound.update({ jwt })

        return userFound;
    },
    // 
    getJwt: async (idUser) => {
        const jwtExist = await db.Auth.findOne({
            where: { idUser }
        });

        return jwtExist;
    },

    verifyJwt: async (token) => {
        const secret = process.env.JWT_SECRET;

        
        try {
            const decoded = jwt.verify(token, secret);
            return decoded
        } catch (err) {
            console.error('Erreur de vérification du token :', err);
        return null; // Retourner null en cas d'erreur de vérification
        }
    }
};

module.exports = authService;