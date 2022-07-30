import { useContext } from "react";
import { TransactionContext } from "../pages/home";
import { OptionType, Transactions } from "../modals";

export function OptionsTransactions({items}:{items:OptionType[]}){

    return (
        <section>
            <ul>
                {items.map(e=><Option title={e.title} type={e.type} icon={e.icon} alt={e.alt} />)}
            </ul>
        </section>
    );
};

function Option(props:OptionType){
    const c = useContext(TransactionContext);

    return (
        <li>
            <button onClick={()=>c!.setTypeTransaction(props.type)}>
                <img src={props.icon} alt={props.alt} />
            </button>
            <h3>{props.title}</h3>
        </li>
    );
};
