import { useContext, useState, useRef } from "react";
import { LoginContext } from "../providers";
import { ApiRequest } from "../libs/axios";
import { RegisterComponent } from '.'

export function LoginComponent() {
    const c = useContext(LoginContext);
    const [cpf, setCpf] = useState('');
    const [password, setPassword] = useState('');
    const [CPFBool, setCPFBool] = useState('true');
    const [passwordBool, setPasswordBool] = useState('true');
    const cpfVerify = useRef(null);
    const passwordVerify = useRef(null);
    const cpfInput = useRef(null);
    const passInput = useRef(null);

    const validateCPF = (cpf: string) => {
      const regex = /^(([0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2})|([0-9]{11}))$/
      return regex.test(cpf)
    };

    const validatePassword = (password: string) => {
      const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#!%])[0-9a-zA-Z$*&@#!%]{8,}$/
      return regex.test(password)
    };

    const ErrorTransaction = (cpf: string, password: string) => {
        let cpfCheck: any = cpfVerify.current!;
        let passCheck: any = passwordVerify.current!;
        let cpfInputCheck: any = cpfInput.current!;
        let passInputCheck: any = passInput.current!;

        if (!validateCPF(cpf) && CPFBool == 'true') {
          cpfCheck.classList.toggle("hidden");
          cpfInputCheck.classList.toggle("mb-4");
          setCPFBool('false');

        }else if(validateCPF(cpf) && CPFBool == 'false'){
          cpfCheck.classList.toggle("hidden");
          cpfInputCheck.classList.toggle("mb-4");
          setCPFBool('true');;
        }

        if (!validatePassword(password) && passwordBool == 'true') {
          passCheck.classList.toggle("hidden");
          passInputCheck.classList.toggle("mb-6");
          setPasswordBool('false');

        }else if(validatePassword(password) && passwordBool == 'false'){
          passCheck.classList.toggle("hidden");
          passInputCheck.classList.toggle("mb-6");
          setPasswordBool('true');
        }
    };

    return (
        <section className="flex flex-col justify-center items-center">
            <h2 className="mt-7 mb-4 text-center text-header-dark dark:text-white">Login</h2>
            <div><input ref={cpfInput} type="text" onChange={(e) => setCpf(e.target.value)} placeholder="Digite seu CPF" className="text-paragraph-dark text-center mb-4 w-240 p-1 border-2 border-gray-300 placeholder-input-placeholder border-input-b rounded-md dark:text-black" /></div>
            <p ref={cpfVerify} className="hidden text-red-600/100 text-xs">CPF Inválido</p>
            <div><input ref={passInput} type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Digite sua senha" className="text-paragraph-dark text-center mb-6 w-240 p-1 border-2 border-gray-300 placeholder-input-placeholder rounded-md dark:text-black" /></div>
            <p ref={passwordVerify} className="hidden text-red-600/100 text-xs mb-2">Senha Inválida</p>
            <div><button onClick={() => { ApiRequest.createInstanceAxios().login(cpf, password); ErrorTransaction(cpf, password) }} className="px-24 mb-1 w-240 p-1 text-btn-text rounded-md bg-btn-primary-base hover:bg-btn-primary-hover">Entrar</button></div>
            <div><button className="px-20 w-240 p-0.5 text-center dark:text-input-inactive" onClick={() => c!.setState(<RegisterComponent />)}>Crie sua conta</button></div>
        </section>
    )
};
