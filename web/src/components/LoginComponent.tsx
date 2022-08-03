import { useContext, useState, useRef } from "react";
import { LoginContext } from "../providers";
import { ApiRequest } from "../libs/axios";
import { RegisterComponent } from '.'

export function LoginComponent() {
    const c = useContext(LoginContext);
    const [cpf, setCpf] = useState('');
    const [password, setPassword] = useState('');
    const cpfVerify = useRef(null);
    const passwordVerify = useRef(null);

    const ErrorTransaction = (cpf: string, password: string) => {
        let cpfCheck: any = cpfVerify.current!;
        let passCheck: any = passwordVerify.current!;

        if (cpf.length < 11) {
            cpfCheck.classList.toggle("hidden");
        }
        if (password.length < 6) {
            passCheck.classList.toggle("hidden");
        }
    };

    return (
        <section className="flex flex-col justify-center items-center">
            <h2 className="mt-7 mb-4 text-center text-header-dark dark:text-white">Login</h2>
            <div><input type="text" onChange={(e) => setCpf(e.target.value)} placeholder="Digite seu CPF" className="text-paragraph-dark text-center mb-4 w-240 p-1 border-2 border-gray-300 placeholder-input-placeholder border-input-b rounded-md dark:text-black" /></div>
            <p ref={cpfVerify} className="hidden text-red-600/100 absolute pb-4 text-sm">CPF Inválido</p>
            <div><input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Digite sua senha" className="text-paragraph-dark text-center mb-6 w-240 p-1 border-2 border-gray-300 placeholder-input-placeholder rounded-md dark:text-black" /></div>
            <p ref={passwordVerify} className="hidden text-red-600/100 absolute pt-20 text-sm">Senha Inválida</p>
            <div><button onClick={() => { ApiRequest.createInstanceAxios().login(cpf, password); ErrorTransaction(cpf, password) }} className="px-24 mb-1 w-240 p-1 text-btn-text rounded-md bg-btn-primary-base hover:bg-btn-primary-hover">Entrar</button></div>
            <div><button className="px-20 w-240 p-0.5 text-center dark:text-input-inactive" onClick={() => c!.setState(<RegisterComponent />)}>Crie sua conta</button></div>
        </section>
    )
};
