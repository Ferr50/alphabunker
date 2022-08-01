import {Client} from 'pg';

async function searchUserByCpf(connectedDB:Client, cpf:string):Promise<string>{
    let result = '';
    try{
        const searchQuery = {
            text:`SELECT id, password FROM users
                WHERE cpf=$1`,
            values:[cpf]
        };
        const t = await connectedDB.query(searchQuery);
        result = t.rows[0]||{};
    }finally{
        return result;
    }
};

export {searchUserByCpf};