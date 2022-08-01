import { Client } from "pg";

export async function getAccounts(connectedDB:Client, id:string) {
    let result:any = '';
    try{    
        const queryDB = {
            text: `SELECT agency, agency_dv, account, account_dv, balance FROM public.accounts WHERE user_id=$1`,
            values:[id]
        };


        const t = await connectedDB.query(queryDB);
        result = t.rows;
    }finally{
        return result;
    };
};