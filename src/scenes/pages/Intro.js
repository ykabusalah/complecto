import React from "react";
import { Container, Row, Col } from "react-grid-system";
import Header from "./Header";
import Footer from "./footer";



const features = [
    {
        icon: "",
        title: "Create",
        subtitle: "We create various software for school systems that teaches internet literacy and basic computer science principles without a need for an internet access.",
        image: "/assets/images/demo/feature-1.png",
    },
    {
        icon: "",
        title: "Connect",
        subtitle: "We connect students in low-income school systems to experienced professionals and mentors across the college and tech landscape.",
        image: "/assets/images/demo/feature-2.png",
    },
    {
        icon: "",
        title: "Analyze",
        subtitle: "We collect data from our custom curriculums, continually gaining more insight into best practices for technical literacy programs.",
        image: "/assets/images/demo/feature-3.png",
    }
];
 

function Intro() {
    return (
        <>
        <Header />
        <div className="theme-preview">
        <div className="theme-preview-hero">
            <Container className="container">
                <Row>
                    <Col lg={8} xl={7}>
                        <div className="display-full-screen">
                            <div className="display-center">
                                <header className="el-heading el-heading-side">
                                    <h1>Serving Communities in Need through the Power of Software</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                                </header>
                                <a href="/#" className="button button-lg button-primary">
                                    <span className="wave"></span>
                                    <span className="text text-dark">Donate</span>
                                </a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>

        </div>
        <div className="theme-preview-empty overlay-color">
            <div className="bg-image overlay-image" style={{ backgroundImage: `url(/assets/images/images/what-we-dobg.jpg)` }}></div>
            <span className="bg-color bg-dark-60"></span>
            <div className="display-spacing"></div>
            <div className="theme-preview-heading worktogether">
            <h1>We work together.</h1>
            <p><span>WE LISTEN. WE ADVISE.</span></p>
            <br/>
            <p className="msg">Complecto seeks and builds relationships with individuals who are making a diference in their communities.<br/>
            By finding those who are already creating change, we are deepening impact instead of duplicating it.</p>
            <br/>
            <a href=" /our-story" className='prviewBtn'>ABOUT US</a>
            </div>
        </div>
       
        <div className="theme-preview-features">
            <div className="display-spacing">
                <Container className="container">
                    <div className="theme-preview-heading">
                        <h2>What Do We Do?</h2>
                        <h3>We provide these services:</h3>
                    </div>
                    <Row>
                        {features.map((item, index) => (
                            <Col key={index} xs={12} md={12} lg={6} xl={4}>
                                <div className="item">
                                    <div className="image overlay-image" style={{ backgroundImage: `url(${item.image})` }}></div>
                                    <h4>{item.title}</h4>
                                    <p>{item.subtitle}</p>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
        </div>

        </div>
        <Footer />
     </>
    );
}

export default Intro;
