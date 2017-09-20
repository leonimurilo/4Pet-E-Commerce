import { LOGGED_IN, LOGGED_OUT } from "../actions/types";

export default function(state = {}, action){
    switch(action.type){
        case LOGGED_IN:
            return action.payload;
        case LOGGED_OUT:
            return {};
        default: return state;
    }
}