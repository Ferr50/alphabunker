import { useState, createContext } from "react";
import {Transactions, ContextTransactionType} from '../../modals';
import {TransactionModal, OptionsTransactions} from '../../components'

export const TransactionContext = createContext<ContextTransactionType|null>(null);

const optionsItems = [
    {
        title:"Extrato",
        type:Transactions.Statment,
        icon:"../../static/img/statment.svg",
        alt:"",
        width:"11/12"
    },
    {
        title:"Transferir",
        type:Transactions.Transfer,
        icon:"../../static/img/transfer.svg",
        alt:"",
        width:"10/12"
    },
    {
        title:"Depositar",
        type:Transactions.Deposit,
        icon:"../../static/img/deposit.svg",
        alt:"",
        width:"10/12"
    },
    {
        title:"Sacar",
        type:Transactions.Withdraw,
        icon:"../../static/img/withdraw.svg",
        alt:"",
        width:"10/12"
    }
];

function AccountSection(){
    return (
        <section className="bg-white mx-auto my-0 px-4 py-3 pt-1.5 rounded-lg w-10/12 absolute -bottom-8 left-1/2 -translate-x-1/2 shadow-md flex flex-col items-start justify-between">
            <h3 className="font-medium text-base text-header-gold"><span>Agência: 1510-5 </span> <span className="ml-2">Conta: 95785-3</span></h3>
            <h1 className="text-brand-base font-bold text-2xl flex tracking-wider">
                <img className="mr-1" src="../../static/img/eye.svg"/>
                 132.759,30 <span className="text-brand-hover text-base self-end ml-1.5">R$</span>
            </h1>
        </section>
    );
};

function Header(){

    return (
        <div className="w-full bg-brand-base relative pb-11 rounded-b-3xl">
            <section className="w-11/12 mx-auto my-0 bg-transparent flex flex-col items-start justify-start text-header-light">
            <div className="p-4 px-5 text-xl font-medium bg-brand-base flex items-center justify-between w-full">
                <h2>Bem-vindo, <span>Oscar</span>!</h2>
                <a href="./profile">
                    <img className="w-6 mt-1" src="../../static/img/no-user.svg" />
                </a>
            </div>
            <OptionsTransactions items={optionsItems}/>
            <AccountSection />
            </section>
        </div>
    );
}

export function Home(){
    const [typeTransaction, setTypeTransaction] = useState(Transactions.Statment);
    const [widthOfMain, setWidthOfMain] = useState("11/12");
    const myContext = {typeTransaction, setTypeTransaction, widthOfMain, setWidthOfMain};

    return (
        <>
            <TransactionContext.Provider value={myContext}>
                <Header />
                <TransactionModal transaction={typeTransaction} />
            </TransactionContext.Provider>
        </>
    )
};
