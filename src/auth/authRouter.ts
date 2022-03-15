import { Router } from "express";
import authController from "./authController";

const authRouter: Router = Router();

authRouter.get('/', authController.index);
authRouter.post('/login', authController.login);

export default authRouter;