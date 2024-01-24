const authController = require('../_Controllers/auth.controller');
const authRouter = require('express').Router();

authRouter.route('/login')
    .post(authController.login)
    // permet en cas d autre request de renvoyer une erreur 
    .all((res, req) => {
        res.statusCode(405)
    });

authRouter.route('/register')
    .post(authController.register)
    // permet en cas d autre request de renvoyer une erreur 
    .all((res, req) => {
        res.statusCode(405)
    });


module.exports = authRouter;