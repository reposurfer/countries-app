import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { getAllCountries } from '../../../services/countries.service';
import './Filter.css';
import { filterCountryByCapital, filterCountryByName, filterCountryByRegion } from '../../../utils/filter.helpers';

function Filter() {
    const dispatch = useDispatch();
    const countries = useSelector((state: RootState) => state.countries.countries);
    const options = useSelector((state: RootState) => state.filter.options);

    const handleOnChange = (e: any) => {
        const input: string = e.target.value;
        if(input === '') {
            getAllCountries().then((countries) => {
                dispatch({ type: 'countries/setCountries', payload: countries });
                return;
            });
        }
        const filteredCountries = countries.filter((country) => {
            console.log(options);
            if(options.name && options.capital && options.region) {
                return filterCountryByName(country, input) || filterCountryByCapital(country, input) || filterCountryByRegion(country, input);
            }
            if(options.name && options.capital) {
                return filterCountryByName(country, input) || filterCountryByCapital(country, input);
            }
            if(options.name && options.region) {
                return filterCountryByName(country, input) || filterCountryByRegion(country, input);
            }
            if(options.capital && options.region) {
                return filterCountryByCapital(country, input) || filterCountryByRegion(country, input);
            }
            if(options.name) {
                return filterCountryByName(country, input);
            }
            if(options.capital) {
                return filterCountryByCapital(country, input);
            }
            if(options.region) {
                return filterCountryByRegion(country, input);
            }
            return false;
        });

        dispatch({ type: 'countries/setFilteredCountries', payload: filteredCountries });
    }

    return (
        <div className="filter">
            <input onChange={handleOnChange} type="text" placeholder="Filter by your options" />
        </div>
    );
}

export default Filter;