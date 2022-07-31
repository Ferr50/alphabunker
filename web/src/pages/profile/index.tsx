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

export function Profile(){
  const [widthOfMain, setWidthOfMain] = useState("11/12");
  const myContext = {widthOfMain, setWidthOfMain};

  return (
      <>
              <Header />
      </>
  )
};


export {};
