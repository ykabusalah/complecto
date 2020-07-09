import React from "react";
import { useRouteMatch , Link } from "react-router-dom";

import { Layout } from 'antd';
import { Row, Col } from 'antd';
import { Button } from 'antd';

const { Header } = Layout;

const links = [
    {
        title: "Home",
        path: "/",
    },
    {
        title: "Our Story",
        path: "/story",
    },
    {
        title: "What We Do",
        path: "/service",
    },
    {
        title: "Events",
        path: "/blog",
    },
    {
        title: "Contact",
        path: "/contact",
    },
];
 
function MainHeader() {
    let { url } = useRouteMatch();
    return (
        <>
        <Layout>
    <Header style={{ position: 'fixed', zIndex: 999999, width: '100%',backgroundColor:'#fff' }}>
      <Row>
        <Col xs={4} sm={4} md={6} lg={6} xl={6}>
        <div className="logo header-logo">
                    <a href="/"><img src="/assets/images/images/Complecto_transparent-background.png"  alt="Complecto_logo" 
                    className="Complecto_logo" /></a>
       </div>
        </Col>
        <Col xs={20} sm={20} md={18} lg={18} xl={18} justify="end">
            <ul className="headerLinks">
            {links.map((item, index) => (
                        <li key={index}>
                            <Link to={`${item.path}`} activeClassName="active">
                                <span className="anchor">{item.title}</span>
                            </Link>
                        </li>
                    ))}
            <li><Button type="default" className="donateBtn">Donate</Button></li>
            </ul>
        </Col>
    </Row>
    </Header>
    </Layout>
        </>
    );
}

export default MainHeader;
