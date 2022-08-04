import { useContext, useState } from "react";
import { TransactionContext } from "../providers";
import { ApiRequest } from "../libs/axios";

export function Statments(){
    const c = useContext(TransactionContext);
    
    // const getAccount = ()=>`${c!.accountInfo.account}${c!.accountInfo.account_dv}`;
    // const getAgency = ()=>`${c!.accountInfo.agency}${c!.accountInfo.agency_dv}`;
    
    // ApiRequest.createInstanceAxios().statments(getAgency(), getAccount());
    // console.log(localStorage.getItem('statments'));
    
    // const [listStatments, setListStatments] = useState(
    //     Object.entries(JSON.parse(localStorage.getItem('statments')!))
    //                 .map(e=><StatmentItem day={e[0]} history={e[1]}/>)
    // );
    return (
        <div className="dark:bg-body-dark bg-body-light-100 p-1 rounded overflow-auto max-h-80">
            {
                c!.listStatments
            }
        </div>
    );
};

function HistoryItem(props:{type:any, value:any}){
    const sinal = (props.type == 'withdraw')? '-':'+';
    const color = (sinal === '-')? 'text-input-error': 'text-gain-normal';

    let typeTranslate = 'desconhecido';
    switch(props.type){
        case 'deposit':
            typeTranslate = 'Depósito';
            break;
        case 'withdraw':
            typeTranslate = 'Saque';
            break;
        case 'transfer':
            typeTranslate = 'Transferência';
            break;
    };

    return(
        <p className="flex items-center justify-between font-medium">
            <span>{typeTranslate}</span>
            <span className={`${color} font-bold text-sm`}>{sinal} ${Number(props.value).toFixed(2)}</span>
        </p>
    );
}

export function StatmentItem(props:{day:string; history:any}){
    return (
        <>
            <h3 className="text-paragraph-light-200 font-medium">{props.day}</h3>
            <div className="text-paragraph-light-100 p-2 pt-0 overflow-auto">
                {
                    props.history.map(
                        (e: { type: any; value: any; })=><HistoryItem type={e.type} value={e.value}/>)
                }
            </div>
        </>
    );
};