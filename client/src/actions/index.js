import Axios from "axios";
// import _ from "lodash";
import {
    LOGGED_IN
} from "./types";


export function login(values, callback) {
    callback();
    return {
        type: LOGGED_IN,
        payload: {username: values.username, type: "buyer"}
    };
}