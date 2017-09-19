import { LOAD_PRODUCT_LIST } from "../actions/types";

export default function(state = [], action){
    switch(action.type){
        case LOAD_PRODUCT_LIST:
            return []; // from action payload
        default: return state;
    }
}