import { Client } from "pg";

async function middleware(connectedDB:Client, query:any, flag:boolean):Promise<any> {
    let result = '';
    try{
        let queryForSelectAccount;
        if(flag){
            queryForSelectAccount = {
                text:`SELECT balance FROM accounts
                    WHERE id=$1`,
                values:[query.id]
            };
        }else{
            const agency = query.agency_of_destinatary.slice(0,-1);
            const agency_dv = query.agency_of_destinatary.slice(-1);
            const account = query.account_of_destinatary.slice(0,-1);
            const account_dv = query.account_of_destinatary.slice(-1);
            queryForSelectAccount = {
                text:`SELECT balance FROM accounts
                    WHERE agency=$1 AND agency_dv=$2 AND account=$3 AND account_dv=$4`,
                values:[agency, agency_dv, account, account_dv]
            };
        }

        const selectAccount = await connectedDB.query(queryForSelectAccount);
        const actualBalance = selectAccount.rows[0].balance;
        
        const newBalance = Number(query.newValue) + Number(actualBalance);

        let queryForUpdateAccount;
        if(flag){
            queryForUpdateAccount = {
                text:`UPDATE accounts SET balance=$1 WHERE id=$2 RETURNING id`,
                values:[newBalance, query.id]
            };
        }else{
            const agency = query.agency_of_destinatary.slice(0,-1);
            const agency_dv = query.agency_of_destinatary.slice(-1);
            const account = query.account_of_destinatary.slice(0,-1);
            const account_dv = query.account_of_destinatary.slice(-1);
            queryForUpdateAccount = {
                text:`UPDATE accounts SET balance=$1 WHERE agency=$2 AND agency_dv=$3 AND account=$4 AND account_dv=$5 RETURNING id`,
                values:[newBalance, agency, agency_dv, account, account_dv]
            };
        }

        const updateAccount = await connectedDB.query(queryForUpdateAccount);
        result = updateAccount.rows[0].id

    }finally{
        return result;
    };
};

export{middleware};