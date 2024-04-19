import { GET_CHARACTERS, GET_CHARACTERS_DETAIL, CLEAN_DETAIL, SEARCH_EMAIL } from "./action-types";
import axios from 'axios';

export const getCharacters = () => {
    return async function(dispatch){
        const response = await axios('/');
        return dispatch({ type: GET_CHARACTERS, payload: response.data.results });
    };
};

export const getCharactersDetail = (id) => {
    return async function(dispatch){
        const response = await axios(`/${id}`);
        // console.log(response.data);
        return dispatch({ type: GET_CHARACTERS_DETAIL, payload: response.data });
    };
};

export const cleanStateDetail = () => {
    return { type: CLEAN_DETAIL };
};

export const searchEmail = () => {
    
    return { type: SEARCH_EMAIL };
}