import { GET_CHARACTERS, GET_CHARACTERS_DETAIL, CLEAN_DETAIL, GET_USERS } from "./action-types";
import axios from 'axios';

export const getCharacters = () => {
    return async function(dispatch){
        const response = await axios('/characters');
        return dispatch({ type: GET_CHARACTERS, payload: response.data });
        // return dispatch({ type: GET_CHARACTERS, payload: response.data.results });
    };
};

export const getCharactersDetail = (id) => {
    return async function(dispatch){
        const response = await axios(`/characters/${id}`);
        return dispatch({ type: GET_CHARACTERS_DETAIL, payload: response.data });
    };
};

export const getUsers = () => {
    return async function(dispatch){
        const response = await axios('/users');
        return dispatch({ type: GET_USERS, payload: response.data });
    };
};

export const cleanStateDetail = () => {
    return { type: CLEAN_DETAIL };
};