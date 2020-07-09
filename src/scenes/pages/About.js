import React from "react";
import { Container, Hidden, Row, Col } from "react-grid-system";
import Header from "./Header";
import Footer from "./footer";

function About() {
    return (
        <>
        <Header />
        <section className="section section-about section-about-1">
            <div className="display-spacing">
                <Container>
                    <Row>
                        <Hidden xs sm md>
                            <Col lg={5}>
                                <div className="about-image">
                                    <div className="image overlay-image" style={{ backgroundImage: `url(/assets/images/images/home_coverbg.jpg)` }}></div>
                                </div>
                            </Col>
                        </Hidden>
                        <Col lg={7}>
                            <div className="about-content">
                                <header className="el-heading">
                                    <h2 className="el-icon">
                                        <span className="el-icon-title">Our Story</span>
                                    </h2>
                                    <div className="divider divider-1"></div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim enim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </header>
                                <Row className="pt-30">
                                    <Col xs={12} sm={12} md={6}>
                                        <div className="el-card-icon">
                                            <div className="el-icon">
                                                <span className="el-icon-icon ti-ruler-pencil"></span>
                                            </div>
                                            <div className="content">
                                                <h5>2012 - Complecto was founded</h5>
                                                <p>Lorem ipsum dolor sit amet Consectetur adipisicing elit.</p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xs={12} sm={12} md={6}>
                                        <div className="el-card-icon">
                                            <div className="el-icon">
                                                <span className="el-icon-icon ti-image"></span>
                                            </div>
                                            <div className="content">
                                                <h5>2013 - Complecto was founded</h5>
                                                <p>Lorem ipsum dolor sit amet Consectetur adipisicing elit.</p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xs={12} sm={12} md={6}>
                                        <div className="el-card-icon">
                                            <div className="el-icon">
                                                <span className="el-icon-icon ti-brush-alt"></span>
                                            </div>
                                            <div className="content">
                                                <h5>2014 - Complecto was founded</h5>
                                                <p>Lorem ipsum dolor sit amet Consectetur adipisicing elit.</p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xs={12} sm={12} md={6}>
                                        <div className="el-card-icon">
                                            <div className="el-icon">
                                                <span className="el-icon-icon ti-ruler-pencil"></span>
                                            </div>
                                            <div className="content">
                                                <h5>2015 - Complecto was founded</h5>
                                                <p>Lorem ipsum dolor sit amet Consectetur adipisicing elit.</p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xs={12} sm={12} md={6}>
                                        <div className="el-card-icon">
                                            <div className="el-icon">
                                                <span className="el-icon-icon ti-ruler-pencil"></span>
                                            </div>
                                            <div className="content">
                                                <h5>2016 - Complecto was founded</h5>
                                                <p>Lorem ipsum dolor sit amet Consectetur adipisicing elit.</p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xs={12} sm={12} md={6}>
                                        <div className="el-card-icon">
                                            <div className="el-icon">
                                                
                                                <span className="el-icon-icon ti-mobile"></span>
                                            </div>
                                            <div className="content">
                                                <h5>2017 - Complecto was founded</h5>
                                                <p>Lorem ipsum dolor sit amet Consectetur adipisicing elit.</p>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="theme-preview-ca overlay-color" style={{ backgroundImage: `url(/assets/images/images/home_coverbg.jpg)` }}>
            <span className="bg-color bg-dark-60"></span>
            <div className="display-center">
                <h4>
                Your support is powerful.
                    <br />
                    with <span>Complecto</span>
                </h4>
                <a href="/#" className="button button-md button-primary">
                    <span className="wave"></span>
                    <span className="text">Donate Now</span> 
                </a>
            </div>
        </div>
       
        <div className="display-spacing">
                <Container>
                    <Row>
                        <Col lg={7}>
                            <div className="about-content">
                                <header className="el-heading">
                                    <h2>Who We Are.</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                         magna aliqua. Ut enim ad minim enim veniam, quis nostrud exercitation 
                                        ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                         magna aliqua. Ut enim ad minim enim veniam, quis nostrud exercitation 
                                        ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                         magna aliqua. Ut enim ad minim enim veniam, quis nostrud exercitation 
                                        ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </header>
                            </div>
                        </Col>
                        <Hidden xs sm md>
                            <Col lg={5}>
                                <div className="about-image">
                                    <div className="image overlay-image" style={{ backgroundImage: `url(/assets/images/images/home_coverbg.jpg)` }}></div>
                                </div>
                            </Col>
                        </Hidden>
                    </Row>
                </Container>
            </div>

            
        </section>
        <Footer />
     </>
    );
}

export default About;
