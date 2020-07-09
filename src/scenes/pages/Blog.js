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
      title: 'Complecto Update 6/29'
    },
    {
      title: 'Complecto Update 6/12'
    },
    {
      title: 'Complecto Update 5/29'
    },
    {
      title: 'Complecto Update 5/12',
    },
  ];

  const data19 = [
    {
      title: 'Complecto Update 4/25'
    },
    {
      title: 'Complecto Update 3/27'
    },
    {
      title: 'Complecto Update 2/29'
    },
    {
      title: 'Complecto Update 2/15'
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
                    <Headline label="Updated Blog" title="Our Latest Updates" divider_1={true} position="center" />
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
                                description="Our updates on this day and general goings."
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
