import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCharacters } from "../../redux/actions";

const Characters = () => {
    const dispatch = useDispatch();
    const characters = useSelector(state => state.characters);

    useEffect(() => {
        dispatch(getCharacters())
    }, [characters]);

    
    return(
        <div>
            <h1>Characters</h1>
        </div>
    )
};

export default Characters;