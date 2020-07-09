import React from "react";
import { Container } from "react-grid-system";
import { useRouteMatch , Link } from "react-router-dom";

// Components
import Headline from "../../components/common/Headline";
import Header from "./Header";
import Footer from "./footer";
import { List } from 'antd';

const data = [
    {
      title: 'Complecto Title 2020'
    },
    {
      title: 'Complecto Title 2020'
    },
    {
      title: 'Complecto Title 2020'
    },
    {
      title: 'Complecto Title 2020',
    },
  ];

  const data19 = [
    {
      title: 'Complecto Title 2019'
    },
    {
      title: 'Complecto Title 2019'
    },
    {
      title: 'Complecto Title 2019'
    },
    {
      title: 'Complecto Title 2019'
    },
  ];

function Blog() {

    const { path } = useRouteMatch();
 
    return (
        <>
        <Header />
        <section className="section section-blog section-blog-1">
            <div className="display-spacing">
                <Container className="container">
                    <Headline label="Events" title="Our Latest Events" divider_1={true} position="center" />
                    <h4>2020</h4>
                    <List itemLayout="horizontal"
                            dataSource={data}
                            renderItem={item => (
                            <List.Item>
                                <List.Item.Meta
                                title={<Link to={'/blogSinglePost'} activeClassName="active">
                                <span className="anchor">{item.title}</span>
                                   </Link>}
                                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                                />
                            </List.Item>
                            )}
                        />
                    <br/>

                    

                     <h4>2019</h4>
                    <List itemLayout="horizontal"
                            dataSource={data19}
                            renderItem={item => (
                            <List.Item>
                                <List.Item.Meta
                                 title={<Link to={'/blogSinglePost'} activeClassName="active">
                                 <span className="anchor">{item.title}</span>
                                    </Link>}
                                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                                />
                            </List.Item>
                            )}
                        />
                       
                </Container>
            </div>
        </section>
        <Footer />
        </>
    );
}

export default Blog;
