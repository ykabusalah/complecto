import React from "react";
import { Container } from "react-grid-system";
import Header from "./Header";
import Footer from "./footer";
import { Row, Col } from 'antd';

const service = [
    {
        title: "WE ASSIST",
        subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit incididunt ut labore et dolore",
        link: "/service-details",
        icon: "ti-ruler-alt-2",
    },
    {
        title: "WE BUILD",
        subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit incididunt ut labore et dolore",
        link: "/service-details",
        icon: "ti-ruler-pencil",
    },
    {
        title: "WE NOURISH",
        subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit incididunt ut labore et dolore",
        link: "/service-details",
        icon: "ti-cup",
    }
];

function Service() {
    let sliderSettings = {
        dots: true,
        speed: 500,
        arrows: false,
        infinite: true,
        initialSlide: 0,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
    
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: 993,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    centerMode: true,
                    centerPadding: 50,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    centerPadding: 100,
                },
            },
            {
                breakpoint: 570,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <>
        <Header />
        <section className="section section-service section-service-5">
            <div className="display-spacing mb-0">
                <Container>
                    <header className="el-heading el-heading-center">
                        <div className="el-icon">
                            <h2 className="el-icon-title">
                                <span>What we do.</span>
                            </h2>
                        </div>
                        <h3>How We Work</h3>
                        <div className="divider divider-1-reverse divider-1-1"></div>
                        <div className="divider divider-1-reverse divider-1-2"></div>
                    </header>
                    <p className="howwework_paragraph">We develop software dedicated to teaching computer literacy and computer science 
                    without needing the users to have 
                    </p>
                    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    {service.map((item, index) => (
                        <Col className="gutter-row" span={8} key={index}>
                            <div className="service-wrap">
                                <div className="service-item">
                                    <div className="service-head">
                                        <span className={`el-icon-icon ${item.icon}`}></span>
                                    </div>
                                    <div className="service-body">
                                        <h3>{item.title}</h3>
                                        <p>{item.subtitle}</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        ))}
                    </Row>

                </Container>
            </div>
        </section>
        <Footer />
        </>
    );
}

export default Service;
