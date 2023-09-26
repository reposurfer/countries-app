import { Country } from "../../../types/country.type";
import './CountryCard.css';

function CountryCard({country}: {country: Country}){
    return (
        <div className="card">
            <h1>{country.name.official}</h1>
            <p>{country.capital}</p>
            <p>{country.region}</p>
            <p>{country.subregion}</p>
            <p>{country.population}</p>
        </div>
    )
}

export default CountryCard;