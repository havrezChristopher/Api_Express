/***********************************/
/*** Import des module nécessaires */
const jwt = require('jsonwebtoken')

/*************************/
/*** Extraction du token */
const extractBearer = authorization => {

    if(typeof authorization !== 'string'){
        return false
    }

    // On isole le token
    // Regex pour contraler et enpecher la modification du token
    const matches = authorization.match(/(bearer)\s+(\S+)/i)

    return matches && matches[2]

}


/******************************************/
/*** Vérification de la présence du token */
const checkTokenMiddleware = (req, res, next) => {
//1. on verifie que on a attribu authorization dans le header
//2. j essaye d extrare le token
    const token = req.headers.authorization && extractBearer(req.headers.authorization)
    console.log('HEADERS ==>',req.headers);
    console.log('TOKEN ==>',token);
//3. Si il y en a un des 2 qui c'est mal passer j ai un token false = non (authentifier)
    if(!token){
        return res.status(401).json({ message: 'Ho le petit malin !!!'})
    }

    // Vérifier la validité du token

    //Si on arrive ici cest que on a recup un token  
    jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {

        if(err){
            return res.status(401).json({message: 'Bad token'})
        }

        next()
    })
}

module.exports = checkTokenMiddleware