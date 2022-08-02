import { useContext } from "react";
import { TransactionContext } from "../providers";
import { SelectAccounts } from "./SelectAccounts";
import { AccountSectionModel } from "../modals";

export function AccountSection(props:AccountSectionModel){
    const getAccount = ()=>`${props.account}-${props.account_dv}`;
    const getAgency = ()=>`${props.agency}-${props.agency_dv}`;
    const getBalance = ()=>`${Number(props.balance).toFixed(2)}`;

    return (
        <section className={`bg-white mx-auto my-0 px-4 py-3 pt-1.5 rounded-lg w-10/12 ${props.display} -bottom-8 left-1/2 -translate-x-1/2 shadow-md flex flex-col items-start justify-between`}>
            <h3 className="font-medium text-base text-header-gold"><span>Agência:{getAgency()}</span> <span className="ml-0">Conta:{getAccount()}</span></h3>
            <h1 className="text-brand-base font-bold text-2xl flex tracking-wider">
                <img className="mr-1" src="../../static/img/eye.svg"/>
                 {getBalance()} <span className="text-brand-hover text-base self-end ml-1.5">R$</span>
            </h1>

            <MoreButton set={props.haveMoreButton}/>
        </section>
    );
};

function MoreButton(props:{set:boolean}){
    const c = useContext(TransactionContext);
    if(props.set){
        return (
            <button 
                onClick={()=>c!.setAccountsModal(<SelectAccounts />)}
                className="absolute top-3 right-2.5">
                    <img src="../../static/img/accounts-more.svg" />
            </button>
        );
    }else{
        return <></>;
    };
};