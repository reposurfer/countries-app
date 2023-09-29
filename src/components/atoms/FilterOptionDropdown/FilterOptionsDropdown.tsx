import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './FilterOptionsDropdown.css';

function FilterOptionsDropdown() {
    const dispatch = useDispatch();
    
    const handleNameCheckChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({ type: 'filter/setNameOption', payload: event.target.checked });
    }
    const handleRegionCheckChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({ type: 'filter/setRegionOption', payload: event.target.checked });
    }
    const handleCapitalCheckChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({ type: 'filter/setCapitalOption', payload: event.target.checked });
    }

    useEffect (() => {
        dispatch({ type: 'filter/setNameOption', payload: true });
        dispatch({ type: 'filter/setRegionOption', payload: true });
        dispatch({ type: 'filter/setCapitalOption', payload: true });
    }, []);
    return (
        <div className="dropdown-content">
            <ul>
                <li>
                    <input onChange={handleNameCheckChange} type="checkbox" id="name" name="name" defaultChecked />
                    <label htmlFor="name">Name</label>
                </li>
                <li>
                    <input onChange={handleRegionCheckChange} type="checkbox" id="region" name="region" defaultChecked />
                    <label htmlFor="region">Region</label>
                </li>
                <li>
                    <input onChange={handleCapitalCheckChange} type="checkbox" id="capital" name="capital" defaultChecked />
                    <label htmlFor="capital">Capital</label>
                </li>
            </ul>
        </div>
    )
}

export default FilterOptionsDropdown;