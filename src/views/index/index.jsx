import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, notification } from 'antd';
import { setCount } from '@/store/actions'
import { test } from '@/api/demo';
import { NavLink } from 'react-router-dom';

class Home extends Component {
  constructor (props){
    super(props);
    this.state = {
      loading:false
    }
  }
  componentDidMount=()=> {
  }
  ajaxTest = async ()=> {
    const data = await test({mobile:13914043463});
    notification.success({message:JSON.stringify(data)})
  }
  render() {
    const { PayIncrease,count } = this.props;
    return (
      <div>
        reducer:{count}
        <br /><br />
        <Button type="primary" onClick={ PayIncrease }>dispatch</Button>
        <br /><br />
        <Button type="primary" onClick={ this.ajaxTest }>请求接口</Button>
        <br /><br />
        <NavLink to="/List"><Button type="primary">去用户中心</Button></NavLink>
      </div>
    );
  }
}
const mapStateToProps = (state)=> {
  return {
    count: state.count
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    PayIncrease: () => dispatch(setCount(99999)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)