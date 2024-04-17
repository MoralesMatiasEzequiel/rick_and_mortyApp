import { GET_CHARACTERS } from "./action-types";
import axios from 'axios';

export const getCharacters = () => {
    return async function(dispatch){
        const response = await axios('URL de la api');
        return dispatch({ type: GET_CHARACTERS, payload: response.data.characters });
    };
};