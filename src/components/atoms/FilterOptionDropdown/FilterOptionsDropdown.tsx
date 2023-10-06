import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './FilterOptionsDropdown.css';
import { RootState } from '../../../redux/store';

function FilterOptionsDropdown() {
    const dispatch = useDispatch();
    const isOpen = useSelector((state: RootState) => state.filter.isOpen);
    
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
        <div className={"dropdown-content " + (isOpen == true && "show-content")}>
            <div className='container'>
                <div className='item'>
                    <input onChange={handleNameCheckChange} type="checkbox" id="name" name="name" defaultChecked />
                    <label htmlFor="name">Name</label>
                </div>
                <div className='item'>
                    <input onChange={handleRegionCheckChange} type="checkbox" id="region" name="region" defaultChecked />
                    <label htmlFor="region">Region</label>
                </div>
                <div className='item'>
                    <input onChange={handleCapitalCheckChange} type="checkbox" id="capital" name="capital" defaultChecked />
                    <label htmlFor="capital">Capital</label>
                </div>
            </div>
        </div>
    )
}

export default FilterOptionsDropdown;