import {v4} from 'uuid';
import {hashSync} from 'bcrypt';
import {ValidationUserFields} from '../utils'
import {NewUser, User} from '../models';

import dotenv from 'dotenv';
dotenv.config();

class ParseUserData extends ValidationUserFields{
    
    constructor(userData:User){
        super(userData);        
    };

    parse():NewUser{
        const fields = this.fields;
        return {
            id: v4(),
            name: this.parsers.name(fields.name),
            password: this.parsers.password(fields.password),
            email: this.parsers.email(fields.email),
            cpf: this.parsers.cpf(fields.cpf),
            birthday: this.parsers.birthday(fields.birthday),
            timestamp: String(Date.now()),
        };
    };

    private parsers = {
        name: (name:string):string=>{
            const words = name.split(' ');
            return words.reduce((sum,e)=> {
                const firstLetter = e.charAt(0).toUpperCase();
                const residue = e.slice(1).toLowerCase();
                return sum + firstLetter+residue+' '
            }, '').trim();
        },
        password: (password:string):string=>hashSync(password, Number(process.env.SALTHASH)),
        email: (email:string):string => email.trim(),
        cpf: (cpf:string):string => cpf.trim(),
        birthday: (birthday:string):string => new Date(birthday).toLocaleDateString().trim(),
    };

};

export {ParseUserData};