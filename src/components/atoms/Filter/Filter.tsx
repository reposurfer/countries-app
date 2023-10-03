import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { getAllCountries } from '../../../services/countries.service';
import './Filter.css';
import { filterCountryByCapital, filterCountryByName, filterCountryByRegion } from '../../../utils/filter.helpers';
import { setAllCountries, setDisplayCountries } from '../../../redux/slices/countries/countries.slice';

function Filter() {
    const dispatch = useDispatch();
    const countries = useSelector((state: RootState) => state.countries.allCountries);
    const options = useSelector((state: RootState) => state.filter.options);
    const selectedPage = useSelector((state: RootState) => state.pagination.selectedPage);
    const countriesPerPage = useSelector((state: RootState) => state.pagination.countriesPerPage);

    const getSlicedCountries = () => {
        const indexOfLastCountry = selectedPage * countriesPerPage;
        const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
        const slicedCountries = countries.slice(indexOfFirstCountry, indexOfLastCountry);
        return slicedCountries;
    }

    const handleOnChange = (e: any) => {
        const input: string = e.target.value;
        if(input === '') {
            getAllCountries().then((countries) => {
                dispatch(setAllCountries(countries));
                dispatch(setDisplayCountries(getSlicedCountries()));
                return;
            });
        }

        const slicedCountries = getSlicedCountries();

        const displayCountries = slicedCountries.filter((country) => {
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

        dispatch(setDisplayCountries(displayCountries));

    }

    return (
        <div className="filter">
            <input onChange={handleOnChange} type="text" placeholder="Filter by your options" />
        </div>
    );
}

export default Filter;