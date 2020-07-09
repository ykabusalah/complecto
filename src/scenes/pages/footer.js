import React from "react";
import { Container, Row, Col } from "react-grid-system";
import { Input , Radio} from 'antd';
import { FaFacebookF , FaLinkedinIn } from "react-icons/fa";

function Footer() {
    return (
        <footer>
            <Container className="container">
                <Row>
                    <Col xs={12} md={12} lg={6} xl={6}>
                        <div className="">
                            <h2>Follow Us</h2>
                        </div>
                        <ul className="socialShareLinks">
                            <li><a href="/"><FaFacebookF className="icon" /></a></li>
                            <li><a href="/"><FaLinkedinIn className="icon"/></a></li>
                        </ul>
                    </Col>

                    {/* <Col xs={12} md={12} lg={6} xl={4}>
                    <div className="">
                        <h2>Get Involved</h2>
                    </div>
                        <ul>
                            <li><Link to='/signup'>LOG IN</Link></li>
                        </ul>
                    </Col> */}

                    <Col xs={12} md={12} lg={6} xl={6}>
                    <div className="">
                        <h2>Get Complecto updates!</h2>
                    </div>
                        <Row>
                       <form style={{width:'100%',display: 'contents'}} action="https://gmail.us18.list-manage.com/subscribe/post?u=32002eab76ebee8e7cb014581&amp;id=d81e35604b" 
                            method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="footerForm" target="_blank" 
                            noValidate>
                            <Col xs={12} md={12} lg={6} xl={6} className="subscribe">
                            <input type="text"  placeholder="First Name" name="FNAME"  id="mce-FNAME" />
                            </Col>
                            <Col xs={12} md={12} lg={6} xl={6} className="subscribe">
                            <input type="text"  name="LNAME"   placeholder="Last Name " id="mce-LNAME" />
                            </Col>
                            <Col xs={12} md={12} lg={12} xl={12}>
                            <input type="email"  placeholder="Email Address" name="EMAIL"  id="mce-EMAIL" />
                            </Col>
                            <Col xs={12} md={12} lg={12} xl={12}>  
                                <input type="submit" 
                                style={{background: '#8333FF',color: '#fff'}}
                                value="Subscribe" name="subscribe" id="mc-embedded-subscribe" />
                            </Col>
                            </form>
                        </Row>
                    </Col>

                </Row>
            </Container>
        </footer>
    );
}

export default Footer;
