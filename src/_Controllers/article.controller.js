const userService = require("../_Services/user.services");
const userValidator = require("../_Validators/user.validator");

const articleController = {
  // Récupérer tous les articles
  getAllArticle: async (req, res) => {
    try {
      const articles = await Article.findAll();
      res.status(200).json(articles);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  // Récupérer un article par son ID
  getByIdArticle: async (req, res) => {
    try {
      const { id } = req.params;
      const article = await Article.findByPk(id);
      if (article) {
        res.status(200).json(article);
      } else {
        res.status(404).json({ message: 'Article not found' });
      }
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  // Mettre à jour un article (patch semble plus approprié ici)
  updateArticle: async (req, res) => {
    try {
      const { id } = req.params;
      const [updated] = await Article.update(req.body, { where: { id: id } });
      if (updated) {
        const updatedArticle = await Article.findByPk(id);
        res.status(200).json(updatedArticle);
      } else {
        res.status(404).json({ message: 'Article not found' });
      }
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  // Supprimer (mettre à la poubelle) un article
  trashArticle: async (req, res) => {
    try {
      const { id } = req.params;
      const deleted = await Article.destroy({ where: { id: id } });
      if (deleted) {
        res.status(204).send();
      } else {
        res.status(404).json({ message: 'Article not found' });
      }
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  // Restaurer un article depuis la poubelle
  untrashArticle: async (req, res) => {
 },

  // Supprimer définitivement un article 
  delete: async (req, res) => {
 }
};

module.exports = articleController;
