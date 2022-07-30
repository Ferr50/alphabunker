export function Transfer(){
    return(
        <form action="">
            <section>
                <h3>Origem</h3>
                <div>
                    <div>
                        <input type="text" name="from-agency-input" id="from-agency-input" placeholder="1510-5" />
                        <label htmlFor="from-agency-input">Agência</label>
                    </div>
                    <div>
                        <input type="text" name="from-agency-input" id="from-account-input" placeholder="95785-3" />
                        <label htmlFor="from-account-input">Conta</label>
                    </div>
                </div>
            </section>

            <section>
                <h3>Destino</h3>
                <div>
                    <div>
                        <input type="text" name="to-agency-input" id="to-agency-input" placeholder="1510-5"/>
                        <label htmlFor="to-agency-input"></label>
                    </div>
                    <div>
                        <input type="text" name="to-account-input" id="to-account-input" placeholder="95785-3" />
                        <label htmlFor="to-account-input"></label>
                    </div>
                </div>
            </section>

            <input type="text" name="value" id="value-input" placeholder="Valor" />
            <input type="text" name="password" id="password-input" placeholder="Senha" />

            <input type="submit" value="Transferir" />

        </form>
    );
}