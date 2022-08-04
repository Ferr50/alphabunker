import {useState} from "react";
import { TransactionContext } from "../../providers";
import {Transactions} from '../../modals';
import {TransactionModal, Header, AccountSection, StatmentItem} from '../../components'
import { ApiRequest } from "../../libs/axios";

function SingleComponent(props:any){
    
    ApiRequest.createInstanceAxios().statments(props.agency+props.agency_dv,props.account+props.account_dv);

    return <>{Object.entries(JSON.parse(localStorage.getItem('statments')!))
                    .map(e=><StatmentItem day={e[0]} history={e[1]}/>)}</>;
}

export function Home(){
    const info = JSON.parse(sessionStorage.getItem('0')!);

    window.onload = (e)=>{
        ApiRequest.createInstanceAxios().takeCurrentAccounts();
    };

    const [typeTransaction, setTypeTransaction] = useState(Transactions.Statment);
    const [finishModal, setFinishModal] = useState<JSX.Element|string>("");
    const [accountsModal, setAccountsModal] = useState<JSX.Element|string>('');
    const [actualAccount, setActualAccount] = useState<JSX.Element|string>(<AccountSection display="absolute" haveMoreButton={true} account={info.account} account_dv={info.account_dv} agency={info.agency} agency_dv={info.agency_dv} balance={info.balance} />);
    const [widthOfMain, setWidthOfMain] = useState("11/12");
    const [accountInfo, setAccountInfo] = useState({
        "account":info.account,
        "account_dv":info.account_dv,
        "agency":info.agency,
        "agency_dv":info.agency_dv,
    });

    const [listStatments, setListStatments] = useState(
        <SingleComponent agency={accountInfo.agency} agency_dv={accountInfo.agency_dv} account={accountInfo.account} account_dv={accountInfo.account_dv}/>
    );

    const myContext = {
        typeTransaction,
        setTypeTransaction,
        widthOfMain,
        setWidthOfMain,
        finishModal,
        setFinishModal,
        accountsModal,
        setAccountsModal,
        actualAccount,
        setActualAccount,
        accountInfo,
        setAccountInfo,
        listStatments,
        setListStatments
    };

    return (
        <>
            <TransactionContext.Provider value={myContext}>
                <Header />
                <TransactionModal transaction={typeTransaction} />
                {finishModal}
                {accountsModal}
            </TransactionContext.Provider>
        </>
    )
};
