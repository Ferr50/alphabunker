import {Transactions} from "../modals";
import {Transfer, Statments, Deposit, Withdraw} from "./";

export function TransactionModal({transaction}:{transaction:Transactions}){
    const arr = [
        {title:"Extrato de transações", img:"../static/img/statment-gold.svg", modal:<Statments />},
        {title:"Transferência", modal:<Transfer />},
        {title:"Depósito", modal:<Deposit />},
        {title:"Saque", modal:<Withdraw />}
    ];

    return (
        <section className="h-2/3 flex flex-col items-center justify-center">
            <div className="bg-white p-3 px-4 rounded-lg w-11/12">
                <h2 className="text-icon-gold flex text-base mb-6">
                    <img className="mr-2" src={arr[transaction].img} />
                    {arr[transaction].title}
                </h2>
                {arr[transaction].modal}
            </div>
        </section>
    )
};