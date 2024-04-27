import { GET_USERS, GET_CHARACTERS, GET_CHARACTERS_DETAIL, CLEAN_DETAIL, ADD_FAV, REMOVE_FAV } from "./action-types";
import axios from 'axios';

export const getUsers = () => {
    return async function(dispatch){
        const response = await axios('/users');
        return dispatch({ type: GET_USERS, payload: response.data });
    };
};

export const getCharacters = () => {
    return async function(dispatch){
        const response = await axios('/characters');
        return dispatch({ type: GET_CHARACTERS, payload: response.data });
    };
};

export const getCharactersDetail = (id) => {
    return async function(dispatch){
        const response = await axios(`/characters/${id}`);
        try {
            if (!response.data.name) {
                return false;
            }
            return dispatch({ type: GET_CHARACTERS_DETAIL, payload: response.data });
            
        } catch (error) {
            return error.message;
        }
    };
};

export const cleanStateDetail = () => {
    return { type: CLEAN_DETAIL };
};

