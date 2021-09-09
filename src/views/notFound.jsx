import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import { Result, Button } from 'antd';
export class notFound extends Component {
  render() {
    return (
      <Result
        status="404"
        title="404"
        subTitle="抱歉，当前访问页面不存在！"
        extra={ <NavLink to="/"><Button type="primary">返回首页</Button></NavLink> }
      />
    );
  }
}