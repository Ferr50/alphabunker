import dotenv from 'dotenv';
import { Request, Response } from "express";
import { CreateAccount, LoginService } from "../services";
import { verify } from 'jsonwebtoken';

dotenv.config();

export async function getAccounts(req:Request, res:Response){
    if(!req.cookies.token){
        return res.status(200).json({
            status: 403,
            error: "logout"
        });
    }

    const decryptedToken = verify(req.cookies.token , String(process.env.KEYTOKEN) );

    if(typeof decryptedToken == 'string'){
        return res.status(403).json({
            status:403,
            error:"logout"
        });
    };

    const accountManager = new CreateAccount(decryptedToken.data);

    if(accountManager.error){
        return res.status(400).json({
            status:400,
            error:accountManager.error
        });
    };

    const existUser = await accountManager.userExists();
    if(!existUser){
        return res.status(400).json({
            status:400,
            error:'Not exist a user with this cpf.'
        });
    };

    const accounts = await accountManager.getAccountsOfUser();
    res.cookie(
        "token",
        LoginService.createToken(decryptedToken.data),
        {
            expires: new Date(Date.now() + 2*60*1000),
            secure: true,
            httpOnly: true,
            sameSite: 'none'
        }
    );
    return res.status(200).json({accounts:accounts})
};