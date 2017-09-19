import React, {Component} from "react";
import {Route, Switch} from "react-router-dom";

import Catalog from "./Catalog";
import Profile from "./Profile";

class DynamicContent extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div id="dynamic-content">
                <Switch>
                    <Route exact path="/" component={Catalog}/>
                    <Route path="/chat" component={Profile}/>
                </Switch>
            </div>
        );
    }
}

export default DynamicContent;