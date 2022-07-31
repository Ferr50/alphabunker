export function Statments(){
    return (
        <div className="dark:bg-body-dark bg-body-light-100 p-1 rounded">
            <StatmentItem />
        </div>
    );
};

function StatmentItem(){
    return (
        <>
            <h3 className="text-paragraph-light-200 font-medium">03/07/2022</h3>
            <div className="text-paragraph-light-100 p-2 pt-0">
                <p className="flex items-center justify-between font-medium">
                    <span>Transferência enviada</span>
                    <span className="text-input-error font-bold text-sm">- $26,49</span>
                </p>
                <p className="flex items-center justify-between font-medium">
                    <span>Saque</span>
                    <span className="text-input-error font-bold text-sm">- $515,00</span>
                </p>
                <p className="flex items-center justify-between font-medium">
                    <span>Depósito</span>
                    <span className="text-gain-normal font-bold text-sm">+ $1.500,00</span>
                </p>
                <p className="flex items-center justify-between font-medium">
                    <span>Transferência recebida</span>
                    <span className="text-gain-normal font-bold text-sm">+ $630,00</span>
                </p>
            </div>
            <h3 className="text-paragraph-light-200 font-medium">02/07/2022</h3>
            <div className="text-paragraph-light-100 p-2 pt-0">
                <p className="flex items-center justify-between font-medium">
                    <span>Transferência enviada</span>
                    <span className="text-input-error font-bold text-sm">- $26,49</span>
                </p>
                <p className="flex items-center justify-between font-medium">
                    <span>Depósito</span>
                    <span className="text-gain-normal font-bold text-sm">+ $1.500,00</span>
                </p>
            </div>
        </>
    );
};