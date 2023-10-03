import { useDispatch, useSelector } from 'react-redux';
import { setDisplayCountries, setIsLoading } from '../../../redux/slices/countries/countries.slice';
import { setSelectedPage } from '../../../redux/slices/pagination/pagination.slice';
import { RootState } from '../../../redux/store';
import { scrollToTopAnimated } from '../../../utils/pagination.helpers';
import './PageNumber.css';

function PageNumber({ pageNumber }: { pageNumber: number }) {
    const selectedPage = useSelector((state: RootState) => state.pagination.selectedPage);
    const countriesPerPage = useSelector((state: RootState) => state.pagination.countriesPerPage);
    const countries = useSelector((state: RootState) => state.countries.allCountries);
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(setSelectedPage(pageNumber));
        const indexOfLastCountry = pageNumber * countriesPerPage;
        const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
        const slicedCountries = countries.slice(indexOfFirstCountry, indexOfLastCountry);
        dispatch(setDisplayCountries(slicedCountries));
        scrollToTopAnimated(1000);
    }
      
    return (
        <div className={`page-number ${selectedPage === pageNumber ? "selected-page" : ""}`}onClick={handleClick}>
            {pageNumber}
        </div>
    )
}

export default PageNumber