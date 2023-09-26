import { Country } from "../../../types/country.type";
import CountryCard from "../../molecules/CountryCard/CountryCard";
import './CountriesList.css';

function CountriesList({ countries }: { countries: Country[] }) {
    const list = (
        <div className="list">
            {countries.map((country) => (
                <CountryCard country={country} key={country.name.official} />
            ))}
        </div>
    );

    return (
        <>
            {list}
        </>
    );
}

export default CountriesList;