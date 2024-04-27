import { useSelector } from "react-redux";
import Paginado from "../Paginado/Paginado";
import Character from "../Character/Character";

const Characters = () => {
    const characters = useSelector(state => state.characters);
    const currentPage  = useSelector(state => state)

// console.log(characters);
    const getRandomCharacters = () => {
        const shuffledCharacters = characters.sort(() => Math.random() - 0.5);
        return shuffledCharacters.slice(0, 12);
    };

    let start = (currentPage - 1) * 12;
    let end = currentPage * 12;
    let cantPages = Math.floor(characters.length / 12);
    let viewCharacters = characters.slice(start,end);

    return (
        <div>
            <h1>Characters</h1>
            <Paginado/>
            {/* <Paginado cantPages={cantPages}/> */}
            {/* <div>
                {viewCharacters && viewCharacters.map(character => {
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
                })}
            </div> */}
            <div>
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
        </div>
    );
};

export default Characters;
