const evenementController = require('../controllers/movie.controller');

const evenementRouter = require('express').Router();

evenementRouter.route('/')
    .get(evenementController.getAll)
    .post(evenementController.add)
    // Pour tout autre verbe http, la méthode all va renvoyer une erreur et donc interdire l'accès
    .all(((res, req) => {
        res.sendStatus(405);
    }));

evenementRouter.route('/:id')
    .get(evenementController.getById)
    .put(evenementController.update)
    .delete(evenementController.delete)
    // Pour tout autre verbe http, la méthode all va renvoyer une erreur et donc interdire l'accès
    .all(((res, req) => {
        res.sendStatus(405);
    }));

evenementRouter.route('/actor')
    .get(evenementController.getActors)
    // Pour tout autre verbe http, la méthode all va renvoyer une erreur et donc interdire l'accès
    .all(((res, req) => {
        res.sendStatus(405);
    }));

evenementRouter.route('/actor/add')
    .patch(evenementController.addActor)
    // Pour tout autre verbe http, la méthode all va renvoyer une erreur et donc interdire l'accès
    .all(((res, req) => {
        res.sendStatus(405);
    }));

evenementRouter.route('/actor/remove')
    .patch(evenementController.removeActor)
    // Pour tout autre verbe http, la méthode all va renvoyer une erreur et donc interdire l'accès
    .all(((res, req) => {
        res.sendStatus(405);
    }));

module.exports = evenementRouter;