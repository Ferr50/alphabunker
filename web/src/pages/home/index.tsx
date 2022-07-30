interface Option{
    title:string,
    icon:string,
    alt:string
};

const optionsItems = [
    {
        title:"Extrato",
        icon:"",
        alt:""
    },
    {
        title:"Transferir",
        icon:"",
        alt:""
    },
    {
        title:"Depositar",
        icon:"",
        alt:""
    },
    {
        title:"Sacar",
        icon:"",
        alt:""
    }
];


function Option(props:Option){
    return (
        <li>
            <img src={props.icon} alt={props.alt} />
            <h3>{props.title}</h3>
        </li>
    );
};

function OptionsTransactions({items}:{items:Option[]}){

    return (
        <section>
            <ul>
                {items.map(e=><Option title={e.title} icon={e.icon} alt={e.alt} />)};
            </ul>
        </section>
    );
};

export function Home(){
    return (
        <>
            <h2>Bem-vindo, <span></span></h2>
            <OptionsTransactions items={optionsItems}/>
        </>
    )
};