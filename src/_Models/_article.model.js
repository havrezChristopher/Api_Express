module.exports = (sequelize, DataTypes) => {
    const Article = sequelize.define('Article', {
        nom: {
            type: DataTypes.STRING(100), // Augmentation de la limite pour les noms
            allowNull: false,
            validate: {
                len: [1, 100] // Assure que le nom n'est ni trop court ni trop long
            }
        },
        description: {
            type: DataTypes.TEXT, // Utilisation de TEXT pour une description plus longue
            allowNull: false,
        },
        image: {
            type: DataTypes.STRING(255), // Permet des URLs d'image plus longues
            allowNull: true, // Les images ne sont pas obligatoires
        },
        prix: {
            type: DataTypes.DECIMAL(10, 2), // Format approprié pour les valeurs monétaires
            allowNull: false,
            validate: {
                isDecimal: true, // Validation pour s'assurer que le champ est bien un décimal
                min: 0.01 // Prix minimum
            }
        },
        quantiter: {
            type: DataTypes.INTEGER, // Type approprié pour les quantités
            allowNull: false,
            validate: {
                isInt: true, // Validation pour s'assurer que le champ est bien un entier
                min: 0 // Quantité minimum
            }
        },
        enStock: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true // Tous les articles sont considérés en stock par défaut
        }
    }, {
        tableName: 'Articles',
        timestamps: true, // Active createdAt et updatedAt automatiquement
        indexes: [
            {
                name: 'idx_article_nom',
                unique: true, // Assure que les noms d'articles sont uniques
                fields: ['nom']
            },
        ]
    });

    return Article;
};
