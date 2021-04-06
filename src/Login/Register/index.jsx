import React, { useState } from 'react';
import {Row, Button, Modal, Form, Input, Radio, message} from 'antd';
import axios from 'axios'

const CollectionCreateForm = ({ visible, onCreate, onCancel }) => {
    const [form] = Form.useForm();
    return (
        <Modal
            visible={visible}
            title="注册账户"
            okText="录入"
            cancelText="取消"
            onCancel={onCancel}
            onOk={() => {
                form.validateFields().then((values) => {
                        form.resetFields();
                        onCreate(values);
                    }).catch((info) => {
                        console.log('Validate Failed:', info);
                    });
            }}
        >
            <Form
                form={form}
                layout="vertical"
                name="form_in_modal"
            >
                <Form.Item name="name" label="姓名" rules={[{required: true, message: 'Please input the title of collection!',},]}>
                    <Input/>
                </Form.Item>
                <Form.Item name="idCard" label="身份证号">
                    <Input type="textarea" />
                </Form.Item>
                <Form.Item name="sex" label="性别">
                    <Radio.Group>
                        <Radio value="男">男</Radio>
                        <Radio value="女">女</Radio>
                    </Radio.Group>
                </Form.Item>
                <Form.Item name="number" label="电话号码">
                    <Input />
                </Form.Item>
                <Form.Item name="company" label="公司">
                    <Input />
                </Form.Item>
                <Form.Item name="email" label="邮箱">
                    <Input />
                </Form.Item>
                <Form.Item name="password" label="密码">
                    <Input type="password"/>
                </Form.Item>
            </Form>
        </Modal>
    );
};

const Register = () => {
    const [visible, setVisible] = useState(false);

    const onCreate = (values) => {
        //console.log('Received values of form: ', values);
        setVisible(false);
        axios.post(`http://localhost:3000/register`, values).then(
            response => {
                if (response.data) {
                    message.success('注册成功');
                }
            },
            error => {
                message.error('注册失败'+error)
            }
        )
    };

    return (
        <div>
            <Row justify="center">
                <Button onClick={() => {setVisible(true);}}>
                    注册
                </Button>
            </Row>
            <CollectionCreateForm
                visible={visible}
                onCreate={onCreate}
                onCancel={() => {
                    setVisible(false);
                }}
            />
        </div>
    );
};

export default Register
