import {Request, Response} from 'express';
import { CreateAccount } from '../services';
import { verify } from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();


async function createAccount(req:Request, res:Response){
    const token = req.cookies.token;
    if(!token){
        return res.status(200).json({
            status: 403,
            error: "logout"
        });
    }

    const decryptedToken = verify(token , String(process.env.KEYTOKEN));

    if(typeof decryptedToken == 'string'){
        return res.status(403).json({
            status:403,
            error:"logout"
        });
    };

    const user = new CreateAccount(decryptedToken.data);

    if(user.error){
        return res.status(400).json({
            status:400,
            error:user.error
        });
    };

    const existUser = await user.userExists();
    if(!existUser){
        return res.status(400).json({
            status:400,
            error:'Not exist a user with this cpf.'
        });
    };
    
    const accountForUser = await user.insertAccount(user.createAccountData());
    if(accountForUser){
        return res.status(201).json({
            status:201,
            id:accountForUser
        });
    }else{
        return res.status(500).json({
            status:500,
            error:'unexpected error occurred'
        })
    }

};

export{createAccount};