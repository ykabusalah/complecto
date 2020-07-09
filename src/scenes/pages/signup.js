import React from "react";
import { Container, Row, Col ,} from "react-grid-system";
import { Radio} from 'antd';
import Header from "./Header";
import Footer from "./footer";

function About() {
    return (
        <>
        <Header />
        <section className="section section-about section-about-1">
        <div className="theme-preview-ca overlay-color" style={{ backgroundImage: `url(/assets/images/images/home_coverbg.jpg)`,height:'300px' }}>
            <span className="bg-color bg-dark-60"></span>
            <div className="display-center">
                <h4>
                My Account
                </h4>
            </div>
        </div>
        <div className="display-spacing">
                <Container>
                    <Row>
                        <Col lg={6}>
                            <div className="contact-content">
                                <header className="el-heading">
                                    <h2 className="el-icon">
                                        <span className="el-icon-title">Create an Account</span>
                                    </h2>
                                </header>
                                <form className="form form-1 pt-15">
                                    <Row className="row">
                                        <Col xs={12} sm={12} md={6}>
                                            <div className="form-item">
                                                <input type="text" id="form-item-name" />
                                                <label htmlFor="form-item-name">First Name</label>
                                            </div>
                                        </Col>
                                        <Col xs={12} sm={12} md={6}>
                                            <div className="form-item">
                                                <input type="text" id="form-item-email" />
                                                <label htmlFor="form-item-email">Last Name</label>
                                            </div>
                                        </Col>
                                        <Col xs={12} sm={12} md={12}>
                                           <div className="form-item">
                                                <input type="email" id="form-item-email" />
                                                <label htmlFor="form-item-email">Your Email</label>
                                            </div>
                                        </Col>
                                        <Col xs={12} sm={12} md={12}>
                                           <div className="form-item">
                                                <input type="email" id="form-item-email" />
                                                <label htmlFor="form-item-email">Postal Code / Zip</label>
                                            </div>
                                        </Col>
                                        <Col xs={12} sm={12} md={12}>
                                           <div className="form-item">
                                                <input type="email" id="form-item-email" />
                                                <label htmlFor="form-item-email">Password</label>
                                            </div>
                                        </Col>
                                        <Col xs={12} sm={12} md={12}>
                                        <div className="form-item">
                                        <Radio>Send me emails and updates.</Radio>
                                        </div>
                                        </Col>
                                        <Col xs={12} sm={12} md={12}>
                                            <button className="button button-md button-primary">Create Account</button>
                                        </Col>
                                    </Row>
                                </form>
                            </div>
                        </Col>
                        <Col lg={6}>
                        <div className="contact-content">
                                <header className="el-heading">
                                    <h2 className="el-icon">
                                        <span className="el-icon-title">Login</span>
                                    </h2>
                                </header>
                                <form className="form form-1 pt-15">
                                    <Row className="row">
                                        <Col xs={12} sm={12} md={12}>
                                            <div className="form-item">
                                                <input type="text" id="form-item-name" />
                                                <label htmlFor="form-item-name">Your Name</label>
                                            </div>
                                        </Col>
                                        <Col xs={12} sm={12} md={12}>
                                            <div className="form-item">
                                                <input type="email" id="form-item-email" />
                                                <label htmlFor="form-item-email">Your Email</label>
                                            </div>
                                        </Col>
                                        <Col xs={12} sm={12} md={12}>
                                            <button className="button button-md button-primary">Login</button>
                                        </Col>
                                    </Row>
                                </form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
        <Footer />
     </>
    );
}

export default About;
