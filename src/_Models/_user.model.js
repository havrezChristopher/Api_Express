const db = require("./_index");
const mssql = require("mssql");
const { Sequelize, DataTypes, ModelStatic } = require("sequelize");

/**
 * Fonction pour créer un model Character (donc table de db)
 * Le JSDoc sert à l'autocomplétion
 * @param {Sequelize} sequelize
 * @returns {ModelStatic<any>}
 */

module.exports = userModel;
