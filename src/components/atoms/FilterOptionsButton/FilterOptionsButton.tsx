import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../../redux/store"
import { BsChevronDown, BsChevronUp } from 'react-icons/bs'
import './FilterOptionsButton.css'

function FilterOptionsButton() {
    const isOpen = useSelector((state: RootState) => state.filter.isOpen);
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch({ type: 'filter/setIsOpen', payload: !isOpen });
    }

    return (
        <div className={`button ${isOpen && "alter-border-radius"}`} onClick={handleClick}>{isOpen ? <BsChevronDown /> : <BsChevronUp />}</div>
    )
}

export default FilterOptionsButton