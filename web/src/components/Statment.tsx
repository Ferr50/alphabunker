export function Statments(){
    return (
        <div>
            <StatmentItem />
        </div>
    );
};

function StatmentItem(){
    return (
        <>
            <h3>03/07/2022</h3>
            <div>
                <p>
                    <span>Transferência enviada</span>
                    <span>-$26,49</span>
                </p>
                <p>
                    <span>Saque</span>
                    <span>-$515,00</span>
                </p>
                <p>
                    <span>Depósito</span>
                    <span>+ $1.500,00</span>
                </p>
                <p>
                    <span>Transferência enviada</span>
                    <span>+ $630,00</span>
                </p>
            </div>
        </>
    );
};