import { useContext } from "react";
import { TransactionContext } from "../pages/home";
import { OptionType, Transactions } from "../modals";

export function OptionsTransactions({items}:{items:OptionType[]}){

    return (
        <section className="p-4 w-full">
            <ul className="flex items-center justify-center gap-3">
                {items.map(e=><Option title={e.title} type={e.type} icon={e.icon} alt={e.alt} />)}
            </ul>
        </section>
    );
};

function Option(props:OptionType){
    const c = useContext(TransactionContext);

    return (
        <li>
            <button className="w-14 h-13 bg-option-normal p-3 px-3.5 rounded-md flex items-start justify-center" onClick={()=>c!.setTypeTransaction(props.type)}>
                <img className="h-6" src={props.icon} alt={props.alt} />
            </button>
            <h3 className="text-xs text-center mt-2 font-normal">{props.title}</h3>
        </li>
    );
};
