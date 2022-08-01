import {Account} from '.';

interface ResponseLogin{
    accounts:Account[];
    status:number;
}

export type { ResponseLogin };