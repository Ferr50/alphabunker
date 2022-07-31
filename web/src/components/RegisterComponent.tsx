import { useContext } from "react";
import { LoginContext } from "../providers";
import { LoginModal } from '.'

export function RegisterModal(){
    const c = useContext(LoginContext);
    
    return (
        <section className="flex flex-col justify-center items-center">
            <h2 className="mt-7 mb-4 text-center text-header-dark dark:text-white">Login</h2>
            <div><input type="text" placeholder="Digite seu nome" className="text-center mb-3 w-240 p-1 text-btn-text border-2 border-gray-300 placeholder-input-placeholder border-input-b rounded-md dark:text-black" /></div>
            <div><input type="text" placeholder="Digite sua data de nascimento" className="text-center mb-3 w-240 p-1 text-btn-text border-2 border-gray-300 placeholder-input-placeholder border-input-b rounded-md dark:text-black" /></div>
            <div><input type="text" placeholder="Digite seu CPF" className="text-center mb-3 w-240 p-1 text-btn-text border-2 border-gray-300 placeholder-input-placeholder border-input-b rounded-md dark:text-black" /></div>
            <div><input type="text" placeholder="Digite seu email" className="text-center mb-3 w-240 p-1 text-btn-text border-2 border-gray-300 placeholder-input-placeholder border-input-b rounded-md dark:text-black" /></div>
            <div><input type="password" placeholder="Digite sua senha" className="text-center mb-3 w-240 p-1 text-btn-text border-2 border-gray-300 placeholder-input-placeholder border-input-b rounded-md dark:text-black" /></div>
            <div><input type="password" placeholder="Confirme sua senha" className="text-center mb-5 w-240 p-1 border-2 border-gray-300 placeholder-input-placeholder text-btn-text rounded-md dark:text-black" /></div>
            <div><button className="px-20 mb-1 w-240 p-1 text-btn-text rounded-md bg-btn-primary-base hover:bg-btn-primary-hover">Cadastrar</button></div>
            <button className="px-24 w-240 p-0.5 text-center dark:text-input-inactive" onClick={()=>c!.setState(<LoginModal />)}>Entrar</button>
        </section>
    )
};