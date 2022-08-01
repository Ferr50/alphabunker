import { useState, createContext } from "react";
import {LoginContext} from '../../providers';
import { LoginComponent } from '../../components/LoginComponent'
import { RegisterComponent } from '../../components/RegisterComponent'

interface loginData {
    cpf: string
    password: string
}

interface clientData {
    fullName: string
    birthDate: string
    cpf: string
    email: string
    password: string
}

export function Login() {
    const [state, setState] = useState(<LoginComponent />)
    const loginContext = { state, setState }

    return (
        <>
            <section className="w-screen h-screen flex flex-col justify-center items-center">
                <img alt="logo" src="../../static/img/logo.svg" />
                <h1 className="text-brand-base mt-2 mb-2">Alpha Bunker</h1>
                <LoginContext.Provider value={loginContext}>
                    {state}
                </LoginContext.Provider>
            </section>
        </>
    )
};