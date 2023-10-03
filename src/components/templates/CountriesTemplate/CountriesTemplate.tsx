import { Country } from "../../../types/country.type";
import MainTitle from "../../atoms/MainTitle/MainTitle";
import Pagination from "../../molecules/Pagination/Pagination";
import CountriesList from "../../organisms/CountryList/CountriesList";
import FilterGroup from "../../organisms/FilterGroup/FilterGroup";

function CountriesTemplate({ title }:{ title: string }) {
    return ( 
        <>
            <MainTitle title={title} />
            <FilterGroup />
            <CountriesList />
            <Pagination />
        </>
    );
}

export default CountriesTemplate;