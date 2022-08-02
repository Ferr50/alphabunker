import { useContext, useRef, useState } from "react";
import { TransactionContext } from "../providers/TransactionContext";
import { AccountSection } from ".";


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
                            ()=>{
                                    animateTransaction();
                                    setTimeout(()=>c!.setAccountsModal(""),200)
                                    c!.setAccountInfo({
                                        account:e.account,
                                        account_dv:e.account_dv,
                                        agency:e.agency,
                                        agency_dv:e.agency_dv
                                    });
                                    c!.setActualAccount(
                                    <AccountSection haveMoreButton={true} account={e.account} account_dv={e.account_dv} agency={e.agency} agency_dv={e.agency_dv} balance={e.balance} display={"absolute"} />
                                )
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
            <section ref={modalRefElement} className="z-10 bg-white py-4 px-4 rounded-t-3xl absolute bottom-0 w-full transition-all duration-300 translate-y-full">
                <h2 className="flex items-center justify-between text-xl font-medium text-paragraph-dark ">
                    Minhas Contas
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