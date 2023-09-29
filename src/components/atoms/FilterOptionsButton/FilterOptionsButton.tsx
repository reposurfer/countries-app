import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../../redux/store"
import './FilterOptionsButton.css'

function FilterOptionsButton() {
    const isOpen = useSelector((state: RootState) => state.filter.isOpen);
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch({ type: 'filter/setIsOpen', payload: !isOpen });
    }

    return (
        <div className="button" onClick={handleClick}>Options</div>
    )
}

export default FilterOptionsButton