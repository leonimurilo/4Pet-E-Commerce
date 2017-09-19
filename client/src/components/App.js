import React, {Component} from "react";
import {BrowserRouter} from "react-router-dom";

import DynamicContent from "./DynamicContent";
import NavigationBar from "./NavigationBar";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="container">
                    <NavigationBar/>
                    <DynamicContent/>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;