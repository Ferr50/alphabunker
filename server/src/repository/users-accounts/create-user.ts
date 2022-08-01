 import {Client} from 'pg';
 import {NewUser} from '../../models';

 async function createUser(connectedDB:Client, query:NewUser):Promise<string>{
    let result = '';
    try{

        const queryInsertUser = {
        text:`INSERT INTO users 
            (id, name, password, email, cpf, birthday, timestamp)
            VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING id`,
        values: [
            query.id, query.name, query.password, query.email, query.cpf, query.birthday, query.timestamp
        ]};

        const t = await connectedDB.query(queryInsertUser);
        result = t.rows[0].id;
    }finally{
        return result;
    }
 };

 export {createUser};