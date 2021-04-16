import React, { useState } from 'react';
import {Button, Modal, Form, Input, Radio} from 'antd';
import {PlusSquareFilled} from '@ant-design/icons';

const CollectionCreateForm = ({ visible, onCreate, onCancel, hrInfo}) => {
    const [form] = Form.useForm();
    return (
        <Modal
            visible={visible}
            title="修改个人信息"
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
                initialValues={{
                    sex: hrInfo.sex,
                    name: hrInfo.name,
                    number: hrInfo.number,
                    company: hrInfo.company,
                    idCard: hrInfo.idCard,
                    email: hrInfo.email,
                    password: hrInfo.password,
                }}
            >
                <Form.Item name="idCard" label="身份证号">
                    <Input disabled/>
                </Form.Item>
                <Form.Item name="name" label="姓名" rules={[{required: true, message: 'Please input the title of collection!',},]}>
                    <Input/>
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

const MyCollectionsPage = (props) => {
    const [visible, setVisible] = useState(false);

    const onCreate = (values) => {
        //console.log('Received values of form: ', values);
        setVisible(false);
        props.success(true,values)
    };

    return (
        <div>
            <Button type="primary" onClick={() => {setVisible(true);}}>
                    <PlusSquareFilled />
                    修改
            </Button>
            <CollectionCreateForm
                visible={visible}
                onCreate={onCreate}
                onCancel={() => {
                    setVisible(false);
                }}
                hrInfo={props.hrInfo}
            />
        </div>
    );
};

export default MyCollectionsPage
