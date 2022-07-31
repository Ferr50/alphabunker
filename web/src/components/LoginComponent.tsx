import { useContext } from "react";
import { LoginContext } from '../pages/login'
import { RegisterModal } from '.'

export function LoginModal(){
    const c = useContext(LoginContext);
    
    return (
        <section>
            <h2>Login</h2>
            <div><input type="text" placeholder="Digite seu CPF" className="text-black" /></div>
            <div><input type="password" placeholder="Digite sua senha" className="text-black" /></div>
            <div><input type="button" value="Entrar" /></div> {/* OnClick */}
            <button onClick={()=>c!.setState(<RegisterModal/>)}>Crie sua conta</button>
        </section>
    )
};