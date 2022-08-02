import { useContext } from "react";
import { TransactionContext } from "../providers";
import { ModalFinishTransaction } from ".";

export function Withdraw(){
    const c = useContext(TransactionContext);

    const getAccount = ()=>`${c!.accountInfo.account}-${c!.accountInfo.account_dv}`;
    const getAgency = ()=>`${c!.accountInfo.agency}-${c!.accountInfo.agency_dv}`;

    return (
        <form className="-mt-4" action="">
            <section className="w-full">
                <h3 className="dark:text-input-base text-icon-dark mb-1.5">Dados Para Saque</h3>
                <div className="flex items-center justify-start gap-9 w-full mb-2">
                    <div className="flex flex-col items-start justify-center w-5/12">
                        <input className="placeholder:font-base placeholder:font-medium placeholder:text-input-inactive text-input-inactive font-base font-regular p-2 pl-3 rounded-md bg-input-readonly w-full" type="text" name="agency" id="agency-input" placeholder={getAgency()} disabled/>
                        <label className="text-xs mt-1 text-input-inactive font-regular font-xs" htmlFor="agency-input">Agência</label>
                    </div>
                    <div className="flex flex-col items-start justify-center w-5/12">
                        <input className="placeholder:font-base placeholder:font-medium placeholder:text-input-inactive text-input-inactive font-base font-regular p-2 pl-3 rounded-md bg-input-readonly w-full" type="text" name="account" id="account-input" placeholder={getAccount()} disabled/>
                        <label className="text-xs mt-1 text-input-inactive font-regular font-xs" htmlFor="account-input">Conta</label>
                    </div>
                </div>
            </section>

            <input className="placeholder:text-input-placeholder text-input-text border border-input-border bg-input-base text-base font-regular px-2 py-1 rounded w-full mt-2" type="number" name="value" id="value-input" placeholder="Valor"/>
            <input className="placeholder:text-input-placeholder text-input-text border border-input-border bg-input-base text-base font-regular px-2 py-1 rounded w-full mt-4" type="password" name="password" id="password-input" placeholder="Senha"/>

            <input onClick={(e)=>{e.preventDefault();c!.setFinishModal(<ModalFinishTransaction />)}} className="hover:bg-btn-primary-hover transition-all duration-200 bg-btn-primary-base w-full text-sm font-medium text-white p-3 rounded mt-4" type="submit" value="Sacar" />
        </form>
    );
};