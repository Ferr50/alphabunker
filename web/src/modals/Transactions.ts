export enum Transactions{
    Statment,
    Transfer,
    Deposit,
    Withdraw
};

export type DepositRequest = {
    name:string,
    agency:string,
    account:string,
    password:string,
    value:string
};

export type WithdrawRequest = {
    name:string,
    agency:string,
    account:string,
    password:string,
    value:string
}

export type TransferRequest = {
    name:string,
    agency:string,
    agency_of_destinatary:string,
    account:string,
    account_of_destinatary:string,
    password:string,
    value:string
}