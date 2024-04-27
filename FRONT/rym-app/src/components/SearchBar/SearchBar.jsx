import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { getCharactersDetail } from '../../redux/actions';


const SearchBar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [idChar, setIdChar] = useState('');

    const handleChange = (event) => {
        setIdChar(event.target.value);
    };

    const handleSearch = async () => {
        // console.log(dispatch(getCharactersDetail(idChar)));
        if(await dispatch(getCharactersDetail(idChar)) === false){
            alert('No existe personaje con este ID.')
            setIdChar('');
            return navigate('/home');
        }
        dispatch(getCharactersDetail(idChar))
        setIdChar('');
        navigate(`/detail/${idChar}`);
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