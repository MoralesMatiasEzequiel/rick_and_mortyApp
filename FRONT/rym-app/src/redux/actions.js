import { GET_USERS, GET_CHARACTERS, GET_CHARACTERS_DETAIL, CLEAN_DETAIL, ADD_FAV, REMOVE_FAV, NEXT_PAGE, PREV_PAGE, CHANGE_PAG } from "./action-types";
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


export const nextPage = () => {
    return {
        type: NEXT_PAGE
    }
}
export const prevPage = () => {
    return {
        type: PREV_PAGE
    }
}

export const changePag = (pagenumber) => {
    return {
        type: CHANGE_PAG,
        payload: pagenumber++
    }
};