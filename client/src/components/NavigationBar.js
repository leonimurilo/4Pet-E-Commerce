import React, {Component} from "react";
import {connect} from "react-redux";
import {NavLink} from "react-router-dom";

// import ProfileNavItem from "./navBarItems/ProfileNavItem";

class NavigationBar extends Component {
    constructor(props){
        super(props);
    }

    // 3 types:
    // 1. unlogged buyer 2. logged buyer 3. logged seller

    render(){
        return(
            <div id="navigation-bar">
                <div className="nav-item">
                    <NavLink exact to="/" activeClassName="nav-item-active">
                        <img className="logo" src="/assets/logo.svg"/>
                    </NavLink>
                </div>
                <div className="nav-item" >
                    <NavLink to="/Catalog" activeClassName="nav-item-active">
                        Catalog
                    </NavLink>
                </div>
                <div className="nav-item">
                    <NavLink to="/Purchases" activeClassName="nav-item-active">
                        My Purchases
                    </NavLink>
                </div>
                <div className="nav-item">
                    <NavLink to="/Profile" activeClassName="nav-item-active">
                        Profile
                    </NavLink>
                </div>
                {/*<ProfileNavItem/>*/}
            </div>

        );
    }

}


// todo: connect some state that will define which components will appear on the navbar
export default connect(null, null, null, {pure: false})(NavigationBar);