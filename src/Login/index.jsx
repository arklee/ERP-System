import React, {Component} from 'react';
import {Row, Form, Input, Button, Checkbox, Space} from 'antd';
import today from './today.png'

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
        console.log('Success:', values);
    };

    onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    loginHR = ()=>{
        this.props.history.push(`/hr`)
    }

    loginStf = ()=>{
        this.props.history.push(`/stuff`)
    }

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
                        <h1>今目标  员工查</h1>
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
                            <Button type="primary" htmlType="submit" block={true} onClick={this.loginHR}>
                                HR登录
                            </Button>
                            <Button type="primary" htmlType="submit" block={true} onClick={this.loginStf}>
                                员工登录
                            </Button>
                            <Button htmlType="submit" block={true}>
                                注册
                            </Button>
                        </Space>
                    </Form.Item>
                </Form>
            </Row>
        );
    }
}

export default Login
