import React, {Component} from 'react';
import {Row, Form, Input, Button, Checkbox, Space, message} from 'antd';
import axios from 'axios'
import today from './today.png'
import Register from "./Register";

const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
};

class Login extends Component {

    onFinish = (values) => {
        axios.get(`http://localhost:3000/default/login?id=${values.username}&password=${values.password}`).then(
            response => {
                this.props.getID(values.username)
                if (response.data === 'hr') {
                    this.props.history.push(`/hr`)
                } else if (response.data === 'stuff') {
                    this.props.history.push(`/stuff`)
                } else if (response.data === 'company') {
                    this.props.history.push(`/company`)
                } else {
                    message.warning('用户名或密码错误');
                }
            }
        )
    };

    onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    render() {
        return (
            <Row justify="center" style={{textAlign: 'center'}}>
                <Form
                    {...layout}
                    name="basic"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={this.onFinish}
                    onFinishFailed={this.onFinishFailed}
                    className='loginBox'
                    style={{width: '450px'}}
                >
                    <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                        <img style={{width: '75px',overflow:'hidden'}} src={today} alt=""/>
                        <h1>安聘</h1>
                        <p style={{color: 'darkgrey'}}>最好用的员工招聘信息管理系统</p>
                    </Form.Item>
                    <Form.Item
                        label="用户名"
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: '请输入手机号/用户名/邮箱',
                            },
                        ]}
                    >
                        <Input placeHolder='请输入手机号/用户名/邮箱'/>
                    </Form.Item>

                    <Form.Item
                        label="密码"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: '请输入密码',
                            },
                        ]}
                    >
                        <Input.Password placeHolder='请输入密码'/>
                    </Form.Item>

                    <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                        <Checkbox>记住我的登录状态</Checkbox>
                    </Form.Item>

                    <Form.Item {...tailLayout}>
                        <Space size="large">
                            <Button type="primary" htmlType="submit" block={true}>
                                登录
                            </Button>
                            <Register/>
                        </Space>
                    </Form.Item>
                </Form>
            </Row>
        );
    }
}

export default Login
