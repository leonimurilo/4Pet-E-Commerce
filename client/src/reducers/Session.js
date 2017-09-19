import { LOGGED_IN, LOGGED_OUT } from "../actions/types";

export default function(state = { logged: false }, action){
    switch(action.type){
        case LOGGED_IN:
            return {logged: true};
        case LOGGED_OUT:
            return {logged: false};
        default: return state;
    }
}