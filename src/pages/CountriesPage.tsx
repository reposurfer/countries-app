import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Filter from "../components/atoms/Filter/Filter";
import MainTitle from "../components/atoms/MainTitle/MainTitle";
import CountriesTemplate from "../components/templates/CountriesTemplate/CountriesTemplate";
import { RootState } from "../redux/store";
import { getAllCountries } from "../services/countries.service";

function CountriesPage() {
    const countries = useSelector((state: RootState) => state.countries.value);
    const dispatch = useDispatch();

    useEffect(() => {
        getAllCountries().then((countries) => {
            dispatch({ type: 'countries/setCountries', payload: countries });
        });
    }, []);
    return (
        <>
        <MainTitle />
        <Filter />
        <CountriesTemplate countries={countries} />
        </>
    )
}

export default CountriesPage;