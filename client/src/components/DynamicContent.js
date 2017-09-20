import React, {Component} from "react";
import {Route, Switch} from "react-router-dom";

import Catalog from "./Catalog";
import Profile from "./Profile";
import Purchases from "./Purchases";
import SellerProducts from "./SellerProducts";
import Sales from "./Sales";
import Login from "./Login";
import Home from "./Home";
import NotFound from "./NotFound";

class DynamicContent extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div id="dynamic-content">
                <Switch>
                    {/*<Route exact path="/" component={Catalog}/>*/}
                    <Route path="/Login" component={Login}/>
                    <Route path="/Purchases" component={Purchases}/>
                    <Route path="/Profile" component={Profile}/>
                    <Route path="/Products" component={SellerProducts}/>
                    <Route path="/Sales" component={Sales}/>
                    <Route path="/Catalog" component={Catalog}/>
                    <Route exact path="/" component={Home}/>
                    <Route path="/" component={NotFound}/>
                </Switch>
            </div>
        );
    }
}

export default DynamicContent;