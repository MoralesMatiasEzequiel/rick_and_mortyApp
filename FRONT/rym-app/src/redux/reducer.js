import { GET_CHARACTERS, GET_CHARACTERS_DETAIL, CLEAN_DETAIL, SEARCH_EMAIL } from "./action-types";

const initialState = {
    users: [],
    userFound: [],
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
        case CLEAN_DETAIL:
            return{
                ...state,
                characterDetail: {}
            }

        case SEARCH_EMAIL:
            return{
                ...state,

            }


        default:
            return {...state}
    }
};
 
export default reducer;