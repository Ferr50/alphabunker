export function Deposit(){
    return (
        <form className="-mt-4" action="">
            <section className="w-full">
                <h3 className="dark:text-input-base text-icon-dark mb-1.5">Dados Para Depósito</h3>
                <div className="flex items-center justify-start gap-9 w-full mb-2">
                    <div className="flex flex-col items-start justify-center w-5/12">
                        <input className="placeholder:font-base placeholder:font-medium placeholder:text-paragraph-light-200 text-paragraph-light-200 font-base font-regular p-2 pl-3 rounded-md bg-input-readonly w-full" type="text" name="agency" id="agency-input" placeholder="1510-5" />
                        <label className="text-xs mt-1 text-input-inactive font-regular font-xs" htmlFor="agency-input">Agência</label>
                    </div>
                    <div className="flex flex-col items-start justify-center w-5/12">
                        <input className="placeholder:font-base placeholder:font-medium placeholder:text-paragraph-light-200 text-paragraph-light-200 font-base font-regular p-2 pl-3 rounded-md bg-input-readonly w-full" type="text" name="account" id="account-input" placeholder="95785-3" />
                        <label className="text-xs mt-1 text-input-inactive font-regular font-xs" htmlFor="account-input">Conta</label>
                    </div>
                </div>
            </section>

            <input className="placeholder:text-input-placeholder border border-input-border bg-input-base text-base font-regular px-2 py-1 rounded w-full mt-2" type="text" name="value" id="value-input" placeholder="Valor" />
            <input className="placeholder:text-input-placeholder border border-input-border bg-input-base text-base font-regular px-2 py-1 rounded w-full mt-4" type="text" name="password" id="password-input" placeholder="Senha" />

            <input className="bg-btn-primary-base w-full text-sm font-medium text-white p-3 rounded mt-4" type="submit" value="Depositar" />
        </form>
    );
}