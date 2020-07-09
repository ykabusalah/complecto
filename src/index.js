import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Switch, Route } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
// Stylesheet
import "./index.scss";
import 'antd/dist/antd.css';
// Scenes
import Index from "./scenes/pages/index";
import Contact from "./scenes/pages/Contact";
import Story from "./scenes/pages/About";
import Signup from "./scenes/pages/signup";
import Service from "./scenes/pages/Service";
import Blog from "./scenes/pages/Blog";
import BlogSinglePost from "./scenes/pages/BlogSinglePost";

// Components
import Error404 from "./components/common/Error404";
import RedirectAs404 from "./components/common/RedirectAs404";


const Root = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Index} />
                <Route path="/story" component={Story} />
                <Route path="/signup" component={Signup} />
                <Route path="/service" component={Service} />
                <Route path="/blog" component={Blog} />
                <Route path="/contact" component={Contact} />
                <Route path="/blogSinglePost" component={BlogSinglePost} />
                <Route component={RedirectAs404} />
            </Switch>
        </div>
    );  
};

ReactDOM.render(
    <HashRouter>
        <div>
            <Route path="/" render={({ location }) => (location.state && location.state.is404 ? <Error404 /> : <Root />)} />
        </div>
    </HashRouter>,
    document.getElementById("root")
);
serviceWorker.unregister();
