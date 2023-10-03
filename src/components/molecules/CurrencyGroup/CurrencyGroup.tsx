function CurrencyGroup({ currencies }: {currencies: { [key: string] : {name: string; symbol: string;} }}) {
    let names: string[] = [];
    for(const key in currencies) {
        names.push(currencies[key].name);
    }
    names.map((name) => {return <p>{name}</p> });

    if(names.length === 1) return (
        <>
            <p>Currency: {names}</p>
        </>
    );

    return (
        <>
            <p>Currencies: {names}</p>
        </>
    );
}

export default CurrencyGroup;