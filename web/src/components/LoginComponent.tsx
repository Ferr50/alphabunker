import { useContext, useState } from "react";
import { LoginContext } from "../providers";
import { ApiRequest } from "../libs/axios";
import { RegisterComponent } from '.'

export function LoginComponent(){
    const c = useContext(LoginContext);
    const [cpf, setCpf] = useState('');
    const [password, setPassword] = useState('');

    return (
        <section className="flex flex-col justify-center items-center">
            <h2 className="mt-7 mb-4 text-center text-header-dark dark:text-white">Login</h2>
            <div><input type="text" onChange={(e)=>setCpf(e.target.value)} placeholder="Digite seu CPF" className="text-center mb-3 w-240 p-1 text-btn-text border-2 border-gray-300 placeholder-input-placeholder border-input-b rounded-md dark:text-black" /></div>
            <div><input type="password" onChange={(e)=>setPassword(e.target.value)} placeholder="Digite sua senha" className="text-center mb-5 w-240 p-1 border-2 border-gray-300 placeholder-input-placeholder text-btn-text rounded-md dark:text-black" /></div>
            <div><button onClick={()=>ApiRequest.createInstanceAxios().login(cpf, password)} className="px-24 mb-1 w-240 p-1 text-btn-text rounded-md bg-btn-primary-base hover:bg-btn-primary-hover">Entrar</button></div>
            <div><button className="px-20 w-240 p-0.5 text-center dark:text-input-inactive" onClick={()=>c!.setState(<RegisterComponent/>)}>Crie sua conta</button></div>
        </section>
    )
};