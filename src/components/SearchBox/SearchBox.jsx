import { useDispatch } from "react-redux";
import { updateFilter } from "../../redux/filtersSlice";

export default function SearchBox() {
    const dispatch = useDispatch();

    const handleChange = (event) => {
        dispatch(updateFilter(event.currentTarget.value));
    };
    
    return (
        <>
            <p>Find contacts by name</p>
            <input type="text" onChange={handleChange} />
        </>
   )
}