import { GET_CHARACTERS, GET_CHARACTERS_DETAIL, CLEAN_DETAIL } from "./action-types";

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
        case CLEAN_DETAIL:
            return{
                ...state,
                characterDetail: {}
            }


        default:
            return {...state}
    }
};
 
export default reducer;