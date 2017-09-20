import {combineReducers} from "redux";

import Session from "./Session";
import User from "./User";
import ProductList from "./ProductList";

// redux form is just saving us from having to create a bunch of action creators
// when we use the Field component inside our components, they already take care about firing the needed actions
import {reducer as formReducer} from "redux-form";

const rootReducer = combineReducers({
    form: formReducer,
    session: Session,
    user: User,
    productList : ProductList
});

export default rootReducer;