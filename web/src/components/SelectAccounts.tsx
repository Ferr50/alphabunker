import { useContext, useRef, useState } from "react";
import { TransactionContext } from "../providers/TransactionContext";
import { AccountSection, StatmentItem } from ".";
import { ApiRequest } from "../libs/axios";


export function SelectAccounts(){
    const c = useContext(TransactionContext);
    const modalRefElement = useRef(null);
    const backgroundElement = useRef(null);

    const animateTransaction = ()=>{
        let o:any = modalRefElement.current!;
        let v:any = backgroundElement.current!;

        v.classList.toggle("opacity-0");
        o.classList.toggle("translate-y-full");
    };

    const generateList = ()=>{
        const arr = [];
        for(let i = 0; i<sessionStorage.length; i++){
            arr.push(JSON.parse( sessionStorage.getItem( String(i))! ));
        };
        return arr.map(e=>
                    <button onClick={
                            async ()=>{
                                    animateTransaction();
                                    setTimeout(()=>c!.setAccountsModal(""),200);
                                    c!.setAccountInfo({
                                        account:e.account,
                                        account_dv:e.account_dv,
                                        agency:e.agency,
                                        agency_dv:e.agency_dv
                                    });
                                    c!.setActualAccount(
                                    <AccountSection haveMoreButton={true} account={e.account} account_dv={e.account_dv} agency={e.agency} agency_dv={e.agency_dv} balance={e.balance} display={"absolute"} />
                                    );
                                    
                                    await ApiRequest.createInstanceAxios().statments(e.agency+e.agency_dv, e.account+e.account_dv);
                            
                                    c!.setListStatments(<>{Object.entries(JSON.parse(localStorage.getItem('statments')!))
                                    .map(e=><StatmentItem day={e[0]} history={e[1]}/>)}</>);
                            }
                        } 
                        className=" w-full [&>*]:hover:bg-input-base [&>*]:w-full mt-3 [&>*]:!translate-x-0">
                            <AccountSection haveMoreButton={false} account={e.account} account_dv={e.account_dv} agency={e.agency} agency_dv={e.agency_dv} balance={e.balance} display={"block"} />
                    </button>
                );
    }

    return(
        <div ref={backgroundElement} className="transition-all duration-500 bg-[#23292CB2] absolute top-0 w-screen h-screen opacity-0">
            <div className="absolute z-0 h-full w-full" onClick={()=>{
                animateTransaction();
                setTimeout(()=>c!.setAccountsModal(""),200)
            }}></div>
            <section ref={modalRefElement} className="z-10 max-h-80 overflow-auto bg-white py-4 px-4 rounded-t-3xl absolute bottom-0 w-full transition-all duration-300 translate-y-full">
                <h2 className="flex items-center justify-between text-xl font-medium text-paragraph-dark ">
                    <span className="flex items-center">
                        Minhas Contas
                        <button onClick={()=>ApiRequest.createInstanceAxios().createAccount()} className="hover:bg-btn-primary-hover ml-2 mt-0.5 p-1.5 rounded-full flex items-center justify-center bg-btn-primary-base">
                            <img className="w-11/12" src="../static/img/add-account.svg" />
                        </button>
                    </span>
                    <button onClick={()=>{
                        animateTransaction();
                        setTimeout(()=>c!.setAccountsModal(""),200);
                    }}>
                        <img src="../static/img/exit.svg" />
                    </button>
                </h2>
                <section className="flex flex-col !items-start !justify-start">{generateList()}</section>
            </section>

            <i className="hidden">{setTimeout(animateTransaction,200)}</i>
        </div>
    );
};