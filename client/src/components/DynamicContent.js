import React, {Component} from "react";
import {Route, Switch} from "react-router-dom";

import Catalog from "./Catalog";
import Profile from "./Profile";
import Cart from "./Cart";

class DynamicContent extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div id="dynamic-content">
                <Switch>
                    {/*<Route exact path="/" component={Catalog}/>*/}
                    <Route path="/cart" component={Cart}/>
                    <Route path="/profile" component={Profile}/>
                    <Route path="/" component={Catalog}/>
                </Switch>
            </div>
        );
    }
}

export default DynamicContent;