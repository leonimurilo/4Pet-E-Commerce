import {combineReducers} from "redux";

import Session from "./Session";
import User from "./User";
import ProductList from "./ProductList";

const rootReducer = combineReducers({
    session: Session,
    user: User,
    productList : ProductList
});

export default rootReducer;