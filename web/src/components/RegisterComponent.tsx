import { useContext, useState } from "react";
import { ApiRequest } from "../libs/axios";
import { LoginContext } from "../providers";
import { LoginComponent } from '.'

export function RegisterComponent(){
    const c = useContext(LoginContext);
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [cpf, setCpf] = useState('');
    const [birthdate, setBirthdate] = useState('');

    return (
        <section className="flex flex-col justify-center items-center">
            <h2 className="mt-7 mb-4 text-center text-header-dark dark:text-white">Crie sua conta</h2>
            <div><input onChange={(e)=>setName(e.target.value)} type="text" placeholder="Digite seu nome" className="text-center mb-3 w-240 p-1 text-btn-text border-2 border-gray-300 placeholder-input-placeholder border-input-b rounded-md dark:text-black" /></div>
            <p className="hidden text-red-600/100 absolute pb-48 text-sm">Nome maior que 4 caracteres</p>
            <div><input onChange={(e)=>setBirthdate(e.target.value)} type="text" placeholder="Data de nascimento" className="text-center mb-3 w-240 p-1 text-btn-text border-2 border-gray-300 placeholder-input-placeholder border-input-b rounded-md dark:text-black" /></div>
            <p className="hidden text-red-600/100 absolute pb-24 text-sm">Deve ser maior que 16 anos</p>
            <div><input onChange={(e)=>setCpf(e.target.value)} type="text" placeholder="Digite seu CPF" className="text-center mb-3 w-240 p-1 text-btn-text border-2 border-gray-300 placeholder-input-placeholder border-input-b rounded-md dark:text-black" /></div>
            <p className="hidden text-red-600/100 absolute pb-4 text-sm">CPF Inválido</p>
            <div><input onChange={(e)=>setEmail(e.target.value)} type="text" placeholder="Digite seu email" className="text-center mb-3 w-240 p-1 text-btn-text border-2 border-gray-300 placeholder-input-placeholder border-input-b rounded-md dark:text-black" /></div>
            <p className="hidden text-red-600/100 absolute pt-20 text-sm">Email Inválido</p>
            <div><input onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Digite sua senha" className="text-center mb-3 w-240 p-1 text-btn-text border-2 border-gray-300 placeholder-input-placeholder border-input-b rounded-md dark:text-black" /></div>
            <p className="hidden text-red-600/100 absolute pt-40 text-sm">Senha deve conter caracteres do tipo Aa1!</p>
            <div><input type="password" placeholder="Confirme sua senha" className="text-center mb-5 w-240 p-1 border-2 border-gray-300 placeholder-input-placeholder text-btn-text rounded-md dark:text-black" /></div>
            <p className="hidden text-red-600/100 absolute pt-64 text-sm">Senhas diferentes</p>
            <div><button onClick={()=>{ApiRequest.createInstanceAxios().register(name,password,email,cpf,birthdate);c!.setState(<LoginComponent />)}} className="px-20 mb-1 w-240 p-1 text-btn-text rounded-md bg-btn-primary-base hover:bg-btn-primary-hover">Cadastrar</button></div>
            <button className="px-24 w-240 p-0.5 text-center dark:text-input-inactive" onClick={()=>c!.setState(<LoginComponent />)}>Entrar</button>
        </section>
    )
};
