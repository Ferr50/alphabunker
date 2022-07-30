import { useState, createContext } from "react";
import {Transactions, ContextTransactionType} from '../../modals';
import {TransactionModal, OptionsTransactions} from '../../components'

export const TransactionContext = createContext<ContextTransactionType|null>(null);

const optionsItems = [
    {
        title:"Extrato",
        type:Transactions.Statment,
        icon:"../../static/img/statment.svg",
        alt:""
    },
    {
        title:"Transferir",
        type:Transactions.Transfer,
        icon:"../../static/img/transfer.svg",
        alt:""
    },
    {
        title:"Depositar",
        type:Transactions.Deposit,
        icon:"../../static/img/deposit.svg",
        alt:""
    },
    {
        title:"Sacar",
        type:Transactions.Withdraw,
        icon:"../../static/img/withdraw.svg",
        alt:""
    }
];

function AccountSection(){
    return (
        <section>
            <h3>Agência:####-# Conta:#####-#</h3>
            <h1><span></span> 132.759,30 <span>R$</span></h1>
        </section>
    );
};

export function Home(){
    const [typeTransaction, setTypeTransaction] = useState(Transactions.Statment);
    const myContext = {typeTransaction, setTypeTransaction};

    return (
        <>
            <div>
                <h2>Bem-vindo, <span></span></h2>
                <a href=""></a>
            </div>
            <TransactionContext.Provider value={myContext}>
                <OptionsTransactions items={optionsItems}/>
                <AccountSection />
                <TransactionModal transaction={typeTransaction} />
            </TransactionContext.Provider>
        </>
    )
};