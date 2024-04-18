import { GET_CHARACTERS, GET_CHARACTERS_DETAIL, CLEAN_DETAIL } from "./action-types";
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
    return function(dispatch){
        return dispatch({ type: CLEAN_DETAIL })
    };
};