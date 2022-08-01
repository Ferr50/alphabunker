import {Router} from 'express';
import { createUserController, loginUserController } from '../controllers';

const routes = Router();

routes.post('/users/create', createUserController);
routes.post('/users/login', loginUserController);

export default routes;