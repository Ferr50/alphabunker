import { useContext, useState } from "react";
import { TransactionContext } from "../providers";
import { ModalFinishTransaction } from ".";
import { ApiRequest } from "../libs/axios";

export function Transfer(){
    const c = useContext(TransactionContext);
    const [agencyDestinatary, setAgencyDestinatary] = useState('');
    const [accountDestinatary, setAccountDestinatary] = useState('');
    const [value, setValue] = useState('');
    const [password, setPassword] = useState('');

    const getAccount = ()=>`${c!.accountInfo.account}-${c!.accountInfo.account_dv}`;
    const getAgency = ()=>`${c!.accountInfo.agency}-${c!.accountInfo.agency_dv}`;

    return(
        <form className="-mt-4" action="">
            <section className="w-full">
                <h3 className="dark:text-input-base text-icon-dark mb-1.5">Origem</h3>
                <div className="flex items-center justify-start gap-9 w-full mb-2">
                    <div className="flex flex-col items-start justify-center w-5/12">
                        <input className="placeholder:font-base placeholder:font-medium placeholder:text-input-inactive text-input-inactive font-base font-regular p-2 pl-3 rounded-md bg-input-readonly w-full" type="text" name="from-agency-input" id="from-agency-input" placeholder={getAgency()} disabled/>
                        <label className="text-xs mt-1 text-input-inactive font-regular font-xs" htmlFor="from-agency-input">Agência</label>
                    </div>
                    <div className="flex flex-col items-start justify-center w-5/12">
                        <input className="placeholder:font-base placeholder:font-medium placeholder:text-input-inactive text-input-inactive font-base font-regular p-2 pl-3 rounded-md bg-input-readonly w-full" type="text" name="from-agency-input" id="from-account-input" placeholder={getAccount()} disabled/>
                        <label className="text-xs mt-1 text-input-inactive font-regular font-xs" htmlFor="from-account-input">Conta</label>
                    </div>
                </div>
            </section>

            <section className="w-full">
                <h3 className="dark:text-input-base text-icon-dark mb-1.5">Destino</h3>
                <div className="flex items-center justify-start gap-9 w-full mb-2">
                    <div className="flex flex-col items-start justify-center w-5/12">
                        <input onChange={(e)=>setAgencyDestinatary(e.target.value)} className="placeholder:font-base placeholder:font-medium placeholder:text-input-placeholder text-input-text font-base font-regular p-2 pl-3 rounded-md bg-input-base border border-input-border w-full" type="number" name="to-agency-input" id="to-agency-input" placeholder="1510-5"/>
                        <label className="text-xs mt-1 text-input-inactive font-regular font-xs" htmlFor="to-agency-input">Agência</label>
                    </div>
                    <div className="flex flex-col items-start justify-center w-5/12">
                        <input onChange={(e)=>setAccountDestinatary(e.target.value)} className="placeholder:font-base placeholder:font-medium placeholder:text-input-placeholder text-input-text font-base font-regular p-2 pl-3 rounded-md bg-input-base border border-input-border w-full" type="number" name="to-account-input" id="to-account-input" placeholder="95785-3" />
                        <label className="text-xs mt-1 text-input-inactive font-regular font-xs" htmlFor="to-account-input">Conta</label>
                    </div>
                </div>
            </section>

            <input onChange={(e)=>setValue(e.target.value)} className="placeholder:text-input-placeholder text-input-text border border-input-border bg-input-base text-base font-regular px-2 py-1 rounded w-full mt-2" type="number" name="value" id="value-input" placeholder="Valor" />
            <input onChange={(e)=>setPassword(e.target.value)} className="placeholder:text-input-placeholder text-input-text border border-input-border bg-input-base text-base font-regular px-2 py-1 rounded w-full mt-4" type="password" name="password" id="password-input" placeholder="Senha" />

            <input onClick={
                (e)=>{
                    e.preventDefault();
                    c!.setFinishModal(<ModalFinishTransaction />);
                    const name = localStorage.getItem('name')!;
                    const agency = c!.accountInfo.agency + c!.accountInfo.agency_dv;
                    const account = c!.accountInfo.account + c!.accountInfo.account_dv;
                    ApiRequest.createInstanceAxios().transfer(name, agency, agencyDestinatary, account, accountDestinatary, password, value);
                }
            } className="hover:bg-btn-primary-hover transition-all duration-200 bg-btn-primary-base w-full text-sm font-medium text-white p-3 rounded mt-4" type="submit" value="Transferir" />

        </form>
    );
}