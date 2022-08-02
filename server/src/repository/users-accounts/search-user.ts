import { Client } from 'pg';

export async function searchUser(connectedDB:Client, cpf:string){
    let result = '';

    try{

        const query = {
            text:`SELECT * FROM public.users
                WHERE cpf=$1`,
            values:[cpf]
        };

        const t = await connectedDB.query(query);
        result = t.rows[0];

    }finally{
        return result;
    }
};