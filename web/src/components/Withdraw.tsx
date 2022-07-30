export function Withdraw(){
    return (
        <form action="">
            <h3>Dados Para Saque</h3>
            <div>
                <div>
                    <input type="text" name="agency" id="agency-input" placeholder="1510-5" />
                    <label htmlFor="agency-input">Agência</label>
                </div>
                <div>
                    <input type="text" name="account" id="account-input" placeholder="95785-3" />
                    <label htmlFor="account-input">Conta</label>
                </div>
            </div>

            <input type="text" name="value" id="value-input" />
            <input type="text" name="password" id="password-input" />

            <input type="submit" value="Sacar" />
        </form>
    );
};