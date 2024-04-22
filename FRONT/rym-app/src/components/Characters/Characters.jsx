import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCharacters, cleanStateDetail } from "../../redux/actions";
import Character from "../Character/Character";

const Characters = () => {
    const dispatch = useDispatch();
    const characters = useSelector(state => state.characters);

    useEffect(() => {
        dispatch(cleanStateDetail());
        dispatch(getCharacters())
    }, [characters]);

    // console.log(characters);
    return(
        <div>
            <h1>Characters</h1>

            {characters.map(character => {
                return(
                    <Character 
                        key={character.id}
                        id={character.id}
                        name={character.name}
                        status={character.status}
                        species={character.species}
                        gender={character.gender}
                        origin={character.origin.name}
                        image={character.image}
                    />
                )
            })

            }
        </div>
    )
};

export default Characters;