import { useSelector } from "react-redux";
import { Country } from "../../../types/country.type";
import CountryCard from "../../molecules/CountryCard/CountryCard";
import './CountriesList.css';
import { RootState } from "../../../redux/store";

function CountriesList() {
    const countries = useSelector((state: RootState) => state.countries.displayCountries);
    const isLoading = useSelector((state: RootState) => state.countries.isLoading);
    
    const list = (
        <div className="list">
            {countries.map((country) => (
                <CountryCard country={country} key={country.name.official} />
            ))}
        </div>
    );

    if(isLoading) return (
        <h2>Loading...</h2>
    );

    if(countries.length === 0) return (
        <div className="no-found">No countries found</div>
    );

    return (
        <>
            {list}
        </>
    );
}

export default CountriesList;