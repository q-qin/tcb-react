import React, { Component } from 'react';
import { Tabs,Form,Input,Button,message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './style.less';
import { login } from '@/api/user';

const { TabPane } = Tabs;

export class Login extends Component {
  formRef = React.createRef();
  constructor (props){
    super(props);
    this.state = {
      loading:false
    }
  }
  componentDidMount=()=> {
    console.log(this.props)
  }
  onFinish = (values) => {
    console.log(values);
    login({
        ...values,
        type:'1'
    }).then((result)=>{
      const {code,data,msg} = result.result;
      if(code === 200){
        localStorage.setItem('_token',JSON.stringify(data))
        message.success('登录成功~');
        setTimeout(()=>{
          this.props.history.push("/");
        },1e3)
      }else{
        message.error(msg);
      }
    })
  };
  render() {
    return (
    <div className="page">
      <div className="login-box">
        <Tabs centered>
          <TabPane tab="账号密码登录" key="tab1">
            <Form ref={this.formRef} labelCol={{ span: 4 }} onFinish={this.onFinish}>
              <Form.Item
                  label="用户名"
                  name="username"
                  rules={[{ required: true, message: '请输入用户名' }]}
                >
                <Input placeholder="请输入用户名" prefix={<UserOutlined />} />
              </Form.Item>
              <Form.Item
                  label="密码"
                  name="password"
                  rules={[{ required: true, message: '请输入密码' }]}
                >
                <Input.Password placeholder="请输入密码" prefix={<LockOutlined />}/>
              </Form.Item>
              <Form.Item>
                <Button style={{ width:'100%' }} type="primary" htmlType="submit">
                  登录
                </Button>
              </Form.Item>
            </Form>
          </TabPane>
          <TabPane tab="手机动态登录" key="tab2">

          </TabPane>
        </Tabs>
      </div>
    </div>
    );
  }
}