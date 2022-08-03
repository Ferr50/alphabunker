import { useContext, useState, useRef } from "react";
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
    const cpfVerify = useRef(null);
    const passwordVerify = useRef(null);
    const emailVerify = useRef(null);
    const ageVerify = useRef(null);

    const validateEmail = (email: string) => {
      const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return regex.test(email)
    };

    function calcAge(dateString: string) {
        var birthday = +new Date(dateString);
        return ~~((Date.now() - birthday) / (31557600000));
    }

    const ErrorTransaction = (cpf: string, password: string, email: string, age: string) => {
      let cpfCheck: any = cpfVerify.current!;
      let passCheck: any = passwordVerify.current!;
      let emailCheck: any = emailVerify.current!;
      let ageCheck: any = ageVerify.current!;

      if (cpf.length < 11) {
          cpfCheck.classList.toggle("hidden");
      }
      if (password.length < 6) {
          passCheck.classList.toggle("hidden");
      }
      if (!validateEmail(email)) {
        emailCheck.classList.toggle("hidden");
      }
      if (calcAge(age)<17) {
        ageCheck.classList.toggle("hidden");
      }
  };

    return (
        <section className="flex flex-col justify-center items-center">
            <h2 className="mt-7 mb-4 text-center text-header-dark dark:text-white">Crie sua conta</h2>
            <div><input onChange={(e)=>setName(e.target.value)} type="text" placeholder="Digite seu nome" className="text-center mb-3 w-240 p-1 text-btn-text border-2 border-gray-300 placeholder-input-placeholder border-input-b rounded-md dark:text-black" /></div>
            <p className="hidden text-red-600/100 absolute pb-48 text-sm">Nome maior que 4 caracteres</p>
            <div><input onChange={(e)=>setBirthdate(e.target.value)} type="text" placeholder="Data de nascimento" className="text-center mb-3 w-240 p-1 text-btn-text border-2 border-gray-300 placeholder-input-placeholder border-input-b rounded-md dark:text-black" /></div>
            <p ref={ageVerify} className="hidden text-red-600/100 absolute pb-24 text-sm">Deve ser maior que 16 anos</p>
            <div><input onChange={(e)=>setCpf(e.target.value)} type="text" placeholder="Digite seu CPF" className="text-center mb-3 w-240 p-1 text-btn-text border-2 border-gray-300 placeholder-input-placeholder border-input-b rounded-md dark:text-black" /></div>
            <p ref={cpfVerify} className="hidden text-red-600/100 absolute pb-4 text-sm">CPF Inválido</p>
            <div><input onChange={(e)=>setEmail(e.target.value)} type="text" placeholder="Digite seu email" className="text-center mb-3 w-240 p-1 text-btn-text border-2 border-gray-300 placeholder-input-placeholder border-input-b rounded-md dark:text-black" /></div>
            <p ref={emailVerify} className="hidden text-red-600/100 absolute pt-20 text-sm">Email Inválido</p>
            <div><input onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Digite sua senha" className="text-center mb-3 w-240 p-1 text-btn-text border-2 border-gray-300 placeholder-input-placeholder border-input-b rounded-md dark:text-black" /></div>
            <p ref={passwordVerify} className="hidden text-red-600/100 absolute pt-40 text-sm">Senha deve conter caracteres do tipo Aa1!</p>
            <div><input type="password" placeholder="Confirme sua senha" className="text-center mb-5 w-240 p-1 border-2 border-gray-300 placeholder-input-placeholder text-btn-text rounded-md dark:text-black" /></div>
            <p className="hidden text-red-600/100 absolute pt-64 text-sm">Senhas diferentes</p>
            <div><button onClick={()=>{ApiRequest.createInstanceAxios().register(name,password,email,cpf,birthdate); ErrorTransaction(cpf, password, email, birthdate)}} className="px-20 mb-1 w-240 p-1 text-btn-text rounded-md bg-btn-primary-base hover:bg-btn-primary-hover">Cadastrar</button></div>
            <button className="px-24 w-240 p-0.5 text-center dark:text-input-inactive" onClick={()=>c!.setState(<LoginComponent />)}>Entrar</button>
        </section>
    )
};
