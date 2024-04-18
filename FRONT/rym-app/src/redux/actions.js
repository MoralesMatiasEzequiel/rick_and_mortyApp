import { GET_CHARACTERS } from "./action-types";
import axios from 'axios';

export const getCharacters = () => {
    return async function(dispatch){
        const response = await axios('/');
        // console.log(response.data.results);
        return dispatch({ type: GET_CHARACTERS, payload: response.data.characters });
    };
};