import { Request, Response } from "express";
import { LoginService } from "../services";

export async function loginUserController(req:Request, res:Response){
    const user = new LoginService(req.body);

    const hashedPassword = await user.searchByCpf();
    if(!hashedPassword){
        res.status(404).json({
            status:404,
            error:"Cpf ou senha incorreta"
        });
    }

    const isAllowed = await user.comparePassword();
    if(isAllowed){
        res.cookie(
            "token",
            LoginService.createToken(user.cpf),
            {
                expires: new Date(Date.now() + 2*60*1000),
                secure: true,
                httpOnly: true,
                sameSite: 'none'
            }
        );
        res.status(200).json({
            status:200,
            accounts:await user.getUserAccounts()
        });
    }else{
        res.status(403).json({
            status:403,
            error:"Cpf ou senha incorreta"
        });
    };
    
};