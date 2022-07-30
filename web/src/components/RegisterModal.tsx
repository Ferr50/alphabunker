
export function RegisterModal(){
    return (
        <section>
            <h2>Login</h2>
            <div><input type="text" placeholder="Digite seu nome" className="text-black" /></div>
            <div><input type="text" placeholder="Digite sua data de nascimento" className="text-black" /></div>
            <div><input type="text" placeholder="Digite seu CPF" className="text-black" /></div>
            <div><input type="text" placeholder="Digite seu email" className="text-black" /></div>
            <div><input type="password" placeholder="Digite sua senha" className="text-black" /></div>
            <div><input type="password" placeholder="Confirme sua senha" className="text-black" /></div>
            <div><button>Cadastrar</button></div> {/* OnClick */}
            {/* <div><input type="button" value="Cadastrar" /></div> OnClick */}
            <button>Entrar</button>
            {/* <div><input type="button" value="Entrar" /></div> OnClick */}
        </section>
    )
};