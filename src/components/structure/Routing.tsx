import React from 'react';
import {Route} from "react-router-dom";
import Home from "../pages/Home";
import Store from "../pages/Store";
import Blog from "../pages/Blog";

const Routing = () => {
    return (
        <div>
            <Route path={"/blog"} component={Blog}/>
            <Route path={"/store"} component={Store}/>
            <Route path={"/"} exact component={Home}/>
        </div>
    );
};

export default Routing;