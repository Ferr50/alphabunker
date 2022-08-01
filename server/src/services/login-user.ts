import {LoginUser} from '../models'
import { searchUserByCpf, getAccounts, connectDB } from '../repository';
import {compareSync} from 'bcrypt';
import {sign} from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export class LoginService {

    public cpf:string;
    private password:string;
    private hashedPassword:string = '';
    private identiferUser:string = '';

    constructor(user:LoginUser){
        this.cpf = user.cpf;
        this.password = user.password;
    };

    public comparePassword = async ()=>compareSync(this.password,this.hashedPassword);

    public async getUserAccounts(){
        const accounts = await connectDB(this.identiferUser, getAccounts);
        return accounts;
    };

    public async searchByCpf(){
        const result = await connectDB(this.cpf, searchUserByCpf);
        this.identiferUser = result.id;

        if(!result.id){
            return '';
        }
        else{
            this.hashedPassword = result.password;
            return result.password;
        }
    };

    public static createToken(cpf:string){
        const token = sign({
            data:cpf
        }, String(process.env.KEYTOKEN));

        return token;
    }
}