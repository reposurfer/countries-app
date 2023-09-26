import { Country } from "../../../types/country.type";

function CountryCard({country}: {country: Country}){
    return (
        <div>
            <h1>{country.name.official}</h1>
            <p>{country.capital}</p>
            <p>{country.region}</p>
            <p>{country.subregion}</p>
            <p>{country.population}</p>
        </div>
    )
}

export default CountryCard;