import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CountriesTemplate from "../components/templates/CountriesTemplate/CountriesTemplate";
import { setAllCountries, setDisplayCountries, setIsLoading } from "../redux/slices/countries/countries.slice";
import { RootState } from "../redux/store";
import { getAllCountries } from "../services/countries.service";

function CountriesPage() {
    const countriesPerPage = useSelector((state: RootState) => state.pagination.countriesPerPage);
    const selectedPage = useSelector((state: RootState) => state.pagination.selectedPage);
    const dispatch = useDispatch();

    const title = "Global Explorer: Country Encyclopedia";

    useEffect(() => {
        dispatch(setIsLoading(true));
        getAllCountries().then((countries) => {
            dispatch(setAllCountries(countries));
            const indexOfLastCountry = selectedPage * countriesPerPage;
            const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
            const slicedCountries = countries.slice(indexOfFirstCountry, indexOfLastCountry);
            dispatch(setDisplayCountries(slicedCountries));
            dispatch(setIsLoading(false));
        });
    }, []);

    return (
        <CountriesTemplate title={title} />
    )
}

export default CountriesPage;