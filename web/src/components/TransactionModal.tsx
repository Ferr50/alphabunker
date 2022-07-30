import {Transactions} from "../modals";
import {Transfer, Statments, Deposit, Withdraw} from "./";

export function TransactionModal({transaction}:{transaction:Transactions}){
    const arr = [
        {title:"Extrato de transações", modal:<Statments />},
        {title:"Transferência", modal:<Transfer />},
        {title:"Depósito", modal:<Deposit />},
        {title:"Saque", modal:<Withdraw />}
    ];

    return (
        <section>
            <h2>{arr[transaction].title}</h2>
            {arr[transaction].modal}
        </section>
    )
};