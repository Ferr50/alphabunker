export function Deposit(){
    return (
        <form action="">
            <div>
                <h3>Dados Para Depósito</h3>
                <div>
                    <input type="text" name="agency" id="agency-input" placeholder="1510-5" />
                    <label htmlFor="agency-input">Agência</label>
                </div>
                <div>
                    <input type="text" name="account" id="account-input" placeholder="95785-3" />
                    <label htmlFor="account-input">Conta</label>
                </div>
            </div>

            <input type="text" name="value" id="value-input" placeholder="Valor" />
            <input type="text" name="password" id="password-input" placeholder="Senha" />

            <input type="submit" value="Depositar" />
        </form>
    );
}