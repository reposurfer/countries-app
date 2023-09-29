import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { getAllCountries } from '../../../services/countries.service';
import './Filter.css';
import { filterCountryByCapital, filterCountryByName, filterCountryByRegion } from '../../../utils/filter.helpers';

function Filter() {
    const dispatch = useDispatch();
    const countries = useSelector((state: RootState) => state.countries.countries);

    const handleOnChange = (e: any) => {
        const input: string = e.target.value;
        if(input === '') {
            getAllCountries().then((countries) => {
                dispatch({ type: 'countries/setCountries', payload: countries });
                return;
            });
        }
        const filteredCountries = countries.filter((country) => {
            return filterCountryByName(country, input) || filterCountryByCapital(country, input) || filterCountryByRegion(country, input);
        });

        dispatch({ type: 'countries/setFilteredCountries', payload: filteredCountries });
    }

    return (
        <div className="filter">
            <input onChange={handleOnChange} type="text" placeholder="Filter by your imagination" />
        </div>
    );
}

export default Filter;