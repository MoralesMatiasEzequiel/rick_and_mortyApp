import { GET_CHARACTERS, GET_CHARACTERS_DETAIL } from "./action-types";

const initialState = {
    characters: [],
    characterDetail: {}
};

const reducer = (state = initialState, action) => {
    switch(action.type){
        case GET_CHARACTERS:
            return {
                ...state,
                characters: action.payload
            }

        case GET_CHARACTERS_DETAIL:
            // console.log(action.payload);
            return {
                ...state,
                characterDetail: action.payload
            }

        default:
            return {...state}
    }
};
 
export default reducer;