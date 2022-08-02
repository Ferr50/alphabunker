import { Transactions } from "./Transactions";

export interface ContextTransactionType{
    typeTransaction: Transactions;
    setTypeTransaction: React.Dispatch<React.SetStateAction<Transactions>>;
    widthOfMain: string;
    setWidthOfMain: React.Dispatch<React.SetStateAction<string>>;
    finishModal: string | JSX.Element;
    setFinishModal: React.Dispatch<React.SetStateAction<string | JSX.Element>>;
    accountsModal: string | JSX.Element;
    setAccountsModal: React.Dispatch<React.SetStateAction<string | JSX.Element>>;
    actualAccount: string | JSX.Element;
    setActualAccount:React.Dispatch<React.SetStateAction<string | JSX.Element>>;
    accountInfo: {
        account: any;
        account_dv: any;
        agency: any;
        agency_dv: any;
    };
    setAccountInfo: React.Dispatch<React.SetStateAction<{
        account: any;
        account_dv: any;
        agency: any;
        agency_dv: any;
    }>>;
}
