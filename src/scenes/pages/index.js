import React from "react";
import { Route } from "react-router-dom";

// import { Link } from "react-router-dom";
// import { Container, Row, Col } from "react-grid-system";

// Sections
import Blog from "./Blog";
import Story from "./About";
import Intro from "./Intro";
import Service from "./Service";
import Contact from "./Contact";
import BlogSinglePost from "./BlogSinglePost";
import Signup from "./signup";

// Components
import Helmet from "../../components/common/Helmet";


function Demo() {

    return (
        <div>
        <Helmet title="Complecto" />
        <Route path="/" component={Intro} />
        <Route path="/story" component={Story} />
        <Route path="/signup" component={Signup} />
        <Route path="/service" component={Service} />
        <Route path="/blog" component={Blog} />
        <Route path="/contact" component={Contact} />
        <Route path="/blogSinglePost" component={BlogSinglePost} />
    </div>
    );
}

export default Demo;
