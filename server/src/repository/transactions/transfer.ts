import { Transfer } from "../../models";
import { Client } from "pg";
import { middleware } from "..";

async function transfer(connectedDB:Client, query:Transfer):Promise<any>{
    let result = '';
    try{

        const queryUpdateAccountSender = {
            id:query.id,
            newValue: (query.value + query.fee)*(-1)
        };
        const queryUpdateAccountDestinatary = {
            agency_of_destinatary:query.agency,
            account_of_destinatary:query.account,
            newValue: (query.value)
        };

        console.log(queryUpdateAccountDestinatary);
        const updateSenderAccount = await middleware(connectedDB, queryUpdateAccountSender, true);
        const updateDestinataryAccount = await middleware(connectedDB, queryUpdateAccountDestinatary, false);

        console.log("aqui2", updateSenderAccount, updateDestinataryAccount);
        if(updateDestinataryAccount && updateSenderAccount){
            const insertTransaction = {
                text:`INSERT INTO transactions
                    (account_id, type, value, fee, timestamp, destinatary_account)
                    VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
                values: [
                    query.id, query.type, query.value, query.fee, query.timestamp, updateDestinataryAccount
                ]
            };
            const t = await connectedDB.query(insertTransaction);
            result = t.rows[0];
        };


    }finally{
        return result;
    };
};

export {transfer};