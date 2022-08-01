import { Client } from "pg";
interface StatmentsCredentials {
    id:string,
    agency:string,
    agency_dv:string,
    account:string,
    account_dv:string,
};

async function statments(connectedDB:Client, credentials:StatmentsCredentials):Promise<any>{
    let result:any = '';
    try{
        console.log('dbpart');
        const queryDB = {
            text:`
                SELECT id FROM public.accounts
                    WHERE user_id=$1 AND agency=$2 AND agency_dv=$3 AND account=$4 AND account_dv=$5
                `,
            values:[
                credentials.id,
                credentials.agency,
                credentials.agency_dv,
                credentials.account,
                credentials.account_dv
            ]
        };
        console.log("OOP",queryDB);
        const t = await connectedDB.query(queryDB);
        const account = t.rows[0].id;

        const transactionsQuery = {
            text: `
                SELECT * FROM public.transactions
                    WHERE account_id=$1
            `,
            values:[account]
        };

        const t2 = await connectedDB.query(transactionsQuery);
        result = t2.rows;
        console.log(result);
        
    }finally{
        return result;
    };
};

export {statments};