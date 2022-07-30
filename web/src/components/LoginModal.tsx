
export function LoginModal(){
    return (
        <section>
            <h2>Login</h2>
            <div><input type="text" placeholder="Digite seu CPF" className="text-black" /></div>
            <div><input type="password" placeholder="Digite sua senha" className="text-black" /></div>
            <div><input type="button" value="Entrar" /></div> {/* OnClick */}
            <button>Crie sua conta</button>
        </section>
    )
};