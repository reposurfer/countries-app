import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MainTitle from "../components/atoms/MainTitle/MainTitle";
import FilterGroup from "../components/organisms/FilterGroup/FilterGroup";
import CountriesTemplate from "../components/templates/CountriesTemplate/CountriesTemplate";
import { RootState } from "../redux/store";
import { getAllCountries } from "../services/countries.service";

function CountriesPage() {
    const countries = useSelector((state: RootState) => state.countries.filteredCountries);
    const dispatch = useDispatch();

    useEffect(() => {
        getAllCountries().then((countries) => {
            dispatch({ type: 'countries/setCountries', payload: countries });
            dispatch({ type: 'countries/setFilteredCountries', payload: countries });
        });
    }, []);
    return (
        <>
        <MainTitle title="Global Explorer: Country Encyclopedia" />
        <FilterGroup />
        <CountriesTemplate countries={countries} />
        </>
    )
}

export default CountriesPage;