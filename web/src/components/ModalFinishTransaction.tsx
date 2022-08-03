import { Button } from "./Button";
import { useContext, useRef } from "react";
import { TransactionContext } from "../providers";
import { ApiRequest } from "../libs/axios";

export function ModalFinishTransaction(){
    const c = useContext(TransactionContext);
    const modalRefElement = useRef(null);
    const backgroundElement = useRef(null);

    const animateTransaction = ()=>{
        let o:any = modalRefElement.current!;
        let v:any = backgroundElement.current!;

        v.classList.toggle("opacity-0");
        o.classList.toggle("translate-y-full");
    };

    return(
        <div ref={backgroundElement} className="transition-all opacity-0 duration-500 absolute top-0 h-screen w-screen bg-[#23292CB2]">
            <div className="absolute z-0 h-full w-full" onClick={()=>{
                animateTransaction();
                setTimeout(()=>c!.setFinishModal(""),200)}
            }></div>
            <section ref={modalRefElement} className="z-10 bg-white py-4 px-4 rounded-t-3xl absolute bottom-0 w-full transition-all duration-300 translate-y-full">

                <h2 className="flex items-center font-medium justify-between text-xl text-paragraph-dark mb-7">
                    <span>Confirmar transação</span>
                    <img onClick={
                        ()=>{
                            animateTransaction();
                            setTimeout(()=>c!.setFinishModal(""),200);
                            ApiRequest.clearAllBodies();
                        }
                    }
                    src="../static/img/exit.svg" />
                </h2>

                <p className="w-full text-paragraph-dark text-center flex flex-col items-center justify-center mb-6 font-medium">
                    <span>Esta ação efeturá a transação</span>
                    <span>deseja continuar?</span>
                </p>

                <div className="flex items-center justify-center gap-5">
                    <Button 
                        content="Cancelar" 
                        style="hover:bg-btn-cancel-hover transition-all duration-300 rounded-md text-white text-sm font-medium bg-btn-cancel-base px-10 py-3 pb-2.5"
                        handleEvent={
                            ()=>{
                                animateTransaction();
                                setTimeout(()=>c!.setFinishModal(""),200);
                                ApiRequest.clearAllBodies();
                            }
                        }
                    />
                    <Button 
                        content="Confirmar" 
                        style="hover:bg-btn-primary-hover transition-all duration-300 rounded-md text-white text-sm font-medium bg-btn-primary-base px-10 py-3 pb-2.5"
                        handleEvent={
                            ()=>{
                                ApiRequest.createInstanceAxios().manageResquest();
                            }
                        }
                    />
                </div>

                <i className="hidden">{setTimeout(animateTransaction,200)}</i>

            </section>
        </div>
    );
};