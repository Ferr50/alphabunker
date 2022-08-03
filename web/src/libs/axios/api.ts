import axios from 'axios';
import {AxiosInstance} from 'axios';
import { ResponseLogin, Account } from '../../modals';

// export const api = axios.create({
//     baseURL: "http://localhost:5009",
//     withCredentials: false,
//     headers: { 'Access-Control-Allow-Origin': '*' }
// });

export class ApiRequest{

    private static baseURL:string = 'http://localhost:5009';
    private static credentials:boolean = true;
    private static withCredentials:boolean = true;
    private static headers:any = { 'Acess-Control-Allow-Origin': '*' };
    private static instanceAxios:AxiosInstance|null = null;

    public static setBaseURL(baseURL:string){
        ApiRequest.baseURL = baseURL;
    }

    public static setCredentials(credentials:boolean){
        ApiRequest.credentials = credentials;
    }

    public static setHeaders(headers:any){
        ApiRequest.headers = headers;
    }

    public static createInstanceAxios(){
        const config = {
            'baseURL':ApiRequest.baseURL,
            'credencials':ApiRequest.credentials,
            'withCredentials':ApiRequest.withCredentials,
            'headers':ApiRequest.headers
        };
        ApiRequest.instanceAxios = axios.create(config);

        return ApiRequest;
    }

    private static logoutUser(){
        localStorage.clear();
        sessionStorage.clear();
        window.location.replace('/');
    }

    public static async takeCurrentAccounts(){

        const response = await ApiRequest.instanceAxios!.get('./accounts/all');

        console.log(response.data.error);//Date.now() + 2*60*1000
        console.log(3);

        if(response.data.error == 'logout'){
            return this.logoutUser();
        };
    
        response.data.accounts.forEach((e:Account,i:number)=>sessionStorage.setItem(String(i), JSON.stringify(e)));

    }

    public static async login(cpf:string, password:string){
        const body = {cpf,password};

        const response = await ApiRequest.instanceAxios!.post('./users/login', body);

        localStorage.setItem('name',response.data.name);
        response.data.accounts.forEach((e:Account,i:number)=>sessionStorage.setItem(String(i), JSON.stringify(e)));

        window.location.href = './home';
        return;
    }

    public static async register(name:string, password:string, email:string, cpf:string, birthday:string){
        const body = {name, password, email, cpf, birthday};

        const response = await ApiRequest.instanceAxios!.post('./users/create', body);

        window.location.href = './home';
    }

    public static async deposit(name:string, agency:string, account:string, password:string, value:string ){
        const body = {name, password, agency,account, value, cpf:""};

        const response = await ApiRequest.instanceAxios!.post('./transactions/deposit', body);

        await ApiRequest.takeCurrentAccounts();
        window.location.reload();

        console.log(response);
        return;
    }

    public static async withdraw(name:string, agency:string, account:string, password:string, value:string){
        const body = {name, password, agency, account, value, cpf:""};

        const response = await ApiRequest.instanceAxios!.post('./transactions/withdraw', body);

        await ApiRequest.takeCurrentAccounts();
        window.location.reload();
        return;
    }

    public static async transfer(name:string, agency:string, agencyDestinatary:string, account:string, accountDestinatary:string, password:string, value:string){
        const body = {
            name,
            password,
            agency,
            agency_of_destinatary:agencyDestinatary,
            account,
            account_of_destinatary:accountDestinatary,
            value
        };

        console.log(body);

        const response = await ApiRequest.instanceAxios!.post('./transactions/transfer', body);
        console.log(response);

        await ApiRequest.takeCurrentAccounts();
        window.location.reload();
        return;
    };
}