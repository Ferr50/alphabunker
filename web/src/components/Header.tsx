import { useContext } from "react";
import { AccountSection, OptionsTransactions } from ".";
import { Transactions } from "../modals";
import { TransactionContext } from "../providers";

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


export function Header(){
    const c = useContext(TransactionContext);
    const name = localStorage.getItem('name');

    return (
        <div className="w-full bg-brand-base relative pb-11 rounded-b-3xl">
            <section className="w-11/12 mx-auto my-0 bg-transparent flex flex-col items-start justify-start text-header-light">
                <div className="p-4 px-5 text-xl font-medium bg-brand-base flex items-center justify-between w-full">
                    <h2>Bem-vindo, <span>{name}</span>!</h2>
                    <a href="./profile">
                        <img className="w-6 mt-1" src="../../static/img/no-user.svg" />
                    </a>
                </div>
                
                <OptionsTransactions items={optionsItems}/>

                {c!.actualAccount}

            </section>  
        </div>
    );
}