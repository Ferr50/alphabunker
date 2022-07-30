import { Transactions } from "./Transactions";

export interface ContextTransactionType{
    typeTransaction: Transactions;
    setTypeTransaction: React.Dispatch<React.SetStateAction<Transactions>>;
}