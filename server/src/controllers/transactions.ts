import {Request, Response} from 'express';
import {DepositService, WithdrawService, TransferService} from '../services';
import {verify} from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();


async function deposit(req:Request, res:Response){

    const decryptedToken = verify(req.cookies.token , String(process.env.KEYTOKEN) );

    if(typeof decryptedToken == 'string'){
        return res.status(403).json({
            status:403,
            error:"logout"
        });
    };

    const userBody = {...req.body, cpf:decryptedToken.data};
    const transaction = new DepositService(userBody);

    if(transaction.error){
        return res.status(400).json({
            status:400,
            error:transaction.error
        });
    };

    transaction.userId = await transaction.existUser(transaction.userFields.cpf, transaction.userFields.name);
    if(!transaction.userId){
        return res.status(404).json({
            status:404,
            error:'Cliente não existe ou senha incorreta'
        });
    }

    transaction.accountId = await transaction.existAccount(transaction.userId, transaction.accountFields.account, transaction.accountFields.agency);
    if(!transaction.accountId){
        return res.status(404).json({
            status:404,
            error:'Conta não existe'
        });
    };

    const parsedData = transaction.parseDeposit();
    const insertTransaction = await transaction.deposit(parsedData);

    if(insertTransaction.id){
        res.status(200).json({
            status:200,
            body:insertTransaction
        });
    }else{
        res.status(500).json({
            status:500,
            error:'unexpected error occurred.'
        });
    };
};

async function withdraw(req:Request, res:Response){
    const decryptedToken = verify(req.cookies.token , String(process.env.KEYTOKEN) );

    if(typeof decryptedToken == 'string'){
        return res.status(403).json({
            status:403,
            error:"logout"
        });
    };

    const userBody = {...req.body, cpf:decryptedToken.data};


    const transaction = new WithdrawService(userBody);
    if(transaction.error){
        res.status(400).json({
            status:400,
            error:transaction.error
        });
    };

    transaction.userId = await transaction.existUser(transaction.userFields.cpf, transaction.userFields.name);
    if(!transaction.userId){
        return res.status(404).json({
            status:404,
            error:'Cliente não encontrado  ou senha incorreta'
        });
    }

    transaction.accountId= await transaction.existAccount(transaction.userId, transaction.accountFields.account, transaction.accountFields.agency);
    if(!transaction.accountId){
        return res.status(404).json({
            status:404,
            error:'Conta não encontrada'
        });
    };


    const transactionParsed = transaction.parseWithdraw();
    const insertTransaction = await transaction.withdraw(transactionParsed);

    if(insertTransaction.id){
        return res.status(200).json({
            status:200,
            body:insertTransaction
        });
    }else{
        return res.status(500).json({
            status:500,
            body:'unexpected error occurred'
        });
    };
};

async function transfer(req:Request, res:Response){
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

    const userBody = {...req.body, cpf:decryptedToken.data};

    const transaction = new TransferService(userBody);
    if(transaction.error){
        return res.status(400).json({
            status:400,
            error:transaction.error
        });
    };

    transaction.userId = await transaction.existUser(transaction.userFields.cpf, transaction.userFields.name);
    // transaction.destinataryUserId = await transaction.existUser(transaction.userFields.cpf_of_destinatary, transaction.userFields.name_of_destinatary);

    if(!transaction.userId /*|| !transaction.destinataryUserId*/){
        return res.status(404).json({
            status:404,
            error:'Um dos clientes não existe ou senha incorreta'
        });
    };

    transaction.accountId = await transaction.existAccount(transaction.userId, transaction.accountFields.account, transaction.accountFields.agency);
    console.log(transaction.accountId);
    // transaction.destinataryAccountId = await transaction.existAccount(transaction.destinataryUserId, transaction.accountFields.account_of_destinatary, transaction.accountFields.agency_of_destinatary);

    if(!transaction.accountId /*|| !transaction.destinataryAccountId*/){
        return res.status(404).json({
            status:404,
            error:'Uma das contas não existe'
        });
    };

    const parsedData = transaction.transferParse();
    const insertTransaction = await transaction.transfer(parsedData);
    console.log("aqui", insertTransaction);
    if(insertTransaction.id){
        return res.status(200).json({
            status:200,
            body: insertTransaction
        });
    }else{
        return res.status(500).json({
            status:500,
            body:'unexpected error occurred.'
        });
    }
};

export{deposit, withdraw, transfer};