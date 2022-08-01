import { useState, createContext } from "react";

function Header(){

  return (
      <div className="w-full bg-brand-base relative pb-11 rounded-b-3xl">
        <section className="w-11/12 mx-auto my-0 bg-transparent flex flex-col items-start justify-start text-header-light">
          <img className="w-6 mt-4" src="../../static/img/back.svg" />
          <div className="p-4 px-5 text-xl font-medium bg-brand-base flex flex-col items-center justify-between w-full">
            <img className="w-32 mb-4" src="../../static/img/noAvatar.svg" />
            <h2 className= "text-3xl" >Oscar Ramos</h2>
          </div>
        </section>
      </div>
  );
}

function MyData(){
  return (
    <section className="h-1/4 mt-16 mx-8 rounded-xl flex flex-col  bg-white">
      <div className="flex m-4">
        <img className="w-8 mb-4" src="../../static/img/myData.svg" />
        <span className= "text-2xl text-icon-gold ml-4" >Meus dados</span>
      </div>
      <div className="h-2/4 mx-4 rounded-2xl bg-body-light-100 flex flex-col justify-around text-paragraph-light-200">
        <span className= "text-l ml-4" >Nome: Oscar Ramos</span>
        <span className= "text-l ml-4" >Data de Nascimento: 01/01/2001</span>
        <span className= "text-l ml-4" >CPF: 123.456.789-01</span>
      </div>
    </section>
)
};

function MyAccount(){
  return (
    <section className="h-1/4 mt-8 mx-8 rounded-xl flex flex-col  bg-white">
      <div className="flex m-4">
        <img className="w-8 mb-4" src="../../static/img/myAccount.svg" />
        <span className= "text-2xl text-icon-gold ml-4" >Minhas contas correntes</span>
      </div>
      <div className="h-2/4 mx-4 mb-4 rounded-2xl bg-body-light-100 flex flex-col justify-around text-paragraph-light-200">
        <span className= "text-l ml-4" >Agencia: 1234-5</span>
        <span className= "text-l ml-4" >Conta: 12345-6</span>
      </div>
      <div className="h-2/4 mx-4 mb-4 rounded-2xl bg-body-light-100 flex flex-col justify-around text-paragraph-light-200">
        <span className= "text-l ml-4" >Agencia: 1234-5</span>
        <span className= "text-l ml-4" >Conta: 12345-6</span>
      </div>
    </section>
)
};

export function Profile(){
  return (
      <>
              <Header />
              <MyData />
              <MyAccount />
      </>
  )
};


export {};
