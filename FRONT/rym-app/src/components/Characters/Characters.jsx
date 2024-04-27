import { useSelector } from "react-redux";
import Paginado from "../Paginado/Paginado";
import Character from "../Character/Character";

const Characters = () => {
    const characters = useSelector(state => state.characters);

    const getRandomCharacters = () => {
        const shuffledCharacters = characters.sort(() => Math.random() - 0.5);
        return shuffledCharacters.slice(0, 8);
    };

    return (
        <div>
            <h1>Characters</h1>
            <Paginado/>
            {getRandomCharacters().map(character => (
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
            ))}
        </div>
    );
};

export default Characters;
