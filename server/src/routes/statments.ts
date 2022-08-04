import { Router } from "express";
import { statmentsController } from "../controllers";

const routes = Router();

routes.post('/statments', statmentsController);

export default routes;