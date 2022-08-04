import dotenv from 'dotenv';
import {Response, Request} from 'express';
import {verify} from 'jsonwebtoken';
import {connectDB, statments, searchUserByCpf} from '../repository';
import {LoginService} from '../services';

dotenv.config();

async function statmentsController(req:Request, res:Response){
    // const selectAllItems = await connectDB('', statments);
    // res.json(selectAllItems);
    const token = req.cookies.token;
    const {agency, account} = req.body;

    if(!token){
        return res.status(403).json({
            status:403,
            error:"Logout"
        });
    };

    if(!(agency || account)){
        return res.status(400).json({
            status:400,
            error:"Unknown"
        });
    }

    const decryptedToken = verify(token, String(process.env.KEYTOKEN) );
    if(typeof decryptedToken == 'string'){
        return res.status(403).json({
            status:403,
            error:"Logout"
        });
    }
    
    console.log("cpf:", decryptedToken.data);
    const existsUser = await connectDB(decryptedToken.data, searchUserByCpf);
    console.log("exist user:", existsUser);
    
    if(!existsUser.id){
        return res.status(400).json({
            status:400,
            error:"Not Found Client"
        });
    }

    const credentials = {
        id:existsUser.id,
        agency: agency.slice(0,-1),
        agency_dv: agency.slice(-1),
        account: account.slice(0,-1),
        account_dv: account.slice(-1)
    };

    const statmentsArr = await connectDB(credentials, statments);

    // res.cookie(
    //     'token',
    //     LoginService.createToken(decryptedToken.cpf),
    //     {
    //         expires: new Date(Date.now() + 2*60*1000),
    //         secure: true,
    //         httpOnly: true,
    //         sameSite: 'none'
    //     }
    // );
    
    return res.status(200).json({
        status:200,
        statments:statmentsArr
    });
};

export {statmentsController};