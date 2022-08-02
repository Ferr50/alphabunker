import {useState} from "react";
import { TransactionContext } from "../../providers";
import {Transactions} from '../../modals';
import {TransactionModal, Header, AccountSection} from '../../components'

export function Home(){
    const info = JSON.parse(sessionStorage.getItem('0')!);

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
        setAccountInfo
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
