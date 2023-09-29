import FilterOptionsButton from "../../atoms/FilterOptionsButton/FilterOptionsButton";
import FilterOptionsDropdown from "../../atoms/FilterOptionDropdown/FilterOptionsDropdown";
import './FilterOptionsGroup.css';

function FilterOptionsGroup() {
    return (
        <div className="dropdown">
        <FilterOptionsButton />
        <FilterOptionsDropdown />
        </div>
    )
}

export default FilterOptionsGroup;