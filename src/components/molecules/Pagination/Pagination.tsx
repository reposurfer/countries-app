import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import PageNumber from "../../atoms/PageNumber/PageNumber";
import './Pagination.css';
import { useEffect } from "react";

function Pagination() {
    const countriesPerPage = useSelector((state: RootState) => state.pagination.countriesPerPage);
    const totalCountries = useSelector((state: RootState) => state.countries.allCountries.length);

    let pageNumbers: number[] = [];

    for(let i = 1; i <= Math.ceil(totalCountries / countriesPerPage); i++) {
        pageNumbers.push(i);
    }

    useEffect(() => {
        pageNumbers = [];
        for(let i = 1; i <= Math.ceil(totalCountries / countriesPerPage); i++) {
            pageNumbers.push(i);
        }
    }, [totalCountries]);

    return (
        <>
            <div className="pagination-list">
                {pageNumbers.map((number) => (
                    <PageNumber key={number} pageNumber={number} />
                ))}
            </div>
        </>
    );
}

export default Pagination;