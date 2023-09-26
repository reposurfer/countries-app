import { Country } from "../../../types/country.type";
import CurrencyGroup from "../CurrencyGroup/CurrencyGroup";
import './CountryCard.css';

function CountryCard({country}: {country: Country}){
    return (
        <div className="card">
            <h1>{country.name.official} {country.flag}</h1>
            <p>Capital: {country.capital}</p>
            <p>Region: {country.region}</p>
            <CurrencyGroup currencies={country.currencies} />
            <p>Population: {country.population} people</p>
        </div>
    )
}

export default CountryCard;