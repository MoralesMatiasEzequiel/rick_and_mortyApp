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
        // return dispatch({ type: GET_CHARACTERS, payload: response.data.results });
    };
};

export const getCharactersDetail = (id) => {
    return async function(dispatch){
        const response = await axios(`/characters/${id}`);
        // console.log(response.data);
        try {
            if (!response.data.name) {
                return false;
            }
            // res.status(200).json(dispatch({ type: GET_CHARACTERS_DETAIL, payload: response.data }));
            return dispatch({ type: GET_CHARACTERS_DETAIL, payload: response.data });
            
        } catch (error) {
            // res.status(400).send({ error: error.message })
            return error.message;
        }
    };
};

export const cleanStateDetail = () => {
    return { type: CLEAN_DETAIL };
};

