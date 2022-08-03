import { Router } from "express";
import {createAccount, getAccounts} from '../controllers';

const routes = Router();

routes.post('/accounts/create', createAccount );

routes.get('/accounts/all', getAccounts);

export default routes;