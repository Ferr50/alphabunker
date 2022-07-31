import { Transactions } from "./Transactions";

export interface ContextTransactionType{
    typeTransaction: Transactions;
    setTypeTransaction: React.Dispatch<React.SetStateAction<Transactions>>;
    widthOfMain: string;
    setWidthOfMain: React.Dispatch<React.SetStateAction<string>>;
}
