import { Country } from "../../../types/country.type";
import CountriesList from "../../organisms/CountryList/CountriesList";

function CountriesTemplate({ countries }: { countries: Country[]}) {
    return (
        <div>
            <CountriesList countries={countries} />
        </div>
    );
}

export default CountriesTemplate;