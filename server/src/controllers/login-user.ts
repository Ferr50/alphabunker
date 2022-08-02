import { Request, Response } from "express";
import { LoginService } from "../services";
import { searchUser, connectDB } from "../repository";

export async function loginUserController(req:Request, res:Response){
    const user = new LoginService(req.body);

    const hashedPassword = await user.searchByCpf();
    if(!hashedPassword){
        return res.status(404).json({
            status:404,
            error:"Cpf ou senha incorreta"
        });
    }

    const isAllowed = await user.comparePassword();
    if(isAllowed){
        const userInfo = await connectDB(user.cpf, searchUser);
        // console.log(userInfo)

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
        return res.status(200).json({
            status:200,
            name:userInfo.name,
            accounts:await user.getUserAccounts()
        });
    }else{
        return res.status(403).json({
            status:403,
            error:"Cpf ou senha incorreta"
        });
    };
    
};