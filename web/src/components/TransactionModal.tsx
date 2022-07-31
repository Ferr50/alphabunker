import { useContext } from "react";
import { TransactionContext } from "../pages/home";
import {Transactions} from "../modals";
import {Transfer, Statments, Deposit, Withdraw} from "./";

export function TransactionModal({transaction}:{transaction:Transactions}){
    const c = useContext(TransactionContext);

    const arr = [
        {title:"Extrato de transações", img:"../static/img/statment-gold.svg", modal:<Statments />},
        {title:"Transferência", img:"../static/img/transfer-gold.svg", modal:<Transfer />},
        {title:"Depósito", img:"../static/img/deposit-gold.svg", modal:<Deposit />},
        {title:"Saque", img:"../static/img/withdraw-gold.svg", modal:<Withdraw />}
    ];

    return (
        <section className="h-2/3 flex flex-col items-center justify-center">
            <div className={`dark:bg-body-dark dark:border-btn-secondary-base dark:border dark:border bg-white p-3 px-4 rounded-lg mt-11 w-${c!.widthOfMain}`}>
                <h2 className="text-icon-gold font-medium flex text-base mb-6">
                    <img className="mr-2" src={arr[transaction].img} />
                    {arr[transaction].title}
                </h2>
                {arr[transaction].modal}
            </div>
        </section>
    )
};