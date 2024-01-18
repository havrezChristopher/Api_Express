const authController = require('../_Controllers/auth.controller');
const authRouter = require('express').Router();

authRouter.route('/login')
    .post(authController.login)
    .all((res, req) => {
        res.statusCode(405).send('Unavailable')
    });

    authRouter.route('/register')
    .post(authController.register)
    .all((res, req) => {
        res.statusCode(405).send('Unavailable')
    });

module.exports = authRouter;