import { GET_CHARACTERS, GET_CHARACTERS_DETAIL, CLEAN_DETAIL, GET_USERS } from "./action-types";

const initialState = {
    users: [],
    userFound: [],
    characters: [],
    characterDetail: {},
    favoritesCharacters: [],
    AllFavoritesCharacters: [],
    currentPage: 1
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

        case GET_USERS:
            return{
                ...state,
                users: action.payload
            }


        default:
            return {...state}
    }
};
 
export default reducer;