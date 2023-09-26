function CurrencyGroup({ currencies }: {currencies: { [key: string] : {name: string; symbol: string;} }}) {
    let names: string[] = [];
    for(const key in currencies) {
        names.push(currencies[key].name);
    }
    console.log(names);
    names.map((name) => { <p>{name}</p> });
    return (
        <>
            <p>Currencies: {names}</p>
        </>
    );
}

export default CurrencyGroup;