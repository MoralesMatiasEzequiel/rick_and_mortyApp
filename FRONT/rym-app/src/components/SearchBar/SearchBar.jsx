import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getCharactersDetail } from '../../redux/actions';


const SearchBar = () => {
    const dispatch = useDispatch();
    const [idChar, setIdChar] = useState('');

    const handleChange = (event) => {
        setIdChar(event.target.value);
    };

    const handleSearch = async () => {
        dispatch(getCharactersDetail(idChar))
        setIdChar('');
    }

    return(
        <div>
            <div>
                <input type='search' name="search" onChange={handleChange} value={idChar} placeholder="Search characters..." autoComplete="off" />
            </div>
            <div>
                {idChar.length > 0 && <button onClick={handleSearch}>
                Buscar</button>
                }
            </div>
        </div>
    )
};


export default SearchBar;