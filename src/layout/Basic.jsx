import React, { Component } from 'react'
import { Layout } from 'antd';
const { Header, Content, Footer } = Layout;

export class Basic extends Component {
  render() {
    return(
      <Layout>
        <Header></Header>
        <Content>
          {this.props.children}
        </Content>
        <Footer></Footer>
      </Layout>
    );
  }
}