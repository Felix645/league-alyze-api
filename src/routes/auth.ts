import { Router } from "express";
import { authController } from "../controllers/authController";

const auth: Router = Router();

auth.get('/', authController.index);
auth.post('/login', authController.login);

export default auth;