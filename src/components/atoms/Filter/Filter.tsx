import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { getAllCountries } from '../../../services/countries.service';
import './Filter.css';

function Filter() {
    const dispatch = useDispatch();
    const countries = useSelector((state: RootState) => state.countries.value);

    const handleOnChange = (e: any) => {
        const input = e.target.value;
        if(input === '') {
            getAllCountries().then((countries) => {
                dispatch({ type: 'countries/setCountries', payload: countries });
                return;
            });
        }
        const filteredCountries = countries.filter((country) => {
            return country.name.official.toLowerCase().includes(e.target.value.toLowerCase());
        });

        dispatch({ type: 'countries/setCountries', payload: filteredCountries });
    }

    return (
        <div className="filter">
            <input onChange={handleOnChange} type="text" placeholder="Filter by name" />
        </div>
    );
}

export default Filter;