import React, { Component } from 'react';
import { Table, Tag, Space, Button } from 'antd';
export class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 100,
      loading: true,
      pageNum: 1,
      pageSize: 10
    }
  }
  componentDidMount() {
  }

  changePage(current) {
    //
    console.log('current is:', current)
  }
  onShowSizeChange(current, pageSize) {
    this.setState({
      pageSize: pageSize
    })
    console.log('current and pagesize :', current, pageSize)
  }

  handleTableChange(pagination, filters, sorter) {
    console.log('handleTableChange', pagination, filters, sorter)
  }
  render() {
    const columns = [{
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
      render: text => <Button type="link">{text}</Button>
    }, {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
      sorter: true,
    }, {
      title: '性别',
      dataIndex: 'sex',
      key: 'sex',
      filters: [
        { text: 'Male', value: 'male' },
        { text: 'Female', value: 'female' },
      ],
    }, {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: tags => (
        <span>
          {
            tags.map(tag => {
              let color = tag.length > 5 ? 'geekblue' : 'green';
              if (tag === 'loser') {
                color = 'volcano';
              }
              return (
                <Tag color={color} key={tag}>
                  {tag.toUpperCase()}
                </Tag>
              )
            })
          }
        </span>
      )
    }, {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <Button>Invite {record.name}</Button>
          <Button>Delete</Button>
        </Space>
      ),
    }]
    const list = [{
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },]
    const paginationProps = {
      showSizeChanger: true,//每页显示数据条数
      showQuickerJumper: false,
      showTotal: () => `共${this.state.total}条`,
      pageSize: this.state.pageSize,
      total: this.state.total,
      onChange: (current) => this.changePage(current),
      onShowSizeChange: (current, pageSize) => {
        console.log(pageSize);
        this.onShowSizeChange(current, pageSize)
      },
      position: ['none', 'bottomcenter']
    }

    return (
      <Table
        columns={columns}
        dataSource={list}
        rowKey={record => record.key}
        pagination={paginationProps}
        onChange={this.handleTableChange} />
    );
  }
}