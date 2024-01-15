import { Router } from "express";
import { AuthController } from "../_Controllers/auth.controller.js";
//utilisation du export pour réutilisation
export const routes = Router();
//ici route est une option du routing 
routes.route('/')
.get((reg,res) => res.json({message:'helloWorld'}))

    routes.post('/login',AuthController.login)