import Filter from "../../atoms/Filter/Filter";
import FilterOptionsGroup from "../../molecules/FilterOptionsGroup/FilterOptionsGroup";
import './FilterGroup.css';

function FilterGroup() {
    return (
        <div className="group">
        <FilterOptionsGroup />
        <Filter />
        </div>
    );
}

export default FilterGroup;