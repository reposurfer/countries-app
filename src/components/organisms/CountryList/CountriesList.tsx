import { useSelector } from "react-redux";
import { Country } from "../../../types/country.type";
import CountryCard from "../../molecules/CountryCard/CountryCard";
import './CountriesList.css';
import { RootState } from "../../../redux/store";
import SkeletonCard from "../../molecules/SkeletonCard/SkeletonCard";

function CountriesList() {
    const countries = useSelector((state: RootState) => state.countries.displayCountries);
    const isLoading = useSelector((state: RootState) => state.countries.isLoading);
    const countriesPerPage = useSelector((state: RootState) => state.pagination.countriesPerPage);

    const list = (
        <div className="list">
            {countries.map((country) => (
                <CountryCard country={country} key={country.name.official} />
            ))}
        </div>
    );

    const skeletonList = (
        <div className="list">
            {[...Array(countriesPerPage)].map((_, index) => (
                <SkeletonCard key={index} />
            ))}
        </div>
    );

    if (isLoading) return (
        <>
            {skeletonList}
        </>
    );

    if (countries.length === 0) return (
        <div className="no-found">No countries found</div>
    );

    return (
        <>
            {list}
        </>
    );
}

export default CountriesList;