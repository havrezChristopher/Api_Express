const authDTO  = require('../_Dto/auth.dto');
const db = require('../_Models/_index_Config_Db');
const jwt = require('jsonwebtoken');
const authService = {

    exist: async (emailUser) => {
        const auth = await db.Auth.findOne({
            where: { emailUser }
        });

        return new authDTO(auth);
    },

    insert: async (data) => {
        const auth = await db.Auth.create(data)
        return new authDTO(auth)
    },

    addJwt: async (jwt, idUser) => {
        // Vérification de l'existence de l'utilisateur
        const userFound = await db.Auth.findOne({
            where: { idUser }
        });
        // S'il existe, on lui donne un jwt (s'il n'en a pas encore)
        await userFound.update({ jwt })

        return userFound;
    },

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
            return true
        } catch (err) {
            return false
        }
    }
};

module.exports = authService;