const express =require ('express')
const articleRouter = require('express').Router()
// Import du controleur lier 

const articleController = require ('../_Controllers/article.controller')

articleRouter.route('')
    .get(articleController.getAllArticle)
    .all((req, res) => {
        res.sendStatus(405); // Pour tout autre verbe HTTP, renvoyer une erreur (Méthode non autorisée)
    });
    articleRouter.route('/:id')
    .get(articleController.getByIdArticle)
    .all((req, res) => {
        res.sendStatus(405); 
    });
    articleRouter.route('')
    .put(articleController.getByIdArticle)
    .all((req, res) => {
        res.sendStatus(405); 
    });
    articleRouter.route('/:id')
    .patch(articleController.updateArticle)
    .all((req, res) => {
        res.sendStatus(405); 
    });
    articleRouter.route('/untrash/:id')
    .post(articleController.untrashArticle)
    .all((req, res) => {
        res.sendStatus(405); 
    });
    articleRouter.route('/trash/:id')
    .delete(articleController.trashArticle)
    .all((req, res) => {
        res.sendStatus(405); 
    });
    articleRouter.route('/:id')
    .get(articleController.delete)
    .all((req, res) => {
        res.sendStatus(405); 
    });



    module.exports = articleRouter