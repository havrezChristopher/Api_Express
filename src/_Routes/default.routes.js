import { Router } from "express";
import { AuthController } from "../_Controllers/auth.controller.js";
// destructuring du router d express
export const routes = Router();
// ici route est une option du routing

routes.route("/a").get((req, res) => {
  console.log("Route /a appelée");
  try {
    console.log("yesss");
    res.status(200).send("hello");
  } catch (error) {
    console.error(error);
    res.status(500).send("Erreur dans le traitement de la requête");
  }
});

export default {routes}