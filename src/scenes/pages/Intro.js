import React from "react";
import { Container, Row, Col } from "react-grid-system";
import Header from "./Header";
import Footer from "./footer";



const features = [
    {
        icon: "",
        title: "Sponsor",
        subtitle: "Being loved, wanted & cared for-that is what your sponsorship provides every child that we are blessed to help. $50/month covers education, food, uniforms, school supplies & medical care. Every child deserves to feel someone cares.",
        image: "/assets/images/demo/feature-1.png",
    },
    {
        icon: "",
        title: "Empower",
        subtitle: "Empower leaders on the front lines. Your support allows us to create a direct, meaningful impact on the lives and communities we serve. From building a school to simply holding a hand, we are never alone with your support.",
        image: "/assets/images/demo/feature-2.png",
    },
    {
        icon: "",
        title: "Donate",
        subtitle: "Every single cent counts, and your generosity matters. Through your donation, we are a huge step closer to empowering a servant leader & an entire community. As we are able to deepen Complecto’s impact, lives are changed.",
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
                                    <h1>Empowering World Changers & Difference Makers</h1>
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
                        <h2>Why Choose Us?</h2>
                        <h3>Our Awesome key features.</h3>
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
